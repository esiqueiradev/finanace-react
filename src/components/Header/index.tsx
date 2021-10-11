import logoImage from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoImage} alt="" />
        </div>
        <button type="button">
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}