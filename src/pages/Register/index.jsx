import { TextField } from '@material-ui/core'
import { Container, Content, Background, NewButton } from './styles'
import { Link, useHistory, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import api from '../../services/api'
import { toast } from 'react-toastify'

const Register = () => {

    const history = useHistory()
    
    const schema = yup.object().shape({
        name: yup.string().matches(/^[a-zA-Z]+$/, "Apenas letras").required("Campo obrigatório"),
        email: yup.string().email("Email inválido").required("Campo obrigatório"),
        password: yup.string().min(8, "Mínimo 8 letras, um número e um símbolo especial").required("Campo obrigatório"),
        bio: yup.string().required("Campo obrigatório"),
        contact: yup.string().required("Campo obrigatório"),
        course_module: yup.string().required("Campo obrigatório")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    
    const toSubmit = (user) => {
        api.post('/users', user).then((_) => {
            toast.success("Sucesso ao criar a conta")
            return history.push("/login")
        }).catch((err) => toast.error("Erro ao criar a conta"))
    }


    return <Container>
        <Background/>
        <Content>
            <form onSubmit={handleSubmit(toSubmit)}>
                <h1>Faça seu registro</h1>
                <TextField 
                label="Nome" 
                variant="outlined"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}/>
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
                <TextField 
                label="Bio" 
                variant="outlined"
                {...register("bio")}
                error={!!errors.bio}
                helperText={errors.bio?.message}/>
                <TextField 
                label="Contato" 
                variant="outlined"
                {...register("contact")}
                error={!!errors.contact}
                helperText={errors.contact?.message}/>
                <TextField 
                label="Módulo" 
                variant="outlined"
                {...register("course_module")}
                error={!!errors.module}
                helperText={errors.course_module?.message}/>
                <NewButton type="submit">Registrar</NewButton>
                <p>Já possui conta? <Link to='/login'>Entrar</Link></p>
            </form>
        </Content>
    </Container>
}

export default Register