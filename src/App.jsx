import { RegisterProduct } from "./components/NewProduct"
import { LandingPage } from "./components/LandingPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="w-3/4 my-9 mx-auto">
     <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/registerProduct--Admin" element={<RegisterProduct />} />
            </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
