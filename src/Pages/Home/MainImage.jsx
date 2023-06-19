import { Container, Table, Nav, Navbar } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Circle3 from '../../assets/images/circle3.png'

export const MainImage = () => {
    const [countdown, setCountdown] = useState({
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
    });

    useEffect(() => {
        const calculateCountdown = () => {
            const currentDate = new Date();
            const targetDate = new Date('December 21, 2023');

            const timeDifference = targetDate - currentDate;
            if (timeDifference > 0) {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
                const seconds = Math.floor((timeDifference / 1000) % 60);

                setCountdown({ ...countdown, days: days, hours: hours, minutes: minutes, seconds: seconds })
            }
        };

        const countdownInterval = setInterval(calculateCountdown, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(countdownInterval);
        };
    }, []);

    return (
        <>
            <div className='homeBgImg'>
                <div className='d-flex flex-column align-items-center justify-content-center w-100' style={{ height: "70vh" }}>
                    <img src={Circle3} style={{ width: isMobile ? "90%" : "30%" }} />
                </div>
            </div>
            <Container style={{ marginTop: "-2rem" }} className='text-center'>
                <Table bordered className='shadow'>
                    <thead>
                        <tr className={isMobile ? 'countdownMobile' : 'countdown'}>
                            <th style={{ backgroundColor: "#2A4054" }}>
                                <h4 className='fw-bolder text-white'>Save the</h4>
                                <h4 className='mb-0 fw-bolder text-white'>Date</h4>
                            </th>
                            <th style={{ color: "#2A4054" }}>
                                <h2 className='fw-bolder'>{countdown.days}</h2>
                                <small>DAYS</small>
                            </th>
                            <th style={{ color: "#2A4054" }}>
                                <h2 className='fw-bolder'>{countdown.hours}</h2>
                                <small>HOURS</small>
                            </th>
                            <th style={{ color: "#2A4054" }}>
                                <h2 className='fw-bolder'>{countdown.minutes}</h2>
                                <small>MINUTES</small>
                            </th>
                            <th style={{ color: "#2A4054" }}>
                                <h2 className='fw-bolder'>{countdown.seconds}</h2>
                                <small>SECONDS</small>
                            </th>
                        </tr>
                    </thead>
                </Table>
            </Container>
        </>
    )
}