import React from 'react';
import { styled } from '@mui/material/styles';

import { colors } from '@mui/material';
import H1 from '../styledComponents/H1';

const Container = styled('div')({
  textAlign: 'center',
});

const titleStyle = {
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: 'Audiowide',
  color: colors.common.black,
};

const Header: React.FC = () => {
  return (
    <Container>
      <H1 style={titleStyle}>Sentrycs</H1>
    </Container>
  );
};

export default Header;
