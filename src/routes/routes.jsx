import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RegisterProduct } from "../components/NewProduct"
import { LandingPage } from "../components/LandingPage"

export default function RoutesComponent() {
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/registerProduct--Admin" element={<RegisterProduct />} />
            </Routes>
        </BrowserRouter>
    </>
}