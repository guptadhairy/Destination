import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const MyComponent = () => {
  return (
    <div
      style={{
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <motion.div initial={{
      y: '100%',
      opacity: 0,

    }}
    whileInView={{
      y: 0,
      opacity: 1,
    }}
    transition={{
      type: 'spring',
      stiffness: 60
    }}>
      <Container maxW={'container.xl'} p={16}>
        <Heading fontWeight="normal" textAlign="center">Get ready for a bespoke wedding</Heading>
        <Heading fontWeight="normal" textAlign="center">experience. From exceptional and</Heading>
        <Heading fontWeight="normal" textAlign="center">exotic locations to planning every little</Heading>
        <Heading fontWeight="normal" textAlign="center">detail. We will help you execute your</Heading>
        <Heading  fontWeight="normal" textAlign="center">dream wedding perfectly.</Heading>
      </Container>
      </motion.div>
      <motion.button initial={{
      y: '100%',
      opacity: 0,

    }}
    whileInView={{
      y: 0,
      opacity: 1,
    }}
    transition={{
      delay: 0.2,
      type: 'spring',
      stiffness: 40
    }} className="glowing-button">
        <Link to={'/contact'}>Click to get best deals</Link>
      </motion.button>
    </div>
  );
};

export default MyComponent;