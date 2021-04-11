import logoImg from '../../assets/logo.svg'
import { Content, Container } from './style'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money"/>
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}