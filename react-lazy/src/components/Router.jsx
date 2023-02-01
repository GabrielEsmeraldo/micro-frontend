import React, { Suspense } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Routes,
} from 'react-router-dom'

const About = React.lazy(() => import('../pages/About'))
const Contact = React.lazy(() => import('../pages/Contact'))
const Home = React.lazy(() => import('../pages/Home'))

const Router = () => (
    <Suspense fallback={<h1>Carregando...</h1>}>
        <BrowserRouter basename="react-lazy">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    </Suspense>
)

export default Router