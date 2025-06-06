import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';

interface H2Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Text = styled('div')({
  fontSize: 28,
  color: 'white',
});

const H2 = forwardRef<HTMLDivElement, H2Props>(({ style, children }, ref) => {
  return (
    <Text ref={ref} style={style}>
      {children}
    </Text>
  );
});

export default H2;
