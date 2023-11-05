// NewsChannel.js
import React, { useEffect, useState } from 'react';
import {
  NewsHeader,
  NewsContent,
  Ticker,
  TickerWrapper,
  TickerItem,
  NewsFooter,
  FooterLeft,
  FooterRight,
  MarketData,
  DataItem,
  DataValue,
} from './styles';

const NewsTicker = () => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    // Initialize the ticker and market data
    fetchMarketData();
    // Set an interval for updating market data every 5 seconds
    const interval = setInterval(fetchMarketData, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchMarketData = () => {
    // Simulate fetching data here
    const data = [
      // ... fetch or generate data
    ];
    setMarketData(data);
  };

  const newsItems = [
    // ... your news items
  ];

  return (
    <>
      <NewsHeader>
        <NewsContent>
          MARKET RALLY - S&P 500, NASDAQ UP IN 6 OF PAST 8 DAYS
        </NewsContent>
      </NewsHeader>
      <Ticker>
        <TickerWrapper>
          {newsItems.map((item, index) => (
            <TickerItem key={index}>{item}</TickerItem>
          ))}
        </TickerWrapper>
      </Ticker>
      <NewsFooter>
        <FooterLeft>CNBC 11:08a | LONDON</FooterLeft>
        <FooterRight>
          <MarketData>
            {marketData.map((data, index) => (
              <DataItem key={index}>
                {data.name}{' '}
                <DataValue isUp={data.value > 0}>
                  {data.value > 0 ? `+${data.value}` : data.value}%
                </DataValue>
              </DataItem>
            ))}
          </MarketData>
        </FooterRight>
      </NewsFooter>
    </>
  );
};

export default NewsTicker;
