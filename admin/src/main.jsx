import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { getTheme, applyTheme } from "./theme"
import { ThemeProvider } from "./context/ThemeContext"  

const theme = getTheme()
applyTheme(theme)

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>  
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
