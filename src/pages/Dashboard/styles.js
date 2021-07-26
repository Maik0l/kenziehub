import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        color: var(--darkblue);
    }

`

export const Content = styled.div`
    display: flex;
    margin-top: 3rem;
`

export const NewButton = styled(Button)`
    && {
        border: 1px solid var(--blue);
        margin: 1rem 0rem 0rem 1rem;
    }
`

export const InputContent = styled.div`
    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
    }
`

export const TechsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    max-width: 50rem;
`

export const LogoutButton = styled(Button)`
    && {
        background-color: var(--blue);
        border: 1px solid var(--white);
        margin: 1rem 0rem 0rem 1rem;
        position: absolute;
        right: 5px;
    }

        &&:hover {
            background-color: white;
            border: 1px solid var(--blue)
        }
`