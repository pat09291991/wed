import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion"
import '../CustomTransition.css'
import SvgMonogram from './SvgMonogram'

const SnowflakeAnimation = ({ setLoading, loading }) => {
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
        }
    }, [loading]);

    const svgHeight = 500;
    const svgWidth = 500;

    useEffect(() => {
        setLoading(true)
        const redirectTimeout = setTimeout(() => {
            setLoading(false)
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
                <div id="snowflakes-container" className='d-flex align-items-center justify-content-center px-0 mx-0 w-100 vh-100'>
                    {loading ? <SvgMonogram svgHeight={svgHeight} svgWidth={svgWidth} /> : ""}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SnowflakeAnimation;