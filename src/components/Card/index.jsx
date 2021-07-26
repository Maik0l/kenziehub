import { Container } from './styles'

const Card = ( {title, status, handleRemove, id} ) => {
    return (
        <Container>
            <div>{title}</div>
            <div>{status}</div>
            <div><button onClick={() => handleRemove(id)}>Remover</button></div>
        </Container>
    )
}

export default Card

