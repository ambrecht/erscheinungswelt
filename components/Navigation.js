import styled from 'styled-components';
import Link from 'next/link';
import Logo from './Logo';
import ContactButton from './ContactButton';
import Burger from '../components/Burger/Index';
import { useWindowSize } from 'web-api-hooks';

// Navigation Item component
const NavItem = ({ href, label }) => (
  <StyledLi>
    <Link href={href} passHref>
      {label}
    </Link>
  </StyledLi>
);

const Navigation = () => {
  const [windowWidth] = useWindowSize();

  return windowWidth <= 800 ? (
    <MobileNav>
      <Logo />
      <Burger />
    </MobileNav>
  ) : (
    <NavContainer>
      <Logo />
      <NavList>
        <NavItem href="/mission" label="Vision" />
        <NavItem href="/prozess" label="Prozess" />
        <NavItem href="/arbeit" label="Werkstatt" />
      </NavList>
      <div className="contact-container">
        <Link href="/contact" passHref>
          
            <ContactButton>kontakt</ContactButton>
          
        </Link>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;

  @media (max-width: 1300px) {
    gap: 5%;
    font-size: 0.9em;
  }

  a {
    display: block;
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
  & .logo-container {
    margin-right: auto;

    a {
      padding: 0;
      width: 10em;
    }

    @media (max-height: 600px) {
      font-size: 0.9em;
    }
  }

  .contact-container {
    margin-left: auto;
    font-size: 0.7em;
    a {
      padding: 0;
    }
    @media (max-height: 600px) {
      font-size: 0.7em;
    }
  }
`;

const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavList = styled.ul`
  width: 100%;
  display: flex;
  gap: 20%;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  font-size: 2vh;
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

export default Navigation;
