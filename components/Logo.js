import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '../public/logo.svg'; // Replace with the actual path to your logo image

//MARKUP
export default function Logo() {
  return (
    <Wrapper>
      <div className="logo-container">
        <Link href="/" passHref>
          
            <Image
              src={LogoImage}
              alt="Logo"
              width={200} // You can set a fixed width and height based on your design requirements
              height={50}
              layout="responsive" // This prop will maintain the aspect ratio of the image
            />
          
        </Link>
      </div>
    </Wrapper>
  );
}

//STYLE
const Wrapper = styled.div`
  .logo-container {
    width: 100%; // This will allow the container to take the full width of its parent element
    max-width: 160px; // This will ensure that the logo does not grow beyond a certain size
    height: auto;
  }
`;
