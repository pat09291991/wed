import React, { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { isDesktop, isMobile } from "react-device-detect"
import BgImage from '../../assets/images/bgImage.jpg'
import PatShe2 from '../../assets/images/patShe2.png'
import ScrollDown from '../../assets/images/scroll-down.png'
import '../../she.css'
import { Link } from 'react-scroll';
import SnowflakeAnimation from "../../component/SnowflakeAnimation"
import { InviteSectionPage } from "./InviteSectionPage"

export const Homepage = () => {
    const [loading, setLoading] = useState(true)
    const [homePageStyle, setHomePageStyle] = useState({
        backgroundImage: '',
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
    })


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

    useEffect(() => {
        if (!loading) {
            let snowflake = document.getElementById("snowflake");
            snowflake.classList.add("move-up");
            snowflake.classList.add("w-100");
            setTimeout(() => {
                let homePage = document.getElementById("homePage");
                homePage.classList.add("fade-in-image");
                setHomePageStyle({ ...homePageStyle, backgroundImage: `url(${BgImage})` })
            }, 500)
            setTimeout(() => {
                let mainTitle = document.getElementById("mainTitle");
                mainTitle.classList.add("fade-in");
                let snowflake = document.getElementById("snowflake");
                snowflake.style.height = '0';
            }, 1500)
        }
    }, [loading])

    return (
        <>
            <div className="vh-100 w-100" style={{ overflow: loading ? 'auto' : 'unset' }}>
                <section id="snowflake" className="animate-up">
                    <SnowflakeAnimation setLoading={setLoading} loading={loading} />
                </section>
                <section id="homepageSection">
                    <div id="homePage" className="homepage" style={homePageStyle}></div>
                    <Row className="w-100">
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


                                            <li><a className="nav-link entitled _tb" href=""
                                                style={{ transform: "translate3d(0%, 0px, 0px)" }}>RSVP<span className="under"
                                                    style={{ transform: "translate3d(0px, 0%, 0px)" }} ></span></a></li>



                                            <li><a className="nav-link entitled _tb" href=""
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
                                <img id="mainTitle" src={PatShe2} style={{ width: '95%', marginBottom: '2rem', opacity: 0 }} />
                            </div>
                            <div>
                                <Link
                                    to="inviteSection" // Replace 'next-section' with the ID of your target section
                                    smooth={true} // Enable smooth scrolling
                                    duration={500} // Set the duration of the scroll animation in milliseconds
                                    offset={50} // Adjust the offset if needed (positive value moves the scroll position up, negative value moves it down)
                                    className="scroll-down"
                                >
                                    <img src={ScrollDown} style={{ height: '2rem' }} />
                                </Link>
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

                                    </div>
                                </div>
                                : ""}
                        </Col>
                        <Col md="12">
                            {/* <span class="arrow"></span> */}
                        </Col>
                    </Row>
                </section>
                <section id="inviteSection" style={{ transform: 'translate3d(0px, 0.04px, 0px)', paddingTop: '2rem' }}>
                    <p></p>
                    <InviteSectionPage />
                </section>
            </div>
        </>
    )
}