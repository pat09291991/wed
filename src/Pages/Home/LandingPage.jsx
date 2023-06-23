import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { isDesktop, isMobile } from "react-device-detect"
import PatShe3 from '../../assets/images/patShe3.png'
import { CSSTransition, SwitchTransition } from "react-transition-group"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"

export const LandingPage = () => {
    return (
        <AnimatePresence>
            <motion.div
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <Container fluid className="vh-100">
                    <div className="homepage"></div>
                    <Row>
                        <Col style={{ zIndex: '999' }} md="1">
                            {isDesktop ?
                                <div className="py-5">
                                    <p className="mb-0">P</p>
                                    <p className="mb-0">/</p>
                                    <p className="mb-0">S</p>
                                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "80vh" }}>
                                        <Link to="/the-wedding" className="navSide" style={{ rotate: "270deg" }}>
                                            Gallery
                                        </Link>
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
                                <img src={PatShe3} style={{ width: '80%', marginBottom: '2rem' }} />
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
            </motion.div>
        </AnimatePresence>
    )
}