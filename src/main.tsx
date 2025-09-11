import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import "./assets/icons/weather-icons.min.css"
import "./assets/icons/weather-icons-wind.min.css"

import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
