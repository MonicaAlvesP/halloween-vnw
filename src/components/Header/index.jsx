import { Container, Actions } from "./style";

export default function Header() {
  return (
    <Container>
      <h1>HALLOWEEN</h1>
      <h3>PARTY 2025</h3>
      <p>Prepare-se para a noite mais assombrada do ano!</p>
      <Actions>
        <button>🎭 CONFIRMAR PRESENÇA</button>
        <button>👻 VER DETALHES</button>
      </Actions>
    </Container>
  )
}