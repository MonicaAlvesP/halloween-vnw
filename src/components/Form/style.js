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
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
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

export const SocialLinks = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 4rem;
  
  p {
    font-size: var(--font-Size-Body);
  }

  ul {
    display: flex;
    gap: 1.5rem;
  }

  svg {
    stroke: var(--primary-color);
    width: 2rem;
    height: 2rem;

    &:hover {
      stroke: var(--secondary-color);
    }
  }
`;