import { Text, VStack } from '@chakra-ui/react';
import React from 'react'
import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <VStack spacing={4} mt={[4, 6, 8]} mb={[4, 6, 8]}>
          <Marquee style={{marginTop: '30px'}} speed={100} pauseOnHover={false} direction='left'>
            <div className='image_wraper' >
              <Text className='my-outlined-text' fontSize={['60px', '100px', '120px']}>UNITE</Text>
            </div>
            <div className='image_wraper' >
              <Text className='my-outlined-text' fontSize={['60px', '100px', '120px']}>FOREVER</Text>
            </div>
            <div className='image_wraper' >
              <Text className='my-outlined-text' fontSize={['60px', '100px', '120px']}>IN</Text>
            </div>
            <div className='image_wraper' >
              <Text className='my-outlined-text' fontSize={['60px', '100px', '120px']}>ETERNAL</Text>
            </div>
            <div className='image_wraper' >
              <Text className='my-outlined-text' fontSize={['60px', '100px', '120px']}>BLISS</Text>
            </div>
            <div className='image_wraper' >
              <Text className='my-outlined-text' fontSize={['60px', '100px', '120px']}>WELCOME</Text>
            </div>
            <div className='image_wraper' >
              <Text className='my-outlined-text' fontSize={['60px', '100px', '120px']}>TO</Text>
            </div>
            <div className='image_wraper' >
              <Text className='my-outlined-text' fontSize={['60px', '100px', '120px']}>SHIVAYA</Text>
            </div>
            <div className='image_wraper' >
              <Text className='my-outlined-text' fontSize={['60px', '100px', '120px']}>WEDDINGS.</Text>
            </div>
          </Marquee>
        </VStack>
      )
}

export default Banner
