import React from 'react';
import { colors, styled } from '@mui/material';

import H2 from '../styledComponents/H2';
import { useAppContext } from '../providers/AppProvider';

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
  const { selectedCharIndex, setSelectedCharIndex, word } = useAppContext();

  const selectCharHandler = (index: number) => () => setSelectedCharIndex(index);

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
