import React, { useEffect, useState } from 'react'
import '../../shemobile.css'
import SnowflakeAnimation from '../../component/SnowflakeAnimation'
import { InviteSectionPageMobile } from './InviteSectionPageMobile'
import { Rsvp } from '../RSVP/rsvp'
import { HomepageSectionMobile } from './HomepageSectionMobile'

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

    return (
        <div>
            <SnowflakeAnimation
                setLoading={setLoading}
                loading={loading}
                setHomePageStyle={setHomePageStyle}
                homePageStyle={homePageStyle}
            />
            {!loading ?
                <>
                    <section id="homepageSection" className='vh-100'>
                        <HomepageSectionMobile homePageStyle={homePageStyle} />
                    </section>
                    <section id="inviteSection" style={{ transform: 'translate3d(0px, 0.04px, 0px)' }}>
                        <InviteSectionPageMobile />
                    </section>
                    <section id="rsvpSection" style={{ transform: 'translate3d(0px, 0.04px, 0px)', paddingTop: '2rem' }}>
                        <p></p>
                        <Rsvp />
                    </section>
                </>
                : ""}

        </div>
    )
}