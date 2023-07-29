import '../styles/home.css'
import React from 'react'
import wed3 from '../assets/wed3.jpg'
import Typewriter from "typewriter-effect";
import { Heading, Stack, VStack } from '@chakra-ui/react'
import Hero from './Hero';
const Home = () => {
  return (
    <>
    <Stack direction={['column','row']} p={'4'}>
      <VStack width={'full'} justifyContent={'center'} alignItems={'center'}>
        <Heading mt={'-3rem'} justifyContent={'center'} alignItems={'center'}><Typewriter
            options={{
              strings: ["Sacred Vows", " Eternal Love"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          /></Heading>
        <Heading className='changecolor' ml={'6rem'}>Weddings in Vrindavan & Triyuginarayan Temple</Heading>
      </VStack>
      <VStack className='wed3' width={'full'}>
        <img src={wed3} alt='Destination Wedding' />
      </VStack>
    </Stack>
    <Hero />
    </>
  )
}

export default Home
