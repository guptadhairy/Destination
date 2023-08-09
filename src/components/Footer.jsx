import { HStack, Stack, VStack, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {FaYoutube,FaInstagram,FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <Stack bgColor={'whiteAlpha.900'} direction={['column','row']} p={10} justifyContent={'space-between'}>
        <VStack>
            <HStack>
                <Link to={'/'}>Home |</Link>
                <Link to={'/services'}>Our Services |</Link>
                <Link to={'/about'}>About Us |</Link>
                <Link to={'/contact'}>Contact Us</Link>
            </HStack>
            <Text fontWeight={'semibold'} mt={'20px'} alignSelf={'flex-start'}>© 2023 | www.shivayaweddings.com</Text>
        </VStack>
        <VStack>
            <HStack>
                <Button variant={'unstyled'}><FaYoutube size={'30px'} /></Button>
                <Button variant={'unstyled'}><FaInstagram size={'30px'} /></Button>
                <Button variant={'unstyled'}><FaFacebook size={'30px'} /></Button>
            </HStack>
            <Text>developed by Dhairya Gupta</Text>
        </VStack>
    </Stack>
  )
}

export default Footer
