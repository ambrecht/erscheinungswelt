import React, { useEffect, useRef, useState } from "react"
import * as THREE from "three" // Direkter Import von three.js
import Canvas from "./scene/Canvas"
import styled from "styled-components"

const BackgroundCanvas = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
`




const Scene = () => {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    const initializeThree = () => {
      if (canvasRef.current) {
        Canvas(THREE, canvasRef.current, () => setBackgroundLoaded(true))
      }
    }
    initializeThree()
  }, [])

  return (
  
      <BackgroundCanvas ref={canvasRef}></BackgroundCanvas>
  
  )
}

export default Scene
