import { Container, Content} from './styles'
import StyledButton from '../../components/Button'
import { useHistory } from 'react-router-dom'

const Home = () => {
    
    const history = useHistory();

    const handlePath = (path) => {
        history.push(path)
    }
    
    return <Container>
            <Content>
                <h1>KenzieHub</h1>
                <h2>bem-vindo ao portfólios de programadores da Kenzie!</h2>
                <StyledButton onClick={() => handlePath('/login')}>Login</StyledButton>
                <StyledButton onClick={() => handlePath('/register')}>Registro</StyledButton>
            </Content>
                <span>developed by maikol at kenzie academy © q2</span>
        </Container>
}

export default Home