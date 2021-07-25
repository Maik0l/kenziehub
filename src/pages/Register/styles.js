import styled from 'styled-components'
import LoginImage from '../../assets/logoblue.svg'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
`

export const Background = styled.div`
    @media (min-width: 1100px) {
        flex: 1;
        background: url(${LoginImage}) no-repeat center;
        background-size: contain;
        max-width: 25%;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            margin-bottom: 0.25rem;
        }

        div {
            margin-bottom: 0.40rem;
        }

        p {
            font-size: 0.85rem;

            span {
                color: var(--blue);
            }
        }
    }
`

export const NewButton = styled.button`
    background: var(--white);
    border: none;
    padding: 1rem;
    background: var(--blue);
    color: var(--white);
    margin-bottom: 0.5rem;
    border-radius: 3px;
    width: 70%;

    :hover {
        background: var(--darkblue);
        transition: 0.4s;
    }
`