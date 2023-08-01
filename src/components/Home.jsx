import '../styles/home.css'
import React, { useEffect } from 'react'
import wed3 from '../assets/wed3.jpg'
import Typewriter from "typewriter-effect";
import { Heading, Stack, VStack } from '@chakra-ui/react'
import Hero from './Hero';
import Banner from './Banner';
import MyComponent from './MyComponent';
import Hosted from './Hosted';
import Stickysidebar from './Stickysidebar';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Home = () => {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[])
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
        <img data-aos="fade-right" src={wed3} alt='Destination Wedding' />
      </VStack>
    </Stack>
    <Hero />
    <Banner />
    <MyComponent />
    <Hosted />
    <Stickysidebar />
    <hr style={{ height: '1px', backgroundColor: 'black', border: 'none' }} />
    <Footer />
    </>
  )
}

export default Home
