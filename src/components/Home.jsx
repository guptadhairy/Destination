import '../styles/home.css';
import React, { useEffect } from 'react';
import wed3 from '../assets/wed3.jpg';
import Typewriter from 'typewriter-effect';
import { Heading, Stack, VStack } from '@chakra-ui/react';
import Hero from './Hero';
import Banner from './Banner';
import MyComponent from './MyComponent';
import Hosted from './Hosted';
import Stickysidebar from './Stickysidebar';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Background from './particles/Background';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Stack direction={['column', 'row']} p={['2', '4', '6']} spacing={['2', '4', '6']}>
        <VStack className='wed3' width={['full', '50%']} justifyContent={['center', 'flex-start']}>
          <img src={wed3} alt='Destination Wedding' />
        </VStack>
        <VStack width={['full', '50%']} justifyContent={'center'} alignItems={['center', 'flex-start']}>
          <Heading color={'whiteAlpha.900'} mt={['1rem', '-3rem']} justifyContent={'center'} ml={['0','6rem']}>
            <Typewriter
              options={{
                strings: ['Sacred Vows', ' Eternal Love'],
                autoStart: true,
                loop: true,
                cursor: '',
                wrapperClassName: 'typewriterpara',
              }}
            />
          </Heading>
          <Heading className='changecolor' ml={['0', '6rem']}>
            Weddings in Vrindavan & Triyuginarayan Temple
          </Heading>
        </VStack>
      </Stack>

      <Hero />
      <Background />
      <Banner />
      <MyComponent />
      <Hosted />
      <Stickysidebar />
      <hr style={{ height: '1px', backgroundColor: 'white', border: 'none' }} />
    </>
  );
};

export default Home;
