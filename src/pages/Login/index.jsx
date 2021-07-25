import { TextField } from '@material-ui/core'
import { Container, Content, Background, NewButton } from './styles'
import { Link, useHistory, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import api from '../../services/api'

const Login = () => {
    
    const history = useHistory()
    
    const schema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Campo obrigatório"),
        password: yup.string().min(8, "Mínimo 8 letras, um número e um símbolo especial").required("Campo obrigatório"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    
    const toSubmit = ( {email, password} ) => {
        const user = {email, password}
        console.log(user)
        api.post('/sessions', user).then((response) => {
            const { token } = response.data

            localStorage.setItem("@Kenziehub", JSON.stringify(token))

            return history.push("/dashboard")
        }).catch((err) => toast.error("Email ou senha inválidos"))
    }


    return <Container>
        <Content>
            <form onSubmit={handleSubmit(toSubmit)}>
                <h1>Faça seu login</h1>
                <TextField 
                label="Email" 
                variant="outlined"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}/>
                <TextField 
                label="Senha" 
                variant="outlined"
                {...register("password")}
                type="password"
                error={!!errors.password}
                helperText={errors.password?.message}/>
                <NewButton type="submit">Registrar</NewButton>
                <p>Ainda não possui conta? <Link to='/register'>Registrar</Link></p>
            </form>
        </Content>
        <Background/>
    </Container>
}

export default Login