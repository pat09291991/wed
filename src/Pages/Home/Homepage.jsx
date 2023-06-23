import React, { useEffect } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { isDesktop, isMobile } from "react-device-detect"
import BgImage from '../../assets/images/bgImage.jpg'
import PatShe2 from '../../assets/images/patShe2.png'
import '../../she.css'
import { Link } from 'react-scroll';

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


    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.fade-up');

            elements.forEach((element) => {
                const elementOffsetTop = element.offsetTop;
                const windowHeight = window.innerHeight;
                const scrollY = window.scrollY;
                console.log(scrollY)
                if (scrollY + windowHeight > elementOffsetTop + 200) {
                    element.classList.remove('is-visible');
                    element.classList.add('is-invisible');
                }

                if (scrollY < 200) {
                    element.classList.remove('is-invisible');
                    element.classList.add('is-visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Container fluid className="vh-100">
                <section id="homepageSection">
                    <div className="homepage" style={homePageStyle}></div>
                    <Row >
                        <Col style={{ zIndex: '999' }} md="1">

                            <div className="d-flex flex-column align-items-center py-5">
                                <div className="position-fixed">
                                    <p className="mb-0">P</p>
                                    <p className="mb-0">/</p>
                                    <p className="mb-0">S</p>
                                </div>
                                <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "80vh" }}>
                                    <nav id="nav">
                                        <ul id="nav-link-w">
                                            <li>
                                                <div className="nav-link entitled"><div className="nav-dark">
                                                    TOKYO BRIDGE, JP</div>
                                                    <div className="nav-light">TOKYO BRIDGE, JP
                                                    </div></div></li>


                                            <li><a className="nav-link entitled _tb" href="https://veleyross.app.rsvpify.com"
                                                style={{ transform: "translate3d(0%, 0px, 0px)" }}>RSVP<span className="under"
                                                    style={{ transform: "translate3d(0px, 0%, 0px)" }} ></span></a></li>



                                            <li><a className="nav-link entitled _tb" href="https://www.honeyfund.com/wedding/veleyrosswedding"
                                                style={{ transform: "translate3d(0%, 0px, 0px)" }}>FAQ<span className="under"
                                                    style={{ transform: "translate3d(0px, 0%, 0px)" }} ></span></a></li>
                                            <li>
                                                <div className="nav-link entitled" style={{ transform: "translate3d(0px, 0%, 0px)" }} >GALLERY<span className="under"
                                                    style={{ transform: "translate3d(0%, 0px, 0px)" }}></span></div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Col>
                        <Col style={{ zIndex: '999' }} md="10">
                            <div className="position-absolute top-50 start-50 translate-middle">
                                <img src={PatShe2} style={{ width: '95%', marginBottom: '2rem' }} />
                            </div>
                        </Col>

                        <Col style={{ zIndex: '999' }} md="1">
                            {isDesktop ?
                                <div className="d-flex flex-column justify-content-between align-items-center vh-100 py-5">
                                    <div className="position-fixed">
                                        <p className="mb-0">12</p>
                                        <p className="mb-0">/</p>
                                        <p className="mb-0">21</p>
                                    </div>
                                    <div className="position-fixed bottom-0">
                                        <Link
                                            to="inviteSection" // Replace 'next-section' with the ID of your target section
                                            smooth={true} // Enable smooth scrolling
                                            duration={500} // Set the duration of the scroll animation in milliseconds
                                            offset={50} // Adjust the offset if needed (positive value moves the scroll position up, negative value moves it down)
                                        >
                                            <p className="fade-up" style={{ cursor: "pointer" }}>SCROLL DOWN</p>
                                        </Link>
                                    </div>
                                </div>
                                : ""}
                        </Col>
                    </Row>
                </section>
                <section id="inviteSection">
                    <div className="vh-100 pt-4">
                        <Row>
                            <Col md="12" className="d-flex align-items-center justify-content-center">
                                <Card className="w-25">
                                    <Card.Body>
                                        <p className="fw-bolder">The Date</p>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </section>
            </Container >
        </>
    )
}