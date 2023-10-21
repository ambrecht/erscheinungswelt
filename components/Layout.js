import styled from 'styled-components';
import Head from 'next/head';

const Container = styled.div`
  background-color: #f3f4f6;
  min-height: 100vh;
  color: #4b5563;
`;

const Header = styled.header`
  border-bottom: 1px solid #e5e7eb;
  background-color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 1rem;
`;

const Main = styled.main`
  max-width: 1000px;
  margin: auto;
  padding: 3rem 1rem;
  text-align: center;
`;

const ServiceSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 3rem;
`;

const DualSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-bottom: 3rem;
`;

const Footer = styled.footer`
  padding: 2rem;
  text-align: center;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header>{/* Insert Header Content Component here */}</Header>
      <Main>{children}</Main>
      <Footer>{/* Insert Footer Content Component here */}</Footer>
    </>
  );
}
