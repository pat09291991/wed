import { useEffect, useState } from 'react';
import rose from '../../../src/assets/images/rose.png'

export const Header = () => {
  const [countdown, setCountdown] = useState('');

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

        setCountdown(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
      } else {
        setCountdown('Countdown Complete!');
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
      <div className='text-center'>
        <img src={rose} style={{ height: "15rem", width: "15rem"}} />
      </div>
      <div className='mt-5'>
        <h1 className='mainTitle fw-bolder'>Sheryl & Patrick</h1>
      </div>
      <div className='mb-5 subTitle' style={{ fontFamily: "Nunito" }}>
        <p className='mt-5 mb-2 text-secondary fw-bold'>DECEMBER 21, 2023</p>
        <p className='fw-bold text-secondary'>{countdown}</p>
      </div>
    </>
  )
}