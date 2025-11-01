import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--background-color-inspiration);
  height: auto;
  gap: 5rem;

  h2 {
    font-size: var(--font-Size-Subtitle);
    margin-top: 3rem;
  }

  p {
    font-size: var(--font-Size-Body);
    width: 50%;
    text-align: center;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: var(--font-Size-Heading);
    }

    p {
      width: 80%;
      font-size: 1rem;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--background-card);
    height: 25vh;
    width: 12vw;
    border-radius: 10px;
    gap: 1rem;

    img {
      width: 4rem;
    }
  }

  @media (max-width: 768px) {
    height: 90vh;
    gap: 1rem;

    li {
      width: 40vw;
      
      span {
        font-size: 0.6rem;
        text-align: center;
      }
    }
  }
`;

export const Box = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  height: 38vh;
  width: 95%;
  border-radius: 10px;
  gap: 2rem;
  margin-bottom: 3rem;

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: var(--font-Size-Heading);
    color: var(--primary-color);

    img {
      width: 3rem;
    }
  }
  
  span {
    font-size: var(--font-Size-Body);
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 1rem;
    align-items: center;

    h3 {
      font-size: 1.3rem;

      img {
        width: 2rem;
      }
    }

    span {
      font-size: 0.9rem;
      text-align: center;
    }
  }
`;