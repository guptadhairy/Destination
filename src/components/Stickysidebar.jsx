import { Stack, VStack, Text, Heading, Button, Box } from '@chakra-ui/react';
import React from 'react';
import hotel1 from '../assets/vrindavan.webp';
import hotel2 from '../assets/vrindavan2.jpg';
import { motion } from 'framer-motion';
const Stickysidebar = () => {
  return (
    <Stack direction={['column', 'row']} p={16}>
      <Box width={['100%', '850px']} position={['static', 'sticky']} top="250" alignSelf={['stretch', 'flex-start']}>
        <VStack width="full">
          <motion.div initial={{
            x: '100%',
            opacity: 0,

          }}
          whileInView={{
            x: -121,
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}>
          <Text alignSelf="flex-start">SOME POPULAR DESTINATIONS</Text>
          </motion.div>
          <motion.div initial={{
            x: '-100%',
            opacity: 0,

          }}
          whileInView={{
            x: 1,
            opacity: 1,
          }}
          transition={{
            delay: 0.6
          }}>
          <Heading className="deals">Best Wedding Hotels in VRINDAVAN</Heading>
          </motion.div>
          <motion.div initial={{
            y: '100%',
            opacity: 0,

          }}
          whileInView={{
            y: 1,
            opacity: 1,
          }}
          transition={{
            delay: 0.6,
            type: "spring",
          }} style={{
            marginLeft: '-340px'
          }}>
          <Button alignSelf="flex-start">View All Hotels</Button>
          </motion.div>
          <motion.div initial={{
            y: '100%',
            opacity: 0,

          }}
          whileInView={{
            y: 1,
            opacity: 1,
          }}
          transition={{
            delay: 0.9,
            type: "spring",
          }} style={{
            marginLeft: '-290px'
          }}>
          <Button alignSelf="flex-start">Click to get Best Deals</Button>
          </motion.div>
        </VStack>
      </Box>
      <VStack width="full">
        <div className='wrapper'>
        <img src={hotel1} alt="Best Hotel" />
        </div>
        <Text fontWeight={'bold'} alignSelf="flex-start">Hotels</Text>
        <Text fontSize={'2rem'} alignSelf="flex-start">Four Seasons Vrindavan</Text>
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
            stiffness: 60
          }}>
        <Text alignSelf="flex-start">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsum perspiciatis beatae quas expedita
          quidem necessitatibus cum suscipit dicta sit incidunt consequuntur quia illum consequatur dolores quo, ad
          quibusdam ducimus, recusandae aperiam vel repudiandae. Nemo facere possimus odio, laboriosam in nisi ipsam
          omnis consequatur enim obcaecati ipsa rerum quas dicta?
        </Text>
        </motion.div>
        <img style={{marginTop: '50px'}} src={hotel2} alt="Best Hotel" />
        <Text fontWeight={'bold'} alignSelf="flex-start">Hotels</Text>
        <Text fontSize={'2rem'} alignSelf="flex-start">Four Seasons Vrindavan</Text>
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
            stiffness: 60
          }}>
        <Text alignSelf="flex-start">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsum perspiciatis beatae quas expedita
          quidem necessitatibus cum suscipit dicta sit incidunt consequuntur quia illum consequatur dolores quo, ad
          quibusdam ducimus, recusandae aperiam vel repudiandae. Nemo facere possimus odio, laboriosam in nisi ipsam
          omnis consequatur enim obcaecati ipsa rerum quas dicta?
        </Text>
        </motion.div>
        <img style={{marginTop: '50px'}} src={hotel1} alt="Best Hotel" />
        <Text fontWeight={'bold'} alignSelf="flex-start">Hotels</Text>
        <Text fontSize={'2rem'} alignSelf="flex-start">Four Seasons Vrindavan</Text>
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
            stiffness: 60
          }}>
        <Text alignSelf="flex-start">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsum perspiciatis beatae quas expedita
          quidem necessitatibus cum suscipit dicta sit incidunt consequuntur quia illum consequatur dolores quo, ad
          quibusdam ducimus, recusandae aperiam vel repudiandae. Nemo facere possimus odio, laboriosam in nisi ipsam
          omnis consequatur enim obcaecati ipsa rerum quas dicta?
        </Text>
        </motion.div>
      </VStack>
    </Stack>
  );
};

export default Stickysidebar;