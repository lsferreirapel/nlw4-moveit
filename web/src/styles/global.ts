import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    /* Default colors setup */

    --blue-light: #5965E0;
    --blue-dark: #4953B8;
    --green: #4CD62B;
    --red: #E83F5B;
    --blue-text: #B2B9FF;
    --title: #2E384D;
    --text: #666666;
    --gray-line: #DCDDE0;
    --background: #F2F3F5; 
  }
  
  /* CSS RESET */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
  }

  body, input, textarea, button {
    font: 400 16px "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;