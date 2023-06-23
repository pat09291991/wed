import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { isDesktop, isMobile } from "react-device-detect"
import BgImage from '../../assets/images/bgImage.jpg'
import PatShe2 from '../../assets/images/patShe2.png'
import '../../she.css'

export const Homepage = () => {
    const homePageStyle = {
        backgroundImage: `url(${BgImage})`,
        backgroundPosition: 'right',
        backgroundSize: '70%',
        opacity: '0.5',
        zIndex: '0',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        position: 'absolute',
        right: '0px',
        bottom: '100px',
        left: '0px',
    }

    const homePageMobileStyle = {
        backgroundImage: `url(${BgImage})`,
        backgroundPosition: 'right',
        backgroundSize: '100%',
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
        <>
            <Container fluid className="vh-100">
                <div className="homepage" style={isMobile ? homePageMobileStyle : homePageStyle}></div>
                <Row >
                    <Col style={{ zIndex: '999' }} md="1">
                        {isDesktop ?
                            <div className="py-5">
                                <p className="mb-0">P</p>
                                <p className="mb-0">/</p>
                                <p className="mb-0">S</p>
                                <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "80vh" }}>
                                    <nav id="nav">
                                        <ul id="nav-link-w">
                                            <li>
                                                <div class="nav-link entitled"><div class="nav-dark">
                                                    TOKYO BRIDGE, JP</div>
                                                    <div class="nav-light">TOKYO BRIDGE, JP
                                                    </div></div></li>


                                            <li><a class="nav-link entitled _tb" href="https://veleyross.app.rsvpify.com"
                                                style={{ transform: "translate3d(0%, 0px, 0px)" }}>RSVP<span class="under"
                                                    style={{ transform: "translate3d(0px, 0%, 0px)" }} ></span></a></li>



                                            <li><a class="nav-link entitled _tb" href="https://www.honeyfund.com/wedding/veleyrosswedding"
                                                style={{ transform: "translate3d(0%, 0px, 0px)" }}>FAQ<span class="under"
                                                    style={{ transform: "translate3d(0px, 0%, 0px)" }} ></span></a></li>
                                            <li>
                                                <div class="nav-link entitled" style={{ transform: "translate3d(0px, 0%, 0px)" }} >GALLERY<span class="under"
                                                    style={{ transform: "translate3d(0%, 0px, 0px)" }}></span></div>
                                            </li>
                                        </ul>
                                    </nav>
                                    
                                </div>
                            </div>
                            : ""}
                    </Col>
                    <Col style={{ zIndex: '999' }} md="10">
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <img src={PatShe2} style={{ width: '95%', marginBottom: '2rem' }} />
                            {/* <p className="mb-0 text-start fw-bold" style={{ fontSize: isMobile ? '3rem' : '7rem' }}>Patrick</p>
                            <p className="mb-0 text-start fw-bold" style={{ fontSize: isMobile ? '3rem' : '7rem', marginTop: !isMobile ? "-3rem" : "" }}>Sheryl</p> */}
                        </div>
                    </Col>

                    <Col style={{ zIndex: '999' }} md="1">
                        {isDesktop ?
                            <div className="d-flex flex-column justify-content-between align-items-center vh-100 py-5">
                                <div>
                                    <p className="mb-0">12</p>
                                    <p className="mb-0">/</p>
                                    <p className="mb-0">21</p>
                                </div>
                                <p>scroll down</p>
                            </div>
                            : ""}
                    </Col>
                </Row>
            </Container>
        </>
    )
}