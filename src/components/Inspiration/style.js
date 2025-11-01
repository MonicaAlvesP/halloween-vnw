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
`;