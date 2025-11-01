import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  height: 65vh;
  background: linear-gradient(to top, var(--background), transparent);

  h2 {
    font-size: var(--font-Size-Subtitle);
  }
  `;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;

li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  background: var(--background-card);
  width: 20vw;
  height: 25vh;
  border-radius: 15px;

  svg {
    color: var(--primary-color);
    width: 2rem;
    height: 2rem;
  }

  p {
    font-weight: 500;
    font-size: 1.1rem;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-body);
  }
}

`;