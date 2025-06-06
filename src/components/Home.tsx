import React from 'react';
import { styled } from '@mui/material/styles';

import Header from './Header';
import WordChecker from './WordChecker';

const Container = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <WordChecker />
    </Container>
  );
};

export default Home;
