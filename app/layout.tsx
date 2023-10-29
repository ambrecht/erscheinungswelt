import ClientWrapper from '@/components/ClientWrapper'
import Navigation from '@/components/Navigation'
import { Poppins } from 'next/font/google'
 
const popp = Poppins(
  {weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
  style: 'normal',
  display: 'swap',
});

import StyledComponentsRegistry from './registry'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={popp.className}>
      <head />
      <body >
        <StyledComponentsRegistry>
        <Navigation ></Navigation>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}