import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import host from '../assets/host.png';
import { Heading, Box } from '@chakra-ui/react';
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
        bgImageStyle={{
          width: '100%',
          height: 'auto',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        strength={-200}
      >
        <Box
          ref={inViewRef}
          display="flex"
          flexDirection="column"
          alignItems={['center', 'center', 'center', 'center', 'center']}
          justifyContent={['center', 'center', 'center', 'center', 'center']}
          height={['100vh', '70vh', '70vh', '70vh', '70vh']}
          color="white"
          textAlign="center"
          px={[4, 8, 12, 16]}
        >
          <Heading className='hostheading' fontSize={['2rem', '2rem', '3rem', '3rem', '4rem']}>
            We host more than
          </Heading>
          <Heading className='hostheading' fontSize={['2rem', '2rem', '3rem', '3rem', '4rem']} mb={[2, 4]}>
            {inView ? count : 0}
          </Heading>
          <Heading className='hostheading' fontSize={['2rem', '2rem', '3rem', '3rem', '4rem']}>
            Destination Weddings every year
          </Heading>
        </Box>
      </Parallax>
    </div>
  );
};

export default Hosted;
