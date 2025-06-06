import React from 'react';
import { colors, styled } from '@mui/material';
import ButtonMUI from '@mui/material/Button';

import H2 from '../styledComponents/H2';
import { useAppContext } from '../providers/AppProvider';

const Container = styled('div')({
  maxWidth: 1100,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const KeyboardChar = styled(ButtonMUI)({
  height: 90,
  width: 90,
  margin: 10,
  borderRadius: 5,
  boxShadow: '2px 2px 4px 0px #00000040',
});

const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

const Keyboard: React.FC = () => {
  const { selectedCharIndex, setSelectedCharIndex, setWord } = useAppContext();

  const clickHandler = (char: string) => () => {
    setWord(prev => [...prev.slice(0, selectedCharIndex), char, ...prev.slice(selectedCharIndex + 1)]);
    setSelectedCharIndex(prev => (prev + 1) % 5);
  };

  return (
    <Container>
      {letters.map((letter, index) => (
        <KeyboardChar key={index} onClick={clickHandler(letter)}>
          <H2 style={{ color: colors.common.black }}>{letter}</H2>
        </KeyboardChar>
      ))}
    </Container>
  );
};

export default Keyboard;
