import { Stack, VStack, Text, Heading, Button, Box } from '@chakra-ui/react';
import React from 'react';
import hotel1 from '../assets/vrindavan.webp';
import hotel2 from '../assets/vrindavan2.jpg';

const Stickysidebar = () => {
  return (
    <Stack direction={['column', 'row']} p={16}>
      <Box width={['100%', '850px']} position={['static', 'sticky']} top="250" alignSelf={['stretch', 'flex-start']}>
        <VStack width="full">
          <Text alignSelf="flex-start">SOME POPULAR DESTINATIONS</Text>
          <Heading className="deals">Best Wedding Hotels in VRINDAVAN</Heading>
          <Button alignSelf="flex-start">View All Hotels</Button>
          <Button alignSelf="flex-start">Click to get Best Deals</Button>
        </VStack>
      </Box>
      <VStack width="full">
        <div className='wrapper'>
        <img src={hotel1} alt="Best Hotel" />
        </div>
        <Text fontWeight={'bold'} alignSelf="flex-start">Hotels</Text>
        <Text fontSize={'2rem'} alignSelf="flex-start">Four Seasons Vrindavan</Text>
        <Text alignSelf="flex-start">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsum perspiciatis beatae quas expedita
          quidem necessitatibus cum suscipit dicta sit incidunt consequuntur quia illum consequatur dolores quo, ad
          quibusdam ducimus, recusandae aperiam vel repudiandae. Nemo facere possimus odio, laboriosam in nisi ipsam
          omnis consequatur enim obcaecati ipsa rerum quas dicta?
        </Text>
        <img style={{marginTop: '50px'}} src={hotel2} alt="Best Hotel" />
        <Text fontWeight={'bold'} alignSelf="flex-start">Hotels</Text>
        <Text fontSize={'2rem'} alignSelf="flex-start">Four Seasons Vrindavan</Text>
        <Text alignSelf="flex-start">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsum perspiciatis beatae quas expedita
          quidem necessitatibus cum suscipit dicta sit incidunt consequuntur quia illum consequatur dolores quo, ad
          quibusdam ducimus, recusandae aperiam vel repudiandae. Nemo facere possimus odio, laboriosam in nisi ipsam
          omnis consequatur enim obcaecati ipsa rerum quas dicta?
        </Text>
        <img style={{marginTop: '50px'}} src={hotel1} alt="Best Hotel" />
        <Text fontWeight={'bold'} alignSelf="flex-start">Hotels</Text>
        <Text fontSize={'2rem'} alignSelf="flex-start">Four Seasons Vrindavan</Text>
        <Text alignSelf="flex-start">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsum perspiciatis beatae quas expedita
          quidem necessitatibus cum suscipit dicta sit incidunt consequuntur quia illum consequatur dolores quo, ad
          quibusdam ducimus, recusandae aperiam vel repudiandae. Nemo facere possimus odio, laboriosam in nisi ipsam
          omnis consequatur enim obcaecati ipsa rerum quas dicta?
        </Text>
      </VStack>
    </Stack>
  );
};

export default Stickysidebar;