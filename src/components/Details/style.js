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

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 0;
    gap: 2rem;

    h2 {
      font-size: var(--font-Size-Heading);
    }
  }
  `;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  overflow-x: auto;
  gap: 1.5rem;
  padding: 1rem;
  scroll-behavior: smooth;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--background);
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 4px;
  }

li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  background: var(--background-card);
  min-width: 20vw;
  height: 25vh;
  border-radius: 15px;
  flex-shrink: 0;

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

  @media (max-width: 768px) {
    gap: 1rem;

    li {
      min-width: 60vw;
      height: auto;
      padding: 1.2rem 0;

      h4 {
        font-size: 1rem;
      }
    }
  }
`;