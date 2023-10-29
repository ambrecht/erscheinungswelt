import styled from 'styled-components';
import { TextGradient, MediaWidth, ButtonGradient } from '../Mixins/Mixins';

//LOGIC

//MARKUP
export default function ContactButton({ children, fontsize }) {
  console.log(fontsize)
  return (
    <Button size={fontsize}>
      <span>
        <Text>{children}</Text>
      </span>
    </Button>
  );
}

//STYLE

const Text = styled.span`
  ${TextGradient}
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0.1rem;
  text-transform: lowercase;
`;
const Button = styled.button`
  cursor: inherit;
  font-size: ${(props) => `${props.size}rem`};
  padding: 1rem 1rem;
  border-radius: 3rem;
  border: solid 0.2rem transparent;
  ${ButtonGradient};

  &:hover {
    box-shadow: none;
    ${Text} {
      color: white;
    }
  }
`;
