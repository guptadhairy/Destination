import React from 'react';
import { Parallax } from 'react-parallax';
import one from '../assets/gallery.png';
import { motion } from 'framer-motion';
import { Heading, VStack, Text, Box } from '@chakra-ui/react';

const Hero = () => {
  return (
    <>
      <Box className='setting' display={['block', 'flex']} flexDirection={['column', 'row']} height={['auto','100vh']}>
        <Parallax
          style={{ width: '100%', borderRadius: '10px' }}
          className='parallex'
          blur={{ min: -15, max: 15 }}
          bgImage={one}
          bgImageAlt="the dog"
          strength={-200}
        ></Parallax>
        <VStack width={['100%', '80%']} p={[4, 16]} marginTop={['-410px','0']}>
          <motion.div initial={{
            y: '100%',
            opacity: 0,

          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.1,
            type: 'spring',
            stiffness: 50
          }}>
          <Text >WE ARE</Text>
          </motion.div>
          <motion.div  initial={{
            y: '100%',
            opacity: 0,

          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
            type: 'spring',
            stiffness: 50
          }}>
          <Heading textAlign={'center'}>
            Your Guide for Destination Weddings in Vrindavan & Triyuginarayan Temple
          </Heading>
          </motion.div>
          <motion.div initial={{
            y: '100%',
            opacity: 0,

          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            type: 'spring',
            stiffness: 60
          }}>
          <Text pt={[2, 4]} pb={0} px={[2, 16]}>
            We are here to give you the best wedding experience. Book the perfect hotel with the most convenient venues, outstanding hospitality, and options for Indian Catering with the expertise of our wedding consulting team.
          </Text>
          </motion.div>
        </VStack>
      </Box>
    </>
  );
};

export default Hero;
