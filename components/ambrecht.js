import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const ambrecht = () => {
  return (
    <Container>
      <Link aria-hidden="true" role="img">
        <Image src={'/logo.svg'} alt="Logo" width={333} height={333} />
      </Link>
    </Container>
  );
};

export default ambrecht;

const Container = styled.div`
  margin: 0 auto;
  padding-top: 50%;
  pointer-events: none;
`;
