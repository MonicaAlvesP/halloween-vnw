import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-color);
  color: var(--text-body);
  margin-bottom: 4rem;

  p {
    margin-top: 1rem;
    font-size: var(--font-Size-Body);
  }

  @media (max-width: 600px) {
    padding: 1rem;

    p {
      font-size: 0.6rem;
    }
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 1rem 0;

    li > svg {
      color: var(--primary-color);
      width: 24px;
      height: 24px;
      transition: color 0.3s;

      &:hover {
        color: var(--secondary-color);
      }
    }
`;