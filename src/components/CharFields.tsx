import React from 'react';
import { toast } from 'react-toastify';
import { colors, styled } from '@mui/material';

import H2 from '../styledComponents/H2';
import { isEnglishWord } from '../utils/utils';
import EventListener from '../utils/eventListener';

const Container = styled('div')({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
});

const CharField = styled('div', {
  shouldForwardProp: (prop: any) => !['isSelected'].includes(prop),
})<{ isSelected?: boolean }>(({ isSelected = false }) => ({
  height: 80,
  width: 80,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
  border: '2px solid',
  borderColor: isSelected ? colors.blue.A700 : colors.common.black,
  borderRadius: 2,
  cursor: 'pointer',
}));

const CharFields: React.FC = () => {
  const eventListener = EventListener.getInstance();

  const [word, setWord] = React.useState<string[]>(['', '', '', '', '']);
  const [selectedCharIndex, setSelectedCharIndex] = React.useState<number>(0);

  const selectCharHandler = (index: number) => () => setSelectedCharIndex(index);

  const handleCharacterClick = React.useCallback(
    (char: string) => {
      setWord(prev => [...prev.slice(0, selectedCharIndex), char, ...prev.slice(selectedCharIndex + 1)]);
      setSelectedCharIndex(prev => (prev + 1) % 5);
    },
    [selectedCharIndex],
  );

  const handleBackspace = React.useCallback(() => {
    setWord(prev => [...prev.slice(0, selectedCharIndex), '', ...prev.slice(selectedCharIndex + 1)]);
    setSelectedCharIndex(prev => (prev + 4) % 5);
  }, [selectedCharIndex]);

  const handleEnter = React.useCallback(async () => {
    const isWordExist = await isEnglishWord(word.join(''));
    isWordExist ? toast.success('Valid word!') : toast.error('Invalid word!');
  }, [word]);

  React.useEffect(() => {
    eventListener.registerListener('CHARACTER_CLICK', handleCharacterClick);
    eventListener.registerListener('BACKSPACE', handleBackspace);
    eventListener.registerListener('ENTER', handleEnter);
    return () => {
      eventListener.removeListener('CHARACTER_CLICK');
      eventListener.removeListener('BACKSPACE');
      eventListener.removeListener('ENTER');
    };
  }, [eventListener, handleBackspace, handleCharacterClick, handleEnter]);

  return (
    <Container>
      {word.map((char: string, index: number) => (
        <CharField key={index} onClick={selectCharHandler(index)} isSelected={selectedCharIndex === index}>
          <H2 style={{ color: colors.common.black }}> {char}</H2>
        </CharField>
      ))}
    </Container>
  );
};

export default CharFields;
