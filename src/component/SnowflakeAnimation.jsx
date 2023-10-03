import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion"
import '../CustomTransition.css'
import SvgMonogram from './SvgMonogram'
import BgImage from '../assets/images/bgImage.jpg'

const SnowflakeAnimation = ({ setLoading, loading, setHomePageStyle, homePageStyle }) => {
    useEffect(() => {
        if (loading) {
            const createSnowflake = () => {
                const snowflake = document.createElement('div');
                snowflake.className = 'snowflake';
                snowflake.style.left = Math.random() * 100 + 'vw';
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
        } else {
            let snowflake = document.getElementById("snowflakes-container");
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
                let snowflake = document.getElementById("snowflakes-container");
                snowflake.style.height = '0';
            }, 1000)
        }
    }, [loading]);

    const svgHeight = 500;
    const svgWidth = 500;

    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            setLoading(!loading)
        }, 6000);

        return () => {
            clearTimeout(redirectTimeout);
        };
    }, []);


    return (
        <AnimatePresence>
            <motion.div
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div id="snowflakes-container" className='animate-up d-flex align-items-center justify-content-center px-0 mx-0 w-100 vh-100'>
                    {loading ? <SvgMonogram svgHeight={svgHeight} svgWidth={svgWidth} /> : ""}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SnowflakeAnimation;