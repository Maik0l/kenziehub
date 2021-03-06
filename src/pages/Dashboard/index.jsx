import { Redirect } from 'react-router-dom'
import { Container, Content, NewButton, LogoutButton , TechsContainer, InputContent } from './styles'
import { TextField } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import api from '../../services/api'
import { toast } from 'react-toastify'
import Card from '../../components/Card'

const Dashboard = ( {authentic, setAuthentic} ) => {

    const { register, handleSubmit} = useForm();
    const [token] = useState(JSON.parse(localStorage.getItem("@Kenziehub:token")) || "")
    const [userId] = useState(JSON.parse(localStorage.getItem('@Kenziehub:id')) || "")
    const [userTechs, setUserTechs] = useState([])

    const loadTechs = () => {
        api.get(`/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((response) => {
            setUserTechs(response.data.techs)
        })
    }

    const toSubmitTech = ( {title, status} ) => {
        api.post("/users/techs/", 
        {
            title: title,
            status: status,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        },
        ).then((_) => {
            toast.success("Tecnologia cadastrada!")
            loadTechs()
        }).catch((err) => toast.error("Erro ao cadastrar"))
    }

    const handleRemove = (idTech) => {
        api.delete(`users/techs/${idTech}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        },
        ).catch((err) => console.log(err))
    }

    const handleLogout = () => {
        localStorage.clear()
        setAuthentic(false)
    }

    // useEffect(() => {
    //     loadTechs()
    // }, [loadTechs])


    console.log(userTechs)

    if (!authentic) {
        return <Redirect to="/login"/>
    }
    

    return <Container>
        <h1><span>KenzieHub</span> | Dashboard</h1>
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
        <p>Adicione ou exclua tecnologias que voc?? j?? conhece!</p>
        <Content>
            <InputContent>
                <form onSubmit={handleSubmit(toSubmitTech)}>
                    <TextField label="Nome da tecnologia"
                    {...register("title")}/>
                    <TextField label="N??vel"
                    {...register("status")}/>
                    <div>
                    <NewButton type="submit">Adicionar</NewButton>
                    </div>
                </form>
            </InputContent>
        </Content>
        <TechsContainer>
            {userTechs.map((item) => <Card
            title={item.title}
            status={item.status}
            id={item.id}
            handleRemove={handleRemove}
            />)}
        </TechsContainer>
    </Container>
}

export default Dashboard