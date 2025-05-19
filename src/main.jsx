import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './components/Sider.jsx'
import Sider from './components/Sider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sider />
  </StrictMode>,
)
