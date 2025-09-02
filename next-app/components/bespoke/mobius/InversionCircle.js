'use client'

import { useState, useEffect, useRef } from 'react'

const InversionCircle = () => {
  const [isDragging, setIsDragging] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [circleCenter, setCircleCenter] = useState([320, 120])
  const [pointAngle, setPointAngle] = useState(0)
  const canvasRef = useRef(null)
  
  const gridSize = 400
  const centerX = gridSize / 2
  const centerY = gridSize / 2
  
  // Inversion circle parameters
  const inversionCenter = [centerX, centerY]
  const inversionRadius = 80
  
  // Movable circle parameters
  const circleRadius = 30
  
  
  const applyInversion = (point) => {
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
    
    return [invertedX, invertedY]
  }

  const invertCircle = (center, radius) => {
    const [cx, cy] = center
    const [ox, oy] = inversionCenter
    const R = inversionRadius
    
    // Vector from inversion center to circle center
    const dx = cx - ox
    const dy = cy - oy
    const d = Math.sqrt(dx * dx + dy * dy)
    
    // Check if circle passes through inversion center
    if (Math.abs(d - radius) < 2) {
      // Circle passes through inversion center - becomes a line
      return { type: 'line', center, radius, d }
    }
    
    // Check for very small denominators that cause numerical issues
    const denominator = d * d - radius * radius
    if (Math.abs(denominator) < 0.5) {
      // Near-degenerate case, treat as line
      return { type: 'line', center, radius, d }
    }
    
    // For circles not passing through center:
    // New center and radius formulas
    const k = R * R / denominator
    const newCx = ox + k * dx
    const newCy = oy + k * dy
    const newRadius = Math.abs(k * radius)
    
    // Clamp extremely large circles/radii for performance
    if (newRadius > gridSize * 5) {
      return { type: 'line', center, radius, d }
    }
    
    return { type: 'circle', center: [newCx, newCy], radius: newRadius }
  }
  
  
  const drawElements = (ctx) => {
    const svgText = getComputedStyle(document.documentElement).getPropertyValue('--color-Svg-text').trim()
    const svgLineHighlight1 = getComputedStyle(document.documentElement).getPropertyValue('--color-Svg-line-highlight-1').trim()
    const svgLineHighlight2 = getComputedStyle(document.documentElement).getPropertyValue('--color-Svg-line-highlight-2').trim()
    
    // Draw dotted reference circle (inversion circle)
    ctx.setLineDash([5, 5])
    ctx.strokeStyle = svgText
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(inversionCenter[0], inversionCenter[1], inversionRadius, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.setLineDash([])
    
    // Draw movable colored circle
    ctx.strokeStyle = svgLineHighlight1
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.arc(circleCenter[0], circleCenter[1], circleRadius, 0, 2 * Math.PI)
    ctx.stroke()
    
    // Draw point on the circle
    const pointX = circleCenter[0] + circleRadius * Math.cos(pointAngle)
    const pointY = circleCenter[1] + circleRadius * Math.sin(pointAngle)
    ctx.fillStyle = svgLineHighlight1
    ctx.beginPath()
    ctx.arc(pointX, pointY, 4, 0, 2 * Math.PI)
    ctx.fill()
    
    // Draw inverted circle
    const invertedCircle = invertCircle(circleCenter, circleRadius)
    
    if (invertedCircle.type === 'circle') {
      ctx.setLineDash([5, 5])
      ctx.strokeStyle = svgLineHighlight2
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.arc(invertedCircle.center[0], invertedCircle.center[1], invertedCircle.radius, 0, 2 * Math.PI)
      ctx.stroke()
      ctx.setLineDash([])
    } else {
      // Draw line for circles passing through center
      ctx.setLineDash([5, 5])
      ctx.strokeStyle = svgLineHighlight2
      ctx.lineWidth = 3
      
      const [cx, cy] = invertedCircle.center
      const [ox, oy] = inversionCenter
      const dx = cx - ox
      const dy = cy - oy
      const length = Math.sqrt(dx * dx + dy * dy)
      
      if (length > 0.1) {
        // Find the point on the circle that's on the far side from the inversion center
        const farSideX = cx + (dx * circleRadius) / length
        const farSideY = cy + (dy * circleRadius) / length
        
        // Find the inverted image of this far side point
        const invertedFarSide = applyInversion([farSideX, farSideY])
        
        // The line is perpendicular to the line from inversion center to circle center
        const perpX = -dy / length
        const perpY = dx / length
        
        // The line passes through the inverted image of the far side point
        const extend = gridSize * 2
        ctx.beginPath()
        ctx.moveTo(invertedFarSide[0] - perpX * extend, invertedFarSide[1] - perpY * extend)
        ctx.lineTo(invertedFarSide[0] + perpX * extend, invertedFarSide[1] + perpY * extend)
        ctx.stroke()
      }
      ctx.setLineDash([])
    }
    
    // Draw inverted point
    const invertedPoint = applyInversion([pointX, pointY])
    ctx.fillStyle = svgLineHighlight2
    ctx.beginPath()
    ctx.arc(invertedPoint[0], invertedPoint[1], 4, 0, 2 * Math.PI)
    ctx.fill()
    
    // Draw solid ray showing inversion process
    ctx.strokeStyle = svgText
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(inversionCenter[0], inversionCenter[1])
    ctx.lineTo(pointX, pointY)
    ctx.lineTo(invertedPoint[0], invertedPoint[1])
    ctx.stroke()
  }
  
  const handleMouseDown = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    const mouseX = (e.clientX - rect.left) * scaleX
    const mouseY = (e.clientY - rect.top) * scaleY
    
    // Check if clicking on circle
    const dx = mouseX - circleCenter[0]
    const dy = mouseY - circleCenter[1]
    if (Math.sqrt(dx * dx + dy * dy) <= circleRadius + 10) {
      setIsDragging(true)
    }
  }
  
  const handleMouseMove = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    const mouseX = (e.clientX - rect.left) * scaleX
    const mouseY = (e.clientY - rect.top) * scaleY
    
    if (isDragging) {
      // Clamp to canvas bounds
      const clampedX = Math.max(circleRadius, Math.min(gridSize - circleRadius, mouseX))
      const clampedY = Math.max(circleRadius, Math.min(gridSize - circleRadius, mouseY))
      
      setCircleCenter([clampedX, clampedY])
    } else {
      // Check if hovering over circle
      const dx = mouseX - circleCenter[0]
      const dy = mouseY - circleCenter[1]
      const isOverCircle = Math.sqrt(dx * dx + dy * dy) <= circleRadius + 10
      setIsHovering(isOverCircle)
    }
  }
  
  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, gridSize, gridSize)
    
    drawElements(ctx)
  }, [circleCenter, pointAngle])
  
  // Listen for theme changes
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const redrawCanvas = () => {
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, gridSize, gridSize)
      drawElements(ctx)
    }
    
    // Listen for class changes on the html element (theme changes)
    const observer = new MutationObserver(redrawCanvas)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [circleCenter, pointAngle])

  // Animate point around circle
  useEffect(() => {
    // Respect user's reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Only animate when component is visible
    const canvas = canvasRef.current
    if (!canvas) return

    let interval = null
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          interval = setInterval(() => {
            setPointAngle(prev => (prev + 0.02) % (2 * Math.PI))
          }, 50)
        } else {
          if (interval) clearInterval(interval)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(canvas)
    
    return () => {
      observer.disconnect()
      if (interval) clearInterval(interval)
    }
  }, [])
  

  return (
    <div className="max-w-2xl mx-auto px-8 pt-6 mt-8 border-2 border-border-subtle rounded-lg mb-4">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Inversion - where do circles go?</h3>
        
      </div>
      
      <div className="flex justify-center">
        <canvas
          ref={canvasRef}
          width="400"
          height="400"
          className="rounded-lg aspect-square w-full max-w-72 sm:max-w-80 md:max-w-96"
          style={{ 
            border: '2px solid var(--color-Svg-text)',
            cursor: isDragging ? 'grabbing' : (isHovering ? 'grab' : 'default')
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
      </div>
      <br/>

      <div className="space-y-2 mb-4">
        <p>Drag the solid circle around to see how inversion works on circles.</p>
        <p className="text-sm"><em>The gray dotted reference circle is the circle about which we invert. The solid coloured circle gets inverted to the dashed coloured circle (and vice versa, since recall inversion is self-inverse).</em></p>
        <p>The moving line shows how specific points on the circle are inverted.</p>
      </div>

    </div>
  )
}

export default InversionCircle