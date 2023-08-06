import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, VStack, useDisclosure, Text } from '@chakra-ui/react';
import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import backgroundimage from '../assets/wed2.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Box
        bgColor={'purple.50'}
        zIndex={10}
        width={'full'}
        pos={'sticky'}
        top={0}
        height={'80px'}
        p={'0px 10px'}
        mt={0}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <VStack>
          <Heading>Shivaaya Weddings</Heading>
          <Text marginTop={'-8px'}>WEDDING ORGANIZER</Text>
        </VStack>
        <Menu isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Box>
    </>
  );
};

const Menu = ({ isOpen, onClose, onOpen }) => (
  <>
    <Button
      zIndex={'overlay'}
      onClick={onOpen}
      colorScheme='purple'
      p={0}
      h={10}
      w={10}
      borderRadius={'full'}
    >
      <BiMenuAltLeft />
    </Button>
    <Drawer isOpen={isOpen} placement='top' onClose={onClose} size={'full'}>
      <DrawerOverlay />
      <DrawerContent
        style={{
          backgroundImage: `url(${backgroundimage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9
        }}
      >
        <DrawerCloseButton
          zIndex={'overlay'}
          bgColor={'whiteAlpha.900'}
          p={0}
          h={10}
          w={10}
          borderRadius={'full'}
        />
        <DrawerHeader width={'full'}>
          <Heading color={'whiteAlpha.900'} fontSize={['2rem', '3rem', '4rem']} display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
            SHIVAYA WEDDINGS
          </Heading>
        </DrawerHeader>
        <DrawerBody>
          <VStack mt={['280px', '40px', '80px']}>
            <Button onClick={onClose} fontWeight={'extrabold'} fontSize={['1.5rem', '2rem']} size={['md', 'lg']} color={'blackAlpha.900'} variant={'link'}>
              <Link to={'/'}>HOME</Link>
            </Button>
            <Button onClick={onClose} fontWeight={'extrabold'} fontSize={['1.5rem', '2rem']} size={['md', 'lg']} color={'blackAlpha.900'} variant={'link'}>
              <Link to={'/services'}>OUR SERVICES</Link>
            </Button>
            <Button onClick={onClose} fontWeight={'extrabold'} fontSize={['1.5rem', '2rem']} size={['md', 'lg']} color={'blackAlpha.900'} variant={'link'}>
              <Link to={'/about'}>ABOUT US</Link>
            </Button>
            <Button onClick={onClose} fontWeight={'extrabold'} fontSize={['1.5rem', '2rem']} size={['md', 'lg']} color={'blackAlpha.900'} variant={'link'}>
              <Link to={'/contact'}>CONTACT US</Link>
            </Button>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </>
);

export default Header;






