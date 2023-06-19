import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Home } from './Pages/Home/Home';
import { OurStory } from './Pages/OurStory/OurStory';
import SnowflakeAnimation from './component/SnowflakeAnimation';
import { Login } from './component/Login';
import PrivateRoutes from './component/PrivateRoutes';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Circle3 from './assets/images/circle3.png'

function App() {

  return (
    <Container fluid className='text-center w-100 px-0 mx-0' id="app">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route exact path="/" element={<SnowflakeAnimation circle3={Circle3} />} />
            <Route exact path="/the-wedding" element={<Home />} />
          </Route>
        </Routes>
      </Router>

    </Container>
  )
}

export default App
