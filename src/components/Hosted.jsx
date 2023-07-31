import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import host from '../assets/host.png';
import { Heading } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';

const Hosted = () => {
  const [count, setCount] = useState(0);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust the threshold as needed to control when the counting animation starts.
  });

  useEffect(() => {
    if (inView) {
      let currentCount = 0;
      const interval = setInterval(() => {
        currentCount++;
        setCount(currentCount);
        if (currentCount >= 100) {
          clearInterval(interval);
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <div>
      <Parallax
        className='parallex3'
        blur={{ min: -15, max: 15 }}
        bgImage={host}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div
          ref={inViewRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            color: 'white',
          }}
        >
          <Heading className='hostheading' fontSize={'4rem'} textAlign="center">
            SHIVAYA'S host more than
          </Heading>
          <Heading className='hostheading' fontSize={'4rem'} textAlign="center">
            <p>{inView ? count : 0}</p>
          </Heading>
          <Heading className='hostheading' fontSize={'4rem'} textAlign="center">
            Destination Weddings every year
          </Heading>
        </div>
      </Parallax>
    </div>
  );
};

export default Hosted;