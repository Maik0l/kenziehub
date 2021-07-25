import { Container } from './styles'

const Card = ( {title, status} ) => {
    return (
        <Container>
            <div>{title}</div>
            <div>{status}</div>
        </Container>
    )
}

export default Card

