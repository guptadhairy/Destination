import React from 'react';
import { Parallax } from 'react-parallax';
import one from '../assets/gallery.png';

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
          <Text color={'whiteAlpha.900'}>WE ARE</Text>
          <Heading textAlign={'center'} color={'whiteAlpha.900'}>
            Your Guide for Destination Weddings in Vrindavan & Triyuginarayan Temple
          </Heading>
          <Text color={'whiteAlpha.900'} pt={[2, 4]} pb={0} px={[2, 16]}>
            We are here to give you the best wedding experience. Book the perfect hotel with the most convenient venues, outstanding hospitality, and options for Indian Catering with the expertise of our wedding consulting team.
          </Text>
        </VStack>
      </Box>

      {/* <Parallax strength={200} className='parallex'>
        <Background className="custom-bg">
          <img src={vrindavan} alt="fill murray" />
        </Background>
      </Parallax> */}
    </>
  );
};

export default Hero;
