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
import { Home } from './Pages/Home/Home';

function App() {

  return (
    <Container fluid className='text-center w-100 px-0 mx-0' id="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route element={<PrivateRoutes />}>
            <Route exact path="/" element={<SnowflakeAnimation circle3={Circle3} />} />
            <Route exact path="/the-wedding" element={<Home />} />
          </Route> */}
        </Routes>
      </Router>
    </Container>
  )
}

export default App
