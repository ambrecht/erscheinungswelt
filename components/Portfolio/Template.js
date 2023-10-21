// LOGIK
// Bei Bedarf Logik hinzufügen.

// MARKUP
export default function PortfolioTemplate({ title, description, details }) {
  return (
    <Wrapper>
      <Sidebar>
        <MenuIcon>|||</MenuIcon>
        {/* Hier können Sie weitere Navigationslinks oder -elemente hinzufügen. */}
      </Sidebar>
      <MainContent>
        <LogoArea>{/* Hier können Sie Ihr Logo einfügen. */}</LogoArea>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Details>{details}</Details>
      </MainContent>
    </Wrapper>
  );
}

// STYLE
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  background-color: #000;
  color: #fff;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 5%;
  padding: 2% 0;
  background-color: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuIcon = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const MainContent = styled.div`
  width: 95%;
  padding: 5% 10%;
`;

const LogoArea = styled.div`
  margin-bottom: 5rem;
  /* Fügen Sie hier Ihren Logo-Stil hinzu. */
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 3rem;
  line-height: 1.5;
`;

const Details = styled.div`
  font-size: 0.9rem;
`;

// Dies ist nur ein einfaches Template basierend auf der bereitgestellten UI. Sie können es entsprechend anpassen.
