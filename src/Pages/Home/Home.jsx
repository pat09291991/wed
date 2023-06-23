import React from 'react'
import { Homepage } from './Homepage'
import { MobileView } from './MobileView'
import { isDesktop, isMobile } from "react-device-detect"

export const Home = () => {

    return (
        <div>
            {isMobile ? <MobileView /> : <Homepage />}
        </div>
    )
}