import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
  :root {
     --measure: 60ch;
     font-family: 'Poppins', sans-serif;
     font-size:  clamp(1.3rem,1.4vw,2.3rem);
     box-sizing: border-box;
     letter-spacing: 0.1em;
  }

  body {
    padding: 2rem 3rem !important; // Einheitlicher Abstand, der nicht überschrieben werden kann
    
    @media (min-width: 768px) {
      margin: 0 auto !important;
      max-width: 1200px;
    }
  }

  html:focus-within {
    scroll-behavior: smooth;
  }
`;

export default GlobalStyles;
