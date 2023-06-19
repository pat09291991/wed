import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isMobile } from 'react-device-detect';
import { useEffect, useState } from 'react';

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            setScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container>
            <Navbar className={scrolled ? 'navbar scrolled' : 'navbar'} expand="lg" fixed="top" style={{ outline: "none", }}>
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ outline: "none", border: 'none' }} />
                    <Navbar.Collapse id="basic-navbar-nav" style={{ outline: "none" }}>
                        <Nav className="mx-auto text-center">
                            <Nav.Link style={{ color: scrolled ? "#f0f0f0" : "#2A4054" }} href="#home" className={isMobile ? '' : 'me-5'}>HOME</Nav.Link>
                            <Nav.Link style={{ color: scrolled ? "#f0f0f0" : "#2A4054" }} href="#rsvp" className={isMobile ? '' : 'me-5'}>RSVP</Nav.Link>
                            <Nav.Link style={{ color: scrolled ? "#f0f0f0" : "#2A4054" }} href="#churchAndVenue">CHURCH and VENUE</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )
}