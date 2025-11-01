import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h2 {
    font-size: var(--font-Size-Subtitle);
    margin-top: 4rem;
  }

  p {
    font-size: var(--font-Size-Body);
    margin: 2rem 0;
  }

  @media (max-width: 768px) {
    width: 100%;

    h2 {
      font-size: var(--font-Size-Heading);
    }

    p {
      font-size: 1rem;
      text-align: center;
    }
  }
`;

export const FormField = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin-top: 2rem;
  gap: 2rem;
  background-color: rgba(33, 30, 28, 0.8);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    width: 90%;

    button {
      font-size: 0.6rem;
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--font-size-body);
  color: var(--text-body);

  svg {
    stroke: var(--primary-color);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const FormInput = styled.input`
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  font-size: var(--font-size-body);
  background-color: var(--background-color);
  outline: none;
  color: var(--text-body);

  &::placeholder {
    color: var(--paragraph-color);
  }
`;

export const FormSelect = styled.select`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  font-size: var(--font-size-body);
  background-color: var(--background-color);
  outline: none;
  color: var(--text-body);

  option {
    color: var(--text-body);
    background-color: var(--background-color);
  }
`;