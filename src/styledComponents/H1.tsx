import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';

interface H1Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Text = styled('div')({
  fontSize: 36,
  color: 'white',
});

const H1 = forwardRef<HTMLDivElement, H1Props>(({ style, children }, ref) => {
  return (
    <Text ref={ref} style={style}>
      {children}
    </Text>
  );
});

export default H1;
