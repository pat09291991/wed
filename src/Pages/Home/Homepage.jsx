import React, { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { isDesktop, isMobile } from "react-device-detect"
import BgImage from '../../assets/images/bgImage.jpg'
import PatShe2 from '../../assets/images/patShe2.png'
import '../../she.css'
import { Link } from 'react-scroll';
import SnowflakeAnimation from "../../component/SnowflakeAnimation"

export const Homepage = () => {
    const [loading, setLoading] = useState(true)
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

    useEffect(() => {
        if (!loading) {
            let snowflake = document.getElementById("snowflake");
            snowflake.classList.add("move-up");
            setTimeout(() => {
                let mainTitle = document.getElementById("mainTitle");
                mainTitle.classList.add("fade-in");
            }, 1300)
        }
    }, [loading])

    return (
        <>
            <Container fluid id="snowflake" className="animate-up px-0">
                <SnowflakeAnimation setLoading={setLoading} loading={loading} />
            </Container>
            {loading ?
                ""
                :
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
                                    <img id="mainTitle" src={PatShe2} style={{ width: '95%', marginBottom: '2rem', opacity: 0 }} />
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
                            <Col md="12">
                                {/* <span class="arrow"></span> */}
                            </Col>
                        </Row>
                    </section>
                    <section id="inviteSection" style={{ transform: 'translate3d(0px, 0.04px, 0px)' }}>
                        <div className="vh-100 pt-4" id="h-s1">
                            <div id="h-s1-0">
                                <div className="entitled-w">
                                    <div className="entitled" style={{ transform: 'translate3d(0px, 0%, 0px) rotateX(0deg)' }} >THE DATE</div>
                                </div>
                                <div className="line" style={{ transform: 'scaleX(1)' }} ></div>
                                <h2 className="title-1"><span style={{ transform: 'translate3d(0px, 0%, 0px) rotateX(0deg)' }} >Thursday</span> <span
                                    style={{ transform: 'translate3d(0px, 0%, 0px) rotateX(0deg)' }} >December 21</span> <span
                                        style={{ transform: 'translate3d(0px, 0%, 0px) rotateX(0deg)' }} >2023</span></h2>
                            </div>
                            <div id="h-s1-1">
                                <div className="entitled-w">
                                    <div className="entitled" style={{ transform: 'translate3d(0px, 0%, 0px) rotateX(0deg)' }} >THE INVITE</div>
                                </div>
                                <div className="line" style={{ transform: 'scaleX(1)' }} ></div>
                                <p className="txt-1" style={{ transform: 'translate3d(0px, 0%, 0px); opacity: 1' }} >Join the celebration as Alice Veley
                                    and Gene Ross say "I do" on the shores of beautiful Lake Tahoe, California.</p><a className="txt-0 _tb"
                                        href="https://veleyross.app.rsvpify.com" style={{ transform: 'translate3d(0px, 0%, 0px); opacity: 1' }} >RSVP<span
                                            className="under"></span></a>
                            </div>
                            <ul>
                                <li id="h-s1-no-0" className="h-s1-no" style={{ transform: 'translate3d(0px, -44.0352px, 0px)' }} >12</li>
                                <li id="h-s1-no-1" className="h-s1-no" style={{ transform: 'translate3d(0px, 14.6784px, 0px)' }} >21</li>
                                <li id="h-s1-no-2" className="h-s1-no" style={{ transform: 'translate3d(0px, 88.0704px, 0px)' }} >23</li>
                            </ul>
                            <ul id="h-s1-caption-w">
                                <li id="h-s1-caption-0" className="txt-2" style={{ transform: 'transform: translate3d(0px, -73.392px, 0px)' }} ><span>Sep 8,
                                    2019</span><span>She said he was crazy.</span></li>
                                <li id="h-s1-caption-1" className="txt-2" style={{ transform: 'transform: translate3d(0px, 29.3568px, 0px)' }} ><span>Lake
                                    Louise</span><span>He asked her to marry him.</span></li>
                                <li id="h-s1-caption-2" className="txt-2" style={{ transform: 'translate3d(0px, 58.7136px, 0px)' }} >
                                    <span>3:40PM</span><span>She said yes.</span></li>
                                <li id="h-s1-caption-3" className="txt-2"><span>Oct 14, 2019</span><span>We get married.</span></li>
                            </ul>
                        </div>
                    </section>
                </Container >
            }
        </>
    )
}