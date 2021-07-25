import { TextField } from '@material-ui/core'
import { Container, Content, Background, NewButton } from './styles'
import { Link, useHistory, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'

const Login = () => {
    return <Container>
        <Content>
            <form>
                <h1>Login</h1>
                <TextField 
                label="Email" 
                variant="outlined"/>
                <TextField 
                label="Senha" 
                variant="outlined"/>
                <NewButton>Entrar</NewButton>
                <p>Ainda não possui conta? <Link to='/register'>Registrar</Link></p>
            </form>
        </Content>
        <Background/>
    </Container>
}

export default Login