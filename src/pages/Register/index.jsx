import { TextField } from '@material-ui/core'
import { Container, Content, Background, NewButton } from './styles'
import { Link, useHistory, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'

const Register = () => {
    return <Container>
        <Background/>
        <Content>
            <form>
                <h1>Faça seu registro</h1>
                <TextField 
                label="Nome" 
                variant="outlined"/>
                <TextField 
                label="Email" 
                variant="outlined"/>
                <TextField 
                label="Senha" 
                variant="outlined"/>
                <TextField 
                label="Bio" 
                variant="outlined"/>
                <TextField 
                label="Contato" 
                variant="outlined"/>
                <TextField 
                label="Módulo" 
                variant="outlined"/>
                <NewButton>Registrar</NewButton>
                <p>Já possui conta? <Link to='/login'>Entrar</Link></p>
            </form>
        </Content>
    </Container>
}

export default Register