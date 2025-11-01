import { Calendar, Clock, MapPin, Users, } from "lucide-react";
import { Container, List } from "./style"

export default function Details() {

  const event = [
    { icon: <Calendar />, title: "Data", info_detail: "31 de Outubro de 2025", description: "Sexta-Feira" },
    { icon: <Clock />, title: "Horário", info_detail: "20:00 - 02:00", description: "6 horas de Terror" },
    { icon: <MapPin />, title: "Local", info_detail: "Casa Assombrada", description: "Rua do Medo, 666" },
    { icon: <Users />, title: "Dress Code", info_detail: "Fantasias", description: "Obrigatório!" },
  ]

  return (
    <Container>
      <h2>DETALHES DO EVENTO</h2>
      <List>
        {event.map((item, index) => (
          <li key={index}>
            {item.icon}
            <p>{item.title}</p>
            <h4>{item.info_detail}</h4>
            <span>{item.description}</span>
          </li>
        ))}
      </List>
    </Container>
  );
}