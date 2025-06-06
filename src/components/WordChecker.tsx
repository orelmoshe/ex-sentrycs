import React from 'react';
import { styled } from '@mui/material/styles';

import Keyboard from './Keyboard';
import CharFields from './CharFields';
import WordCheckerActions from './WordCheckerActions';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const WordChecker: React.FC = () => {
  return (
    <Container>
      <CharFields />
      <Keyboard />
      <WordCheckerActions />
    </Container>
  );
};

export default WordChecker;
