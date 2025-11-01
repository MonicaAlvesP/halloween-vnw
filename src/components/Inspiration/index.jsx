import vampire from '../../assets/icons/vampire.png';
import witch from '../../assets/icons/witch.png';
import ghost from '../../assets/icons/ghost.png';
import jason from '../../assets/icons/jason.png';
import pennywise from '../../assets/icons/pennywise.png';
import wolf from '../../assets/icons/wolf.png';
import Champion from '../../assets/icons/champion.png';
import { Box, Container, List } from './style';

export default function Inspiration() {

  const fantasy = [
    { icon: vampire, name: "Vampiro", description: "Clássico e Elegante" },
    { icon: witch, name: "Bruxa", description: "Misteriosa e Poderosa" },
    { icon: ghost, name: "Fantasma", description: "Assustador e Etereo" },
    { icon: jason, name: "Jason", description: "Icônico e Aterrorizante" },
    { icon: pennywise, name: "Pennywise", description: "Divertido e Sinistro" },
    { icon: wolf, name: "Lobisomem", description: "Selvagem e Feroz" },
  ]

  return (
    <Container>
      <h2>INSPIRAÇÕES DE FANTASIAS</h2>
      <p>Solte sua criatividade e venha caracterizado! Aqui estão algumas ideias para você arrasar na festa.</p>
      <List>
        {fantasy.map((item, index) => (
          <li key={index}>
            <img src={item.icon} alt={item.name} />
            <h4>{item.name}</h4>
            <span>{item.description}</span>
          </li>
        ))}
      </List>
      <Box>
        <h3>
          <img src={Champion} alt="Imagem ilustrativa da medalha de primeiro lugar na competição" />
          Concurso de Fantasias!
        </h3>
        <span>Melhor fantasia ganha um prêmio especial! Prepare-se para competir.</span>
        <button>
          📸 ENVIAR MINHA FANTASIA
        </button>
      </Box>
    </Container>
  )
}