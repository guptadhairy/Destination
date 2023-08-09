import '../styles/home.css';
import React from 'react';
import wed3 from '../assets/wed3.jpg';
import Typewriter from 'typewriter-effect';
import { Heading, Stack, VStack } from '@chakra-ui/react';
import Hero from './Hero';
import Banner from './Banner';
import MyComponent from './MyComponent';
import Hosted from './Hosted';
import Stickysidebar from './Stickysidebar';
import { motion } from 'framer-motion';
// import Background from './particles/Background';

const Home = () => {

  return (
    <>
      <Stack direction={['column', 'row']} p={['2', '4', '6']} spacing={['2', '4', '6']}>
        <VStack className='wed3' width={['full', '50%']} justifyContent={['center', 'center']}>
          <img src={wed3} alt='Destination Wedding' />
        </VStack>
        <VStack width={['full', '50%']} justifyContent={'center'} alignItems={['center', 'flex-start']}>
          <Heading mt={['1rem', '-3rem']} justifyContent={'center'} ml={['0','6rem']}>
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
          <motion.div initial={{
            x: '100%',
            opacity: 0,

          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
            type: 'spring'
          }}>
          <Heading className='changecolor' ml={['0', '6rem']}>
            Weddings in Vrindavan & Triyuginarayan Temple
          </Heading>
          </motion.div>
        </VStack>
      </Stack>

      <Hero />
      <Banner />
      <MyComponent />
      <Hosted />
      <Stickysidebar />
      <hr style={{ height: '1.5px', backgroundColor: 'black', border: 'none' }} />
    </>
  );
};

export default Home;
