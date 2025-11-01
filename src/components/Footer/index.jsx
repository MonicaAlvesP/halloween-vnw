import { Facebook, Instagram, Twitter } from "lucide-react";
import { Container, SocialLinks } from "./style";


export default function Footer() {
  return (
    <Container>
      <h4>Dúvidas? Entre em contato conosco:</h4>
      <SocialLinks>
        <li><Instagram /></li>
        <li><Facebook /></li>
        <li><Twitter /></li>
      </SocialLinks>
      <p>🎃 Halloween Party 2025 | Prepare-se para o terror! 🎃</p>
    </Container>
  );
}
