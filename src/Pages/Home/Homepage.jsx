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
import { Rsvp } from "../RSVP/rsvp"
import { HomepageSectionDesktop } from "./HomepageSectionDesktop"

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

    return (
        <>
            <div className="vh-100 w-100" style={{ overflow: loading ? 'auto' : 'unset' }}>
                <SnowflakeAnimation
                    setLoading={setLoading}
                    loading={loading}
                    setHomePageStyle={setHomePageStyle}
                    homePageStyle={homePageStyle}
                />
                {!loading ?
                    <>
                        <section id="homepageSection">
                            <HomepageSectionDesktop homePageStyle={homePageStyle} />
                        </section>
                        <section id="inviteSection" style={{ transform: 'translate3d(0px, 0.04px, 0px)', paddingTop: '2rem' }}>
                            <p></p>
                            <InviteSectionPage />
                        </section>
                        <section id="rsvpSection" style={{ transform: 'translate3d(0px, 0.04px, 0px)', paddingTop: '2rem' }}>
                            <p></p>
                            <Rsvp />
                        </section>
                    </>
                    : ""}
            </div>
        </>
    )
}