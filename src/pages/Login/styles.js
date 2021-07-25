import styled from 'styled-components'
import LoginImage from '../../assets/clipimage.png'

export const Container = styled.div`
    height: 100vh;
    display: flex;
`

export const Background = styled.div`
    @media (min-width: 1100px) {
        flex: 1;
        background: url(${LoginImage}) no-repeat center;
        background-size: contain;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 700px;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        div {
            margin-bottom: 0.5rem;
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
    background: var(--darkblue);
    color: var(--white);
    margin-bottom: 0.5rem;
    border-radius: 3px;
    width: 70%;

    :hover {
        background: var(--blue);
        transition: 0.4s;
    }
`