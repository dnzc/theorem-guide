'use client'

import { useState, useEffect, useRef } from 'react'

const Inversion = () => {
  const [parameter, setParameter] = useState(0)
  const [gridType, setGridType] = useState('cartesian')
  const canvasRef = useRef(null)
  
  const gridSize = 400
  const gridSpacing = 20
  const centerX = gridSize / 2
  const centerY = gridSize / 2
  
  // Inversion circle parameters
  const inversionCenter = [centerX, centerY]
  const inversionRadius = 80
  
  const originalShapes = {
    triangle: [
      [centerX - 40, centerY + 30],
      [centerX, centerY - 30], 
      [centerX + 40, centerY + 30]
    ],
    square: [
      [centerX - 60, centerY - 60],
      [centerX - 60, centerY - 20],
      [centerX - 20, centerY - 20],
      [centerX - 20, centerY - 60]
    ],
    circle: { center: [centerX + 50, centerY - 50], radius: 25 }
  }
  
  const applyInversion = (point, t) => {
    const [x, y] = point
    const [cx, cy] = inversionCenter
    
    // If point is at inversion center, send to infinity (return far away point)
    if (Math.abs(x - cx) < 0.001 && Math.abs(y - cy) < 0.001) {
      return [gridSize * 10, gridSize * 10] // Point at "infinity"
    }
    
    // Calculate distance from inversion center
    const dx = x - cx
    const dy = y - cy
    const distanceSquared = dx * dx + dy * dy
    
    // Apply inversion: r² / |P - O|² * (P - O) + O
    const inversionFactor = (inversionRadius * inversionRadius) / distanceSquared
    const invertedX = cx + dx * inversionFactor
    const invertedY = cy + dy * inversionFactor
    
    // Interpolate between original and inverted based on parameter t (0 to 1)
    return [
      x * (1 - t) + invertedX * t,
      y * (1 - t) + invertedY * t
    ]
  }
  
  const drawGrid = (ctx) => {
    const svgGray = getComputedStyle(document.documentElement).getPropertyValue('--color-Svg-gray').trim()
    const t = parameter / 100 // Convert parameter to 0-1 range
    
    ctx.strokeStyle = svgGray
    ctx.lineWidth = 1
    
    if (gridType === 'cartesian') {
      // Draw cartesian grid - skip lines that pass too close to inversion center
      for (let i = -10; i <= 10; i++) {
        // Skip vertical lines that are too close to the inversion center
        if (Math.abs(i * gridSpacing) > 5) {
          // Vertical lines - draw as curves since inversion turns lines into circles
          ctx.beginPath()
          for (let j = 0; j <= gridSize; j += 5) {
            const point = applyInversion([centerX + i * gridSpacing, j], t)
            if (j === 0) {
              ctx.moveTo(point[0], point[1])
            } else {
              ctx.lineTo(point[0], point[1])
            }
          }
          ctx.stroke()
        }
        
        // Skip horizontal lines that are too close to the inversion center
        if (Math.abs(i * gridSpacing) > 5) {
          // Horizontal lines
          ctx.beginPath()
          for (let j = 0; j <= gridSize; j += 5) {
            const point = applyInversion([j, centerY + i * gridSpacing], t)
            if (j === 0) {
              ctx.moveTo(point[0], point[1])
            } else {
              ctx.lineTo(point[0], point[1])
            }
          }
          ctx.stroke()
        }
      }
    } else {
      // Draw polar grid
      // Concentric circles
      for (let radius = gridSpacing; radius <= gridSize * 0.7; radius += gridSpacing) {
        ctx.beginPath()
        for (let angle = 0; angle <= 2 * Math.PI; angle += Math.PI / 30) {
          const originalPoint = [
            centerX + radius * Math.cos(angle),
            centerY + radius * Math.sin(angle)
          ]
          const point = applyInversion(originalPoint, t)
          if (angle === 0) {
            ctx.moveTo(point[0], point[1])
          } else {
            ctx.lineTo(point[0], point[1])
          }
        }
        ctx.stroke()
      }
      
      // Radial lines
      for (let angle = 0; angle < 2 * Math.PI; angle += Math.PI / 6) {
        ctx.beginPath()
        for (let radius = 5; radius <= gridSize * 0.7; radius += 5) {
          const originalPoint = [
            centerX + radius * Math.cos(angle),
            centerY + radius * Math.sin(angle)
          ]
          const point = applyInversion(originalPoint, t)
          if (radius === 5) {
            ctx.moveTo(point[0], point[1])
          } else {
            ctx.lineTo(point[0], point[1])
          }
        }
        ctx.stroke()
      }
    }
    
    // Draw axes manually without transformation
    ctx.lineWidth = 3
    
    // X-axis - horizontal line through center
    ctx.beginPath()
    ctx.moveTo(0, centerY)
    ctx.lineTo(gridSize, centerY)
    ctx.stroke()
    
    // Y-axis - vertical line through center
    ctx.beginPath()
    ctx.moveTo(centerX, 0)
    ctx.lineTo(centerX, gridSize)
    ctx.stroke()
  }
  
  const drawShapes = (ctx) => {
    const svgText = getComputedStyle(document.documentElement).getPropertyValue('--color-Svg-text').trim()
    const svgTextHighlight = getComputedStyle(document.documentElement).getPropertyValue('--color-Svg-text-highlight').trim()
    const svgLineHighlight1 = getComputedStyle(document.documentElement).getPropertyValue('--color-Svg-line-highlight-1').trim()
    const svgLineHighlight2 = getComputedStyle(document.documentElement).getPropertyValue('--color-Svg-line-highlight-2').trim()
    const t = parameter / 100 // Convert parameter to 0-1 range
    
    // Draw inversion circle
    ctx.setLineDash([5, 5])
    ctx.strokeStyle = svgText
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(inversionCenter[0], inversionCenter[1], inversionRadius, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.setLineDash([])
    
    ctx.fillStyle = 'transparent'
    ctx.lineWidth = 3
    
    // Triangle - draw as connected curve segments
    ctx.strokeStyle = svgLineHighlight1
    ctx.beginPath()
    const trianglePoints = []
    for (let i = 0; i < originalShapes.triangle.length; i++) {
      const startPoint = originalShapes.triangle[i]
      const endPoint = originalShapes.triangle[(i + 1) % originalShapes.triangle.length]
      
      // Draw edge as curve
      for (let j = 0; j <= 20; j++) {
        const ratio = j / 20
        const edgePoint = [
          startPoint[0] * (1 - ratio) + endPoint[0] * ratio,
          startPoint[1] * (1 - ratio) + endPoint[1] * ratio
        ]
        const transformedPoint = applyInversion(edgePoint, t)
        trianglePoints.push(transformedPoint)
        
        if (i === 0 && j === 0) {
          ctx.moveTo(transformedPoint[0], transformedPoint[1])
        } else {
          ctx.lineTo(transformedPoint[0], transformedPoint[1])
        }
      }
    }
    ctx.stroke()
    
    // Square - draw as connected curve segments
    ctx.strokeStyle = svgTextHighlight
    ctx.beginPath()
    for (let i = 0; i < originalShapes.square.length; i++) {
      const startPoint = originalShapes.square[i]
      const endPoint = originalShapes.square[(i + 1) % originalShapes.square.length]
      
      // Draw edge as curve
      for (let j = 0; j <= 20; j++) {
        const ratio = j / 20
        const edgePoint = [
          startPoint[0] * (1 - ratio) + endPoint[0] * ratio,
          startPoint[1] * (1 - ratio) + endPoint[1] * ratio
        ]
        const transformedPoint = applyInversion(edgePoint, t)
        
        if (i === 0 && j === 0) {
          ctx.moveTo(transformedPoint[0], transformedPoint[1])
        } else {
          ctx.lineTo(transformedPoint[0], transformedPoint[1])
        }
      }
    }
    ctx.stroke()
    
    // Circle - draw as curve
    ctx.strokeStyle = svgLineHighlight2
    ctx.beginPath()
    for (let angle = 0; angle <= 2 * Math.PI; angle += Math.PI / 30) {
      const originalPoint = [
        originalShapes.circle.center[0] + originalShapes.circle.radius * Math.cos(angle),
        originalShapes.circle.center[1] + originalShapes.circle.radius * Math.sin(angle)
      ]
      const transformedPoint = applyInversion(originalPoint, t)
      
      if (angle === 0) {
        ctx.moveTo(transformedPoint[0], transformedPoint[1])
      } else {
        ctx.lineTo(transformedPoint[0], transformedPoint[1])
      }
    }
    ctx.stroke()
  }
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, gridSize, gridSize)
    
    drawGrid(ctx)
    drawShapes(ctx)
  }, [parameter, gridType])
  
  // Listen for theme changes
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const redrawCanvas = () => {
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, gridSize, gridSize)
      drawGrid(ctx)
      drawShapes(ctx)
    }
    
    // Listen for class changes on the html element (theme changes)
    const observer = new MutationObserver(redrawCanvas)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [parameter, gridType])
  
  
  const getParameterRange = () => {
    return { min: 0, max: 100, step: 1 }
  }

  return (
    <div className="max-w-2xl mx-auto px-8 pt-6 mt-8 border-2 border-border-subtle rounded-lg">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Circle Inversion</h3>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Grid Type:</label>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 mb-4">
            <label className="flex items-center hover:outline-2 outline-border-subtle rounded-sm px-1 py-1 cursor-pointer">
              <input
                type="radio"
                name="gridType"
                value="cartesian"
                checked={gridType === 'cartesian'}
                onChange={(e) => setGridType(e.target.value)}
                className="mr-2 h-4 w-4 shrink-0"
              />
              <span>Cartesian</span>
            </label>
            <label className="flex items-center hover:outline-2 outline-border-subtle rounded-sm px-1 py-1 cursor-pointer">
              <input
                type="radio"
                name="gridType"
                value="polar"
                checked={gridType === 'polar'}
                onChange={(e) => setGridType(e.target.value)}
                className="mr-2 h-4 w-4 shrink-0"
              />
              <span>Polar</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Slide to invert the image</label>
          <input
            type="range"
            value={parameter}
            onChange={(e) => setParameter(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            {...getParameterRange()}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>original</span>
            <span>inverted</span>
          </div>
        </div>
        
      </div>
      
      <div className="flex justify-center">
        <canvas
          ref={canvasRef}
          width="400"
          height="400"
          className="rounded-lg aspect-square w-full max-w-72 sm:max-w-80 md:max-w-96"
          style={{ 
            border: '2px solid var(--color-Svg-text)',
          }}
        />
      </div>
      <br/>

      <div className="space-y-4 mb-4">
        <p>We have a dotted reference circle, and we're performing an "inversion of the plane" about this circle.</p>
        <p>Notice how the inside of the reference circle gets mapped to the outside, and vice versa. (It's easier to see this in polar coordinates)</p>
      </div>

    </div>
  )
}

export default Inversion