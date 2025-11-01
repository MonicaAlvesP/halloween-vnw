import styled from "styled-components";
import backgroundImage from "../../assets/img/background-header.png";

export const Container = styled.header`
  width: 100%;
  height: 130vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-image: linear-gradient(to bottom, rgba(30, 0, 30, 0.2), rgba(0, 0, 0, 0.8)), url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  h1 {
    font-size: var(--font-Size-Title);
  }

  h3 {
    font-size: var(--font-Size-Heading);
    letter-spacing: 0.9rem;
  }

  p {
    font-size: var(--font-Size-Heading);
    font-weight: 200;
  }

  @media (max-width: 768px) {
      h1 {
        font-size: var(--font-Size-Subtitle);
      }

      h3 {
        font-size: var(--font-Size-Body);
        letter-spacing: 0.5rem;
      }

      p {
        font-size: 1rem;
        text-align: center;
      }
  }
`

export const Actions = styled.section`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;

    button {
      padding: 0.4rem 1rem;
    }
  }
`