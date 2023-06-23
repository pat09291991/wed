import React from 'react'
import PatShe2 from '../../assets/images/patShe2.png'
import '../../she.css'
import { Col, Container, Row } from "react-bootstrap"
export const MobileView = () => {

    return (
        <div>
                 <Col style={{ zIndex: '999' }} md="10">
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <img src={PatShe2} style={{ width: '95%', marginBottom: '2rem' }} />
                            {/* <p className="mb-0 text-start fw-bold" style={{ fontSize: isMobile ? '3rem' : '7rem' }}>Patrick</p>
                            <p className="mb-0 text-start fw-bold" style={{ fontSize: isMobile ? '3rem' : '7rem', marginTop: !isMobile ? "-3rem" : "" }}>Sheryl</p> */}
                        </div>
                    </Col>
        </div>
    )
}