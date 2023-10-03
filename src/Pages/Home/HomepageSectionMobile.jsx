import { Link } from 'react-scroll'
import PatShe2 from '../../assets/images/patShe2.png'
import ScrollDown from '../../assets/images/scroll-down.png'

export const HomepageSectionMobile = ({ homePageStyle }) => {

    return (
        <>
            <div id="homePage" className="homepage" style={homePageStyle}></div>
            <nav id="nav">
                <a id="nav-logomobile" className="entitledmobile" href="/">
                    <span>P</span> <span>S</span></a><div id="nav-date" className="nav-top">
                    <div>12</div><div>21</div><div>23</div></div>
                <ul id="nav-linkmobile-w">
                    <li>
                        <Link to="rsvpSection"
                            smooth={true} // Enable smooth scrolling
                            duration={500} // Set the duration of the scroll animation in milliseconds
                            offset={50} // Adjust the offset if needed (positive value moves the scroll position up, negative value moves it down)
                            className="nav-linkmobile entitledmobile _tb"
                        >
                            RSVP
                        </Link>
                    </li>
                    <li>
                        <a className="nav-linkmobile entitledmobile _tb" href="">REGISTRY</a>
                    </li>
                </ul>
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
        </>
    )
}