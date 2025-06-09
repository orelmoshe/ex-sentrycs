import React from 'react';
import ButtonMUI from '@mui/material/Button';
import { colors, styled } from '@mui/material';

import EventListener from '../utils/eventListener';

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
  const eventListener = EventListener.getInstance();

  const handleDelete = () => eventListener.emit('BACKSPACE');

  const handleEnter = () => eventListener.emit('ENTER');

  return (
    <Container>
      <Button onClick={handleDelete}>Delete</Button>
      <Button onClick={handleEnter}>Enter</Button>
    </Container>
  );
};

export default WordCheckerActions;
