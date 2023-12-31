import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { AnimatePresence, motion } from "framer-motion"

const SnowflakeAnimationOld = ({ circle3 }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const createSnowflake = () => {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.style.left = Math.random() * 500 + 'vw';
            snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
            snowflake.style.animationDelay = 1 + 's';
            document.getElementById('snowflakes-container').appendChild(snowflake);
            snowflake.addEventListener('animationend', function () {
                snowflake.remove();
            });
        };

        const snowflakeInterval = setInterval(createSnowflake, 200);

        return () => {
            clearInterval(snowflakeInterval);
        };
    }, []);

    // useEffect(() => {
    //     const redirectTimeout = setTimeout(() => {
    //         navigate('/the-wedding')
    //     }, 6000);

    //     return () => {
    //         clearTimeout(redirectTimeout);
    //     };
    // }, []);

    const [display, setDisplay] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setDisplay(true)
        }, 0)
    }, [])

    return (
        <AnimatePresence>
            <motion.div
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div id="snowflakes-container" style={{ height: "100vh" }} className='d-flex align-items-center justify-content-center'>
                    <div>
                        <img src={circle3} style={{ width: isMobile ? "70%" : "30%" }} className='monogram' />
                        {display ?
                            <>
                                <p style={{ fontSize: isMobile ? "1rem" : "3rem" }}>Patrick & Sheryl</p>
                                <p style={{ fontSize: isMobile ? "1rem" : "3rem" }}>12 . 21 . 23</p>
                            </>
                            : ""}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SnowflakeAnimation;