import React from 'react'
import { Parallax, Background } from 'react-parallax';
import one from '../assets/gallery.png'
import vrindavan from '../assets/vrindavan2.jpg'
import { Heading, VStack, Text } from '@chakra-ui/react';

const Hero = () => {
  return (
    <>
    <div className='setting'>
    <Parallax style={{width: '50%',borderRadius: '10px'}}
    className='parallex'
        blur={{ min: -15, max: 15 }}
        bgImage={one}
        bgImageAlt="the dog"
        strength={-200}
    >
    </Parallax>
    <VStack margin={'auto'} width={'50%'}>
      <Text>WE ARE</Text>
      <Heading p={16}>Your Guide for Destination Weddings in Vrindavan & Triyuginarayan Temple</Heading>
      <Text paddingLeft={16}>We are here to give you the best wedding experience. Book the perfect hotel with the most convenient venues, outstanding hospitality, and options for Indian Catering with the expertise of our wedding consulting team.</Text>
    </VStack>
    </div>


    <Parallax  strength={200} className='parallex' >
        <Background className="custom-bg">
            <img src={vrindavan} alt="fill murray" />
        </Background>
    </Parallax>

    </>
  )
}

export default Hero