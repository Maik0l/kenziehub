import { TextField } from '@material-ui/core'
import { Container, Content, Background, NewButton } from './styles'
import { Link, useHistory, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import api from '../../services/api'

const Login = ( {authentic, setAuthentic} ) => {
    
    const history = useHistory()
    
    const schema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Campo obrigatório"),
        password: yup.string().min(8, "Mínimo 8 letras, um número e um símbolo especial").required("Campo obrigatório"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    
    const toSubmit = ( {email, password } ) => {
        const user = {email, password}

        api.post('/sessions', user).then((response) => {
            const { token } = response.data;
            const { id } = response.data.user;

            localStorage.setItem("@Kenziehub:token", JSON.stringify(token))
            localStorage.setItem("@Kenziehub:id", JSON.stringify(id))

            setAuthentic(true)

            return history.push("/dashboard")
        }).catch((err) => toast.error("Email ou senha inválidos"))
    }

    if (authentic) {
        return <Redirect to="/dashboard"/>
    }


    return <Container>
        <Content>
            <form onSubmit={handleSubmit(toSubmit)}>
                <h1>Faça seu login</h1>
                <TextField 
                label="Email" 
                variant="filled"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}/>
                <TextField 
                label="Senha" 
                variant="filled"
                {...register("password")}
                type="password"
                error={!!errors.password}
                helperText={errors.password?.message}/>
                <NewButton type="submit">Login</NewButton>
                <p>Ainda não possui conta? <Link to='/register'>Entrar</Link></p>
            </form>
        </Content>
        <Background/>
    </Container>
}

export default Login