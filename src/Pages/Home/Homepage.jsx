import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { isDesktop, isMobile } from "react-device-detect"
import BgImage from '../../assets/images/bgImage.jpg'
import PatShe from '../../assets/images/patShe.png'
import PatShe2 from '../../assets/images/patShe2.png'
import PatShe3 from '../../assets/images/patShe3.png'

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
                <Row>
                    <Col style={{ zIndex: '999' }} md="1">
                        {isDesktop ?
                            <div className="py-5">
                                <p className="mb-0">P</p>
                                <p className="mb-0">/</p>
                                <p className="mb-0">S</p>
                                <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "80vh" }}>
                                    <a href="#" className="navSide" style={{ rotate: "270deg" }}>
                                        Gallery
                                    </a>
                                    <a href="#" className="navSide" style={{ rotate: "270deg", marginTop: '5rem' }}>
                                        Registry
                                    </a>
                                    <a href="#" className="navSide" style={{ rotate: "270deg", marginTop: '5rem' }}>
                                        RSVP
                                    </a>
                                </div>
                            </div>
                            : ""}
                    </Col>
                    <Col style={{ zIndex: '999' }} md="10">
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <img src={PatShe2} style={{width: '80%', marginBottom: '2rem'}} />
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