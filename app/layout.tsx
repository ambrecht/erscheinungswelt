//workspaces/ambrecht2023/app/layout.tsx
'use client'
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { Footer } from '@/components/Footer';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle, theme } from '@/styles';
import Navigation from  '@/components/Navigation'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head />
      <body>
        
          <RecoilRoot>
            <StyledComponentsRegistry>
              <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Navigation></Navigation>
                {children}
                <Footer />
              </ThemeProvider>
            </StyledComponentsRegistry>
          </RecoilRoot>
       
      </body>
    </html>
  );
};

export default RootLayout;


