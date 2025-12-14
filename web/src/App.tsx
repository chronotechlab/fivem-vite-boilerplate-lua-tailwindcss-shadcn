import { useEffect } from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"

function App() {
  const resourceName = "cnt_mailbox"

  const closeUI = () => {
    fetch(`https://${resourceName}/close`, {
      method: "POST",
    })
  }

  useEffect(() => {
    const messageHandler = (event: MessageEvent) => {
      if (event.data.action === "open") {
        document.body.style.display = "block"
      }

      if (event.data.action === "close") {
        document.body.style.display = "none"
      }
    }

    const escHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeUI()
      }
    }

    window.addEventListener("message", messageHandler)
    window.addEventListener("keydown", escHandler)

    return () => {
      window.removeEventListener("message", messageHandler)
      window.removeEventListener("keydown", escHandler)
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
