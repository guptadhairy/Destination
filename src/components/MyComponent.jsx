import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const MyComponent = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Container maxW={'container.xl'} p={16}>
        <Heading fontWeight="normal" textAlign="center">Get ready for a bespoke wedding</Heading>
        <Heading fontWeight="normal" textAlign="center">experience. From exceptional and</Heading>
        <Heading fontWeight="normal" textAlign="center">exotic locations to planning every little</Heading>
        <Heading fontWeight="normal" textAlign="center">detail. We will help you execute your</Heading>
        <Heading fontWeight="normal" textAlign="center">dream wedding perfectly.</Heading>
      </Container>
      <button class="glowing-button">
        <Link to={'/contact'}>Click to get best deals</Link>
      </button>
    </div>
  );
};

export default MyComponent;