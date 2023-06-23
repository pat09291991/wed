import React from 'react'
import PatShe2 from '../../assets/images/patShe2.png'
import '../../shemobile.css'
import { Col, Container, Row } from "react-bootstrap"
import BgImage from '../../assets/images/bgImage.jpg'
export const MobileView = () => {
    const homePageMobileStyle = {
        backgroundImage: `url(${BgImage})`,
        backgroundPosition: 'right',
        backgroundSize: '300%',
        opacity: '0.5',
        zIndex: '0',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        position: 'absolute',
        right: '0px',
        left: '0px',
    }
    return (
        <div>
            <div className="homepage" style={homePageMobileStyle}></div>
            <nav id="nav">
                <a id="nav-logomobile" class="entitledmobile" href="/">
                    <span>P</span> <span>S</span></a><div id="nav-date" class="nav-top">
                    <div>12</div><div>21</div><div>23</div></div>
                <ul id="nav-linkmobile-w"><li>
                    <a class="nav-linkmobile entitledmobile _tb" href="">RSVP</a>
                </li>
                    <li><a class="nav-linkmobile entitledmobile _tb" href="">
                        REGISTRY</a></li></ul>
            </nav>
            <Col style={{ zIndex: '' }} md="10">
                <div className="position-absolute shetop ">
                    <img src={PatShe2} style={{ width: '100%', marginBottom: '2rem' }} />
                    {/* <p className="mb-0 text-start fw-bold" style={{ fontSize: isMobile ? '3rem' : '7rem' }}>Patrick</p>
                            <p className="mb-0 text-start fw-bold" style={{ fontSize: isMobile ? '3rem' : '7rem', marginTop: !isMobile ? "-3rem" : "" }}>Sheryl</p> */}
                </div>
            </Col>
            
        </div>
    )
}