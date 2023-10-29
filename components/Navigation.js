'use client'
import styled from 'styled-components';
import Link from 'next/link';
import Logo from './Logo';
import ContactButton from './ContactButton';

// Navigation Item component
const NavItem = ({ href, label }) => (
  <StyledLi>
    <Link href={href} passHref>
      {label}
    </Link>
  </StyledLi>
);

const Navigation = () => {
  return (
    <NavContainer>
      <Grid>
      <Logo />
      <NavList>
        <NavItem href="/mission" label="Vision" />
        <NavItem href="/prozess" label="Prozess" />
        <NavItem href="/arbeit" label="Werkstatt" />
      </NavList>
      <Gridelement>
      <Link href="/contact" passHref>
        <ContactButton fontsize={1.8}>kontakt</ContactButton>
      </Link>
      </Gridelement>
      </Grid>
    </NavContainer>
  );
};

const NavContainer = styled.header`
  padding-top: 3.5rem;
  opacity: 1;
  mix-blend-mode: difference;
  color: var(--dark);
  width: 100%;
  z-index: 999;
  top: 0;
  left: 0;
  position: fixed;

  a {
    text-decoration: none;
    list-style-type: none;
    color: ${({ theme }) => theme.colors.text};
    text-transform: lowercase;
  }

  a > span:hover {
    border-bottom: 0.2em solid white;
    transition-property: all;
    transition-duration: 0.2s;
  }

  

  
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  padding-left: 5.8rem;
  padding-right: 5.8rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;  // Vertikale Ausrichtung

  `

const NavList = styled.ul`
   grid-column: 5 / span 4;  // Zentrierte Positionierung im Grid
  display: flex;
  gap: 6rem;  // Ein konstanter Abstand, aber natürlich anpassbar
  list-style: none;
  margin: 0;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
`;

const StyledLi = styled.li`
  a {
    text-decoration: none;
    transition: border-bottom 0.2s ease-in-out;
    padding: 0.2em 0; // padding to make border transition smooth

    &:hover {
      border-bottom: 2px solid currentColor;
    }
  }
`;
const Gridelement = styled.div`
 grid-column: 11/auto;
`

export default Navigation;
