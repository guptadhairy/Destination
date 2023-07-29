import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Heading, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {BiMenuAltLeft} from 'react-icons/bi'
import backgroundimage from '../assets/wed2.png'
import { Link } from 'react-router-dom'

const Header = () => {
    const {isOpen,onClose,onOpen} = useDisclosure()
  return (
    <>
    <HStack boxSizing='border-box' bgColor={'purple.50'} zIndex={10} width={'full'}  pos={'sticky'} top={0} height={'80px'} p={'0px 10px'} mt={0}>
        <Heading width={'full'}>Destination Wedding</Heading>
        <div width={'full'}>
        <Menu isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
        </div>
    </HStack>
    </>
  )
}

const Menu = ({isOpen,onClose,onOpen}) =>(
    <>
    <Button zIndex={'overlay'} onClick={onOpen} colorScheme='purple' p={0} h={10} w={10} borderRadius={'full'}><BiMenuAltLeft /></Button>
    <Drawer isOpen={isOpen} placement='top' onClose={onClose} size={'full'}>
        <DrawerOverlay />
        <DrawerContent  style={{
          backgroundImage: `url(${backgroundimage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9
        }}>
            <DrawerCloseButton zIndex={'overlay'} bgColor={'whiteAlpha.900'} p={0} h={10} w={10} borderRadius={'full'}/>
            <DrawerHeader width={'full'}>
              <Heading color={'whiteAlpha.900'} fontSize={'4rem'} display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>SHIVAYA WEDDINGS</Heading>
            </DrawerHeader>
            <DrawerBody>
              <VStack mt={'80px'}>
                <Button onClick={onClose} fontWeight={'extrabold'} fontSize={'2rem'} size={'lg'} color={'blackAlpha.900'} variant={'link'}>
                  <Link to={'/'}>HOME</Link>
                </Button>
                <Button onClick={onClose} fontWeight={'extrabold'} fontSize={'2rem'} size={'lg'} color={'blackAlpha.900'} variant={'link'}>
                  <Link to={'/services'}>OUR SERVICES</Link>
                </Button>
                <Button onClick={onClose} fontWeight={'extrabold'} fontSize={'2rem'} size={'lg'}  color={'blackAlpha.900'} variant={'link'}>
                  <Link to={'/about'}>ABOUT US</Link>
                </Button>
                <Button onClick={onClose} fontWeight={'extrabold'} fontSize={'2rem'} size={'lg'}  color={'blackAlpha.900'} variant={'link'}>
                  <Link to={'/contact'}>CONTACT US</Link>
                </Button>
              </VStack>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
)

export default Header
