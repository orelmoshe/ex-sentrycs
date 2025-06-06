import React from 'react';
import { toast } from 'react-toastify';
import ButtonMUI from '@mui/material/Button';
import { colors, styled } from '@mui/material';

import { useAppContext } from '../providers/AppProvider';
import { isEnglishWord } from '../utils/utils';

const Container = styled('div')({});

const Button = styled(ButtonMUI)({
  height: 80,
  width: 180,
  margin: 10,
  color: colors.common.white,
  fontSize: 22,
  background: colors.blue.A700,
});

const WordCheckerActions: React.FC = () => {
  const { selectedCharIndex, setSelectedCharIndex, setWord, word } = useAppContext();

  const handleDelete = () => {
    setWord(prev => [...prev.slice(0, selectedCharIndex), '', ...prev.slice(selectedCharIndex + 1)]);
    setSelectedCharIndex(prev => (prev + 1) % 5);
  };

  const handleEnter = async () => {
    const isWordExist = await isEnglishWord(word.join(''));
    isWordExist ? toast.success('Valid word!') : toast.error('Invalid word!');
  };

  return (
    <Container>
      <Button onClick={handleDelete}>Delete</Button>
      <Button onClick={handleEnter}>Enter</Button>
    </Container>
  );
};

export default WordCheckerActions;
