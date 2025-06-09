import React from 'react';
import { toast } from 'react-toastify';
import ButtonMUI from '@mui/material/Button';
import { colors, styled } from '@mui/material';

import { isEnglishWord } from '../utils/utils';
import { useAppContext } from '../providers/AppProvider';

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

  const [loading, setLoading] = React.useState(false);

  const handleDelete = () => {
    setWord(prev => [...prev.slice(0, selectedCharIndex), '', ...prev.slice(selectedCharIndex + 1)]);
    setSelectedCharIndex(prev => (prev + 1) % 5);
  };

  const handleEnter = async () => {
    setLoading(true);
    const isWordExist = await isEnglishWord(word.join(''));
    setLoading(false);
    isWordExist ? toast.success('Valid word!') : toast.error('Invalid word!');
  };

  return (
    <Container>
      <Button onClick={handleDelete} disabled={loading}>
        Delete
      </Button>
      <Button onClick={handleEnter} loading={loading}>
        Enter
      </Button>
    </Container>
  );
};

export default WordCheckerActions;
