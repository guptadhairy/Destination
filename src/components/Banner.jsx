import { Text } from '@chakra-ui/react';
import React from 'react'
import Marquee from "react-fast-marquee";
// import gallery from '../assets/gallery.png'
// import vrindavan from '../assets/vrindavan.webp'
// import vrindavan2 from '../assets/vrindavan2.jpg'
// import wed1 from '../assets/wed1.jpg'
// import wed2 from '../assets/wed2.png'
// import wed3 from '../assets/wed3.jpg'

const Banner = () => {
    return (
        <div>
          <Marquee style={{marginTop: '30px'}} speed={100} pauseOnHover={true} direction='left' gradient={true}>
            <div className='image_wraper' >
              <Text className='my-outlined-text'>UNITE</Text>
            </div>
            <div className='image_wraper' >
              <Text className='my-outlined-text'>FOREVER</Text>
            </div>
            <div className='image_wraper' >
              <Text className='my-outlined-text'>IN</Text>
            </div>
            <div className='image_wraper' >
              <Text className='my-outlined-text'>ETERNAL</Text>
            </div>
            <div className='image_wraper' >
              <Text className='my-outlined-text'>BLISS</Text>
            </div>
            <div className='image_wraper' >
              <Text className='my-outlined-text'>WELCOME</Text>
            </div>
            <div className='image_wraper' >
              <Text className='my-outlined-text'>TO</Text>
            </div>
            <div className='image_wraper' >
              <Text className='my-outlined-text'>SHIVAYA</Text>
            </div>
            <div className='image_wraper' >
              <Text className='my-outlined-text'>WEDDINGS.</Text>
            </div>
          </Marquee>
        </div>
      )
}

export default Banner
