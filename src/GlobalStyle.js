import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --background-color: #121214;
  --background-color-inspiration: #402659;
  --background-card: #211E1C;
  --primary-color: #F06E42;
  --secondary-color: #732EB8;
  --text-body: #E1E1E6;
  --paragraph-color: #BEB4A7;
  --gradient-color: linear-gradient(180deg, #F06E42 0%, #732EB8 100%);

  ${'' /* tamanhos de Fonte */}
  --font-Size-Title: 8rem;
  --font-Size-Subtitle: 4rem;
  --font-Size-Heading: 2rem;
  --font-Size-Body: 1.5rem;
}

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  }

  body {
  background: var(--background-color);
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
  font-family: 'Inter', sans-serif;
  }


  h1, h2 {
  font-family: 'Creepster', cursive;
  font-weight: 400;
  background: var(--gradient-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  }

  h3, h4, h5, h6 {
  color: var(--text-body);
  }

  p, span, a, li {
  color: var(--paragraph-color);
  font-size: 1rem;
  }

  button {
  cursor: pointer;
  background: var(--primary-color);
  color: var(--text-color);
  border: none;
  border-radius: 10px;
  padding: 0.70rem 2rem;
  transition: background 0.3s ease;

  &:hover {
    background: var(--secondary-color);
  }
  }
  `