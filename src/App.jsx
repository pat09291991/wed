import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { OurStory } from './Pages/OurStory/OurStory';
import SnowflakeAnimation from './component/SnowflakeAnimation';
import { Login } from './component/Login';
import PrivateRoutes from './component/PrivateRoutes';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
<<<<<<< Updated upstream
import { Home } from './Pages/Home/Home';
=======
import { Homepage } from './Pages/Home/Homepage';
import { AnimatePresence } from "framer-motion";
import { LandingPage } from './Pages/Home/LandingPage';
>>>>>>> Stashed changes

function App() {

  return (
    <Container fluid className='text-center w-100 px-0 mx-0' id="app">
<<<<<<< Updated upstream
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route element={<PrivateRoutes />}>
=======
      <AnimatePresence>
        <Router>
          <Routes>
            <Route exact path="/" element={<SnowflakeAnimation />} />
            <Route exact path="/the-wedding" element={<Homepage />} />
            <Route exact path="/landing-page" element={<LandingPage />} />
            {/* <Route element={<PrivateRoutes />}>
>>>>>>> Stashed changes
            <Route exact path="/" element={<SnowflakeAnimation circle3={Circle3} />} />
            <Route exact path="/the-wedding" element={<Home />} />
          </Route> */}
          </Routes>
        </Router>
      </AnimatePresence>
    </Container>
  )
}

export default App
