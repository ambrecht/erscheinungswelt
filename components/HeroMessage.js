import styled, { css } from 'styled-components';

import TextAnimation from './TextAnimation';

//MARKUP
export default function MARKUP({className} ) {

  return (
    <HeroContainer className={className}>
      <HeroH1 >
        hier werden Ihre Produkte zum digitalen{' '}
        <TextAnimation>Erfolg Erlebnis Eindruck</TextAnimation>
      </HeroH1>

      
    </HeroContainer>
  );
}

//STYLE

const HeroH1 = styled.h1`
  
  font-weight: 800;
  margin: 0;
  color: white;
  text-align: left;
font-size: 5rem;
  text-transform: lowercase;
 
  


`;

const HeroP = styled.h4`
  margin-top: 8vh;
  width: 100%;
  color: white;
  letter-spacing: 0.008em;
  font-size: 1rem;

  text-align: center;
  z-index: 10;
  font-weight: 100;
  text-transform: lowercase;

  @media only screen and (max-height: 700px) {
    font-size: 5vh;
    font-weight: 200;
    width: 61.8vw;
  }
`;

const HeroContainer = styled.div`

`;
