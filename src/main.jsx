import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Canvas } from '@react-three/fiber'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Canvas camera={{position:[0,0,10], fov:30}}>
        <App  />
    </Canvas>

  </StrictMode>,
)
