import { Container } from './styles'

const StyledButton = ( { children, ...rest } ) => {
    return <Container type="button" {...rest}>
        {children}
        </Container>
}

export default StyledButton