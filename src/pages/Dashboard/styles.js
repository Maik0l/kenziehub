import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        color: var(--darkblue)
    }
`

export const Content = styled.div`
    display: flex;
    margin-top: 3rem;
`

export const NewButton = styled(Button)`
    && {
        border: 1px solid var(--blue);
        margin-left: 1rem;
    }
`

export const TechsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 30rem;
`