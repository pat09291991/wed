import React, { useEffect, useState } from 'react'
import PatShe2 from '../../assets/images/patShe2.png'
import '../../shemobile.css'
import { Col, Container, Row } from "react-bootstrap"
import BgImage from '../../assets/images/bgImage.jpg'
import SnowflakeAnimation from '../../component/SnowflakeAnimation'
import { Link } from 'react-scroll'
import ScrollDown from '../../assets/images/scroll-down.png'
import { InviteSectionPage } from './InviteSectionPage'

export const MobileView = () => {
    const [loading, setLoading] = useState(true)
    const [homePageStyle, setHomePageStyle] = useState({
        backgroundImage: '',
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
    })

    useEffect(() => {
        if (!loading) {
            let snowflake = document.getElementById("snowflake");
            snowflake.classList.add("move-up");
            snowflake.classList.add("w-100");
            setTimeout(() => {
                let homePage = document.getElementById("homePage");
                homePage.classList.add("fade-in-image");
                setHomePageStyle({ ...homePageStyle, backgroundImage: `url(${BgImage})` })
            }, 100)
            setTimeout(() => {
                let mainTitle = document.getElementById("mainTitle");
                mainTitle.classList.add("fade-in");
                let snowflake = document.getElementById("snowflake");
                snowflake.style.height = '0';
            }, 1000)
        }
    }, [loading])

    return (
        <div>
            <div id="snowflake" className="animate-up">
                <SnowflakeAnimation setLoading={setLoading} loading={loading} />
            </div>
            <section id="homepageSection" className='vh-100'>
                <div id="homePage" className="homepage" style={homePageStyle}></div>
                <nav id="nav">
                    <a id="nav-logomobile" className="entitledmobile" href="/">
                        <span>P</span> <span>S</span></a><div id="nav-date" className="nav-top">
                        <div>12</div><div>21</div><div>23</div></div>
                    <ul id="nav-linkmobile-w"><li>
                        <a className="nav-linkmobile entitledmobile _tb" href="">RSVP</a>
                    </li>
                        <li><a className="nav-linkmobile entitledmobile _tb" href="">
                            REGISTRY</a></li></ul>
                </nav>
                <div className="position-absolute shetop">
                    <img id="mainTitle" src={PatShe2} style={{ width: '95%', marginBottom: '2rem', opacity: 0 }} />
                    {/* <p className="mb-0 text-start fw-bold" style={{ fontSize: isMobile ? '3rem' : '7rem' }}>Patrick</p>
                            <p className="mb-0 text-start fw-bold" style={{ fontSize: isMobile ? '3rem' : '7rem', marginTop: !isMobile ? "-3rem" : "" }}>Sheryl</p> */}
                </div>
                <Link
                    to="inviteSection" // Replace 'next-section' with the ID of your target section
                    smooth={true} // Enable smooth scrolling
                    duration={500} // Set the duration of the scroll animation in milliseconds
                    offset={50} // Adjust the offset if needed (positive value moves the scroll position up, negative value moves it down)
                    className="scroll-down"
                >
                    <img src={ScrollDown} style={{ height: '2rem' }} />
                </Link>
            </section>
            <section id="inviteSection" style={{ transform: 'translate3d(0px, 0.04px, 0px)'}}>
                <p></p>
                <InviteSectionPage />
            </section>

        </div>
    )
}