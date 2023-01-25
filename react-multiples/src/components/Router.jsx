import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

function Router() {
    return (
        <BrowserRouter basename="react-multiples">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router