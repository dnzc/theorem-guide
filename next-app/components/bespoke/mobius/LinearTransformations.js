'use client'

import { useState, useEffect, useRef } from 'react'

const LinearTransformations = () => {
  const [transformType, setTransformType] = useState('rotation')
  const [parameter, setParameter] = useState(0)
  const canvasRef = useRef(null)
  
  const gridSize = 400
  const gridSpacing = 20
  const centerX = gridSize / 2
  const centerY = gridSize / 2
  
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
  
  const applyTransformation = (point) => {
    const [x, y] = point
    const dx = x - centerX
    const dy = y - centerY
    
    switch (transformType) {
      case 'rotation': {
        const angle = (parameter * Math.PI) / 180
        const cos = Math.cos(angle)
        const sin = Math.sin(angle)
        return [
          centerX + dx * cos - dy * sin,
          centerY + dx * sin + dy * cos
        ]
      }
      case 'reflection': {
        // Reflection across y = x line (45 degrees)
        // parameter: 0 = identity, 50 = squashed to line, 100 = fully reflected
        if (parameter <= 50) {
          // Squashing phase: interpolate from identity to line y = x
          const t = parameter / 50  // 0 to 1
          const projectedX = (dx + dy) / 2  // projection onto y = x
          const projectedY = (dx + dy) / 2
          
          return [
            centerX + dx * (1 - t) + projectedX * t,
            centerY + dy * (1 - t) + projectedY * t
          ]
        } else {
          // Reflection phase: interpolate from line to reflected position
          const t = (parameter - 50) / 50  // 0 to 1
          const projectedX = (dx + dy) / 2  // on the line y = x
          const projectedY = (dx + dy) / 2
          const reflectedX = dy  // fully reflected across y = x
          const reflectedY = dx
          
          return [
            centerX + projectedX * (1 - t) + reflectedX * t,
            centerY + projectedY * (1 - t) + reflectedY * t
          ]
        }
      }
      case 'scaling': {
        const scale = parameter  // parameter is the scale factor directly
        return [
          centerX + dx * scale,
          centerY + dy * scale
        ]
      }
      default:
        return [x, y]
    }
  }
  
  const drawGrid = (ctx) => {
    const svgGray = getComputedStyle(document.documentElement).getPropertyValue('--color-Svg-gray').trim()
    
    ctx.strokeStyle = svgGray
    ctx.lineWidth = 1
    
    // Draw transformed grid lines
    for (let i = -10; i <= 10; i++) {
      // Vertical lines
      const startPoint = applyTransformation([centerX + i * gridSpacing, 0])
      const endPoint = applyTransformation([centerX + i * gridSpacing, gridSize])
      ctx.beginPath()
      ctx.moveTo(Math.round(startPoint[0]) + 0.5, Math.round(startPoint[1]) + 0.5)
      ctx.lineTo(Math.round(endPoint[0]) + 0.5, Math.round(endPoint[1]) + 0.5)
      ctx.stroke()
      
      // Horizontal lines
      const startPoint2 = applyTransformation([0, centerY + i * gridSpacing])
      const endPoint2 = applyTransformation([gridSize, centerY + i * gridSpacing])
      ctx.beginPath()
      ctx.moveTo(Math.round(startPoint2[0]) + 0.5, Math.round(startPoint2[1]) + 0.5)
      ctx.lineTo(Math.round(endPoint2[0]) + 0.5, Math.round(endPoint2[1]) + 0.5)
      ctx.stroke()
    }
    
    // Draw transformed axes (same color but thicker)
    ctx.lineWidth = 2
    
    // X-axis
    const xAxisStart = applyTransformation([0, centerY])
    const xAxisEnd = applyTransformation([gridSize, centerY])
    ctx.beginPath()
    ctx.moveTo(Math.round(xAxisStart[0]) + 0.5, Math.round(xAxisStart[1]) + 0.5)
    ctx.lineTo(Math.round(xAxisEnd[0]) + 0.5, Math.round(xAxisEnd[1]) + 0.5)
    ctx.stroke()
    
    // Y-axis
    const yAxisStart = applyTransformation([centerX, 0])
    const yAxisEnd = applyTransformation([centerX, gridSize])
    ctx.beginPath()
    ctx.moveTo(Math.round(yAxisStart[0]) + 0.5, Math.round(yAxisStart[1]) + 0.5)
    ctx.lineTo(Math.round(yAxisEnd[0]) + 0.5, Math.round(yAxisEnd[1]) + 0.5)
    ctx.stroke()
  }
  
  const drawShapes = (ctx) => {
    const svgText = getComputedStyle(document.documentElement).getPropertyValue('--color-Svg-text').trim()
    const svgTextHighlight = getComputedStyle(document.documentElement).getPropertyValue('--color-Svg-text-highlight').trim()
    const svgLineHighlight1 = getComputedStyle(document.documentElement).getPropertyValue('--color-Svg-line-highlight-1').trim()
    const svgLineHighlight2 = getComputedStyle(document.documentElement).getPropertyValue('--color-Svg-line-highlight-2').trim()
    
    // Draw reflection line if in reflection mode
    if (transformType === 'reflection') {
      ctx.setLineDash([5, 5])
      ctx.strokeStyle = svgText
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0.5, 0.5)
      ctx.lineTo(gridSize - 0.5, gridSize - 0.5)
      ctx.stroke()
      ctx.setLineDash([])
    }
    
    // Draw transformed shapes
    const transformedTriangle = originalShapes.triangle.map(applyTransformation)
    const transformedSquare = originalShapes.square.map(applyTransformation)
    const transformedCircleCenter = applyTransformation(originalShapes.circle.center)
    
    ctx.fillStyle = 'transparent'
    ctx.lineWidth = 3
    
    // Triangle outline
    ctx.strokeStyle = svgLineHighlight1
    ctx.beginPath()
    ctx.moveTo(transformedTriangle[0][0], transformedTriangle[0][1])
    transformedTriangle.forEach(([x, y]) => ctx.lineTo(x, y))
    ctx.closePath()
    ctx.stroke()
    
    // Square outline
    ctx.strokeStyle = svgTextHighlight
    ctx.beginPath()
    ctx.moveTo(transformedSquare[0][0], transformedSquare[0][1])
    transformedSquare.forEach(([x, y]) => ctx.lineTo(x, y))
    ctx.closePath()
    ctx.stroke()
    
    // Circle - needs special handling for proper transformation
    ctx.strokeStyle = svgLineHighlight2
    ctx.beginPath()
    
    if (transformType === 'scaling') {
      // For scaling, the radius scales too
      const scale = parameter
      ctx.arc(transformedCircleCenter[0], transformedCircleCenter[1], originalShapes.circle.radius * Math.abs(scale), 0, 2 * Math.PI)
    } else if (transformType === 'reflection') {
      // For reflection, the circle gets squished into an ellipse
      // We need to apply the same transformation matrix to the circle's shape
      if (parameter <= 50) {
        // Squashing phase: interpolate from circle to line
        const t = parameter / 50
        // The circle gets squished perpendicular to the reflection line y=x
        // In the direction perpendicular to y=x (which is the direction [-1,1])
        const radiusParallel = originalShapes.circle.radius // radius along the line y=x
        const radiusPerpendicular = originalShapes.circle.radius * (1 - t) // squishing perpendicular to line
        
        ctx.ellipse(transformedCircleCenter[0], transformedCircleCenter[1], 
                   radiusParallel, radiusPerpendicular, Math.PI/4, 0, 2 * Math.PI)
      } else {
        // Reflection phase: expanding from line to reflected circle
        const t = (parameter - 50) / 50
        const radiusParallel = originalShapes.circle.radius
        const radiusPerpendicular = originalShapes.circle.radius * t // expanding perpendicular to line
        
        ctx.ellipse(transformedCircleCenter[0], transformedCircleCenter[1], 
                   radiusParallel, radiusPerpendicular, Math.PI/4, 0, 2 * Math.PI)
      }
    } else {
      // For rotation, radius stays the same
      ctx.arc(transformedCircleCenter[0], transformedCircleCenter[1], originalShapes.circle.radius, 0, 2 * Math.PI)
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
  }, [transformType, parameter])
  
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
  }, [transformType, parameter])
  
  const getParameterLabel = () => {
    switch (transformType) {
      case 'rotation': return `Angle: ${parameter}°`
      case 'reflection': return `Reflection: ${parameter < 50 ? 'squashing' : parameter === 50 ? 'on line' : 'reflected'}`
      case 'scaling': return `Scale: ${parameter.toFixed(2)}x`
      default: return ''
    }
  }
  
  const getParameterRange = () => {
    switch (transformType) {
      case 'rotation': return { min: 0, max: 360, step: 1 }
      case 'reflection': return { min: 0, max: 100, step: 1 }
      case 'scaling': return { min: 0.1, max: 3, step: 0.05 }
      default: return { min: 0, max: 100, step: 1 }
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-8 pt-6 mt-8 border-2 border-border-subtle rounded-lg">
      <div className="mb-6">
        <h3 className="font-bold mb-2 text-xl">Linear Transformations</h3>
        <label className="text-sm block mb-1">Transformation Type:</label>
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 mb-4">
          <label className="flex items-center hover:outline-2 outline-border-subtle rounded-sm px-1 py-1 cursor-pointer">
            <input
              type="radio"
              name="transformType"
              value="rotation"
              checked={transformType === 'rotation'}
              onChange={(e) => {
                setTransformType(e.target.value)
                setParameter(0)
              }}
              className="mr-2 h-4 w-4 shrink-0"
            />
            <span>Rotation</span>
          </label>
          <label className="flex items-center hover:outline-2 outline-border-subtle rounded-sm px-1 py-1 cursor-pointer">
            <input
              type="radio"
              name="transformType"
              value="reflection"
              checked={transformType === 'reflection'}
              onChange={(e) => {
                setTransformType(e.target.value)
                setParameter(0)
              }}
              className="mr-2 h-4 w-4 shrink-0"
            />
            <span>Reflection</span>
          </label>
          <label className="flex items-center hover:outline-2 outline-border-subtle rounded-sm px-1 py-1 cursor-pointer">
            <input
              type="radio"
              name="transformType"
              value="scaling"
              checked={transformType === 'scaling'}
              onChange={(e) => {
                setTransformType(e.target.value)
                setParameter(1)
              }}
              className="mr-2 h-4 w-4 shrink-0"
            />
            <span>Scaling</span>
          </label>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">{getParameterLabel()}</label>
          <input
            type="range"
            value={parameter}
            onChange={(e) => setParameter(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            {...getParameterRange()}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>{transformType === 'reflection' ? 'original' : getParameterRange().min}</span>
            <span>{transformType === 'reflection' ? 'reflected' : getParameterRange().max}</span>
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
    </div>
  )
}

export default LinearTransformations