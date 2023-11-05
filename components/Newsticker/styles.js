// StyledComponents.js
import styled, { keyframes } from 'styled-components';

export const NewsHeader = styled.header`
  color: white;
  font-size: 20px;
  padding: 0.5rem;
  background: #0e7e45;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewsContent = styled.div`
  margin-left: 1rem;
`;

export const Ticker = styled.main`
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 18px;
  padding: 0.5rem;
  overflow: hidden;
`;

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const TickerWrapper = styled.div`
  display: flex;
  animation: ${scroll} 30s linear infinite;
`;

export const TickerItem = styled.div`
  white-space: nowrap;
  padding-right: 2rem;
`;

export const NewsFooter = styled.footer`
  background: #323232;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterRight = styled(FooterLeft)`
  /* Inherits styles from FooterLeft */
`;

export const MarketData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.5rem;
  background-color: #262626;
  border-radius: 4px;
`;

export const DataItem = styled.div`
  margin-right: 1rem;
  font-size: 16px;
`;

export const DataValue = styled.span`
  font-weight: bold;
  color: ${(props) => (props.isUp ? '#0f9d58' : '#ff4c4c')};
`;
