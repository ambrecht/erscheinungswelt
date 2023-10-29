import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '../public/logo.svg'; // Replace with the actual path to your logo image

export default function Logo() {
  return (
    <Wrapper>
     
        <Link href="/" passHref>
          <StyledImage
            src={LogoImage}
            alt="Logo"
    
            

            
     
          />
        </Link>
        
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
grid-column: span 2/span 2;



`


const StyledImage = styled(Image)`
  display: block;
 object-fit: contain;
 min-height: 5rem;
  
`


    
    
  


