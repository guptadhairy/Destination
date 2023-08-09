import { Container, Input, Box, Button, Heading,Text, Stack, VStack, HStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {CiLocationOn} from 'react-icons/ci'
import {BiMailSend,BiPhoneCall} from 'react-icons/bi'
import validator from 'validator'; 
import axios from 'axios'
import {toast} from 'react-hot-toast'

const Contact = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const validateEmail = (email) => {
      return validator.isEmail(email); 
    };

    const submitHandler = async(e)=>{
        e.preventDefault();

        if (!validateEmail(email)) {
          toast.error('Invalid email format'); 
          return;
        }

        try {
            await axios.post("https://dest-backend-thcf.vercel.app/contact",{
              name,email,message
            },
            {
              headers:{
                "Content-Type": "application/json"
              },
              withCredentials: true
            });
            toast.success("Your message send successfully");
          } catch (error) {
            toast.error("Some internal error");
            console.log(error);
          }

        setName("");
        setEmail("");
        setMessage("");
    }

    const inputOptions = ({
        display: "flex",
        width: "80%",
        alignItems: 'center',
        padding: 6,
        margin: 'auto',
        justifyContent: 'center',
        fontSize: '1.2rem',
    })
  return (
    <Box minH={'100vh'} >
        <Container maxW={'container.md'}>
        <Heading className='contactH' display={'flex'} alignItems={'center'} padding={8} margin={'auto'} justifyContent={'center'}> Let’s create Memories Together</Heading>
            <form onSubmit={submitHandler} style={{marginTop: '20px'}}>
                <Input {...inputOptions} value={name} onChange={(e) =>setName(e.target.value)} type='text' placeholder='Enter your name' />
                <Input {...inputOptions} value={email} onChange={(e) =>setEmail(e.target.value)} marginTop={"20px"} type='email' placeholder='Enter your email' />
                <Input {...inputOptions} value={message} onChange={(e) =>setMessage(e.target.value)} marginTop={"20px"} type='text' placeholder='Enter Details about wedding' />
                <Button bgColor={'purple.500'} color={'whiteAlpha.900'} width={'50%'} alignItems={"center"} justifyContent={'center'} display={'flex'} margin={'auto'} fontSize={'1.2rem'} marginTop={"20px"} p={8} type='submit'>SEND</Button>
            </form>
        </Container>
        <Stack direction={['column','row']}>
            <VStack justifyContent={'flex-start'} p={['2','16']} alignItems={'flex-start'} width={'full'}>
                <HStack marginTop={'20px'} >
                <CiLocationOn size={'35px'} />
                <Text fontSize={'1.2rem'}>India</Text>
                </HStack>
                <HStack marginTop={'20px'}>
                <BiMailSend size={'35px'} />
                <Text fontSize={'1.2rem'}>shivaayaweddings@gmail.com</Text>
                </HStack>
                <HStack marginTop={'20px'}>
                <BiPhoneCall size={'35px'} />
                <Text fontSize={'1.2rem'}>9997993023</Text>
                </HStack>
            </VStack>
            <VStack width={'full'} p={['0','16']}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55304.75461316368!2d77.51522726343369!3d29.963701401581144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eea921f841f45%3A0x39baf780903811f!2sSaharanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1691348004528!5m2!1sen!2sin" title='destination wedding' width="600" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </VStack>
        </Stack>
        <hr style={{ height: '1px', backgroundColor: 'black', border: 'none' }} />
    </Box>
  )
}

export default Contact
