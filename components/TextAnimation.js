import React from 'react';
import styled, { keyframes } from 'styled-components';
import Typewriter from 'typewriter-effect';
import { TextGradient, MediaWidth, ButtonGradient } from '../Mixins/Mixins';

export default function TextAnimation(props) {
  return (
    <Wrapper>
      <StyledTypewriter
        options={{
          strings: props.children.split(' '),
          pauseFor: 10000,
          autoStart: true,
          loop: true,
          cursor: '',
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.span`
  display: inline-block;
  ${TextGradient};
`;

const StyledTypewriter = styled(Typewriter)`
display: inline-block;
`
