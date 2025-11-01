import { User, Mail, Users, MessageCircleMore, Shirt } from "lucide-react";
import { Container, FormField, FormGroup, FormInput, FormLabel, FormSelect } from "./style";

export default function FormSubmit() {
  return (
    <Container>
      <h2>Confirme sua Presença</h2>
      <p>Não perca a festa mais assustadora do ano! Confirme já sua presença.</p>
      <FormField action="">
        <FormGroup>
          <FormLabel htmlFor="name">
            <User />
            Nome Completo *
          </FormLabel>
          <FormInput type="text" id="name" name="name" placeholder="Seu nome assombrado..." />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="email">
            <Mail />
            E-mail *
          </FormLabel>
          <FormInput type="email" id="email" name="email" placeholder="seu@email.com" />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="guests">
            <Users />
            Número de Acompanhantes *
          </FormLabel>
          <FormSelect id="guests" name="guests" defaultValue="">
            <option value="" disabled>
              Selecione o número de acompanhantes
            </option>
            <option value="0">(Apenas eu)</option>
            <option value="1">1 Acompanhante</option>
            <option value="2">2 Acompanhantes</option>
            <option value="3">3 Acompanhantes</option>
            <option value="4">4 Acompanhantes</option>
          </FormSelect>
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="text">
            <Shirt />
            Sua Fantasia
          </FormLabel>
          <FormInput type="text" id="text" name="text" placeholder="Descreva sua fantasia..." />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="message">
            <MessageCircleMore />
            Mensagem (Opcional)
          </FormLabel>
          <FormInput
            as="textarea"
            id="message"
            name="message"
            rows="4"
            placeholder="Deixe uma mensagem assustadora..."
          />
        </FormGroup>
        <button type="submit">🎃 CONFIRMAR PRESENÇA AGORA 🎃</button>
      </FormField>
    </Container>
  )
}