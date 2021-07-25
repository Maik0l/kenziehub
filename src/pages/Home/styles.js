import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        position: fixed;
        width: 100%;
        bottom: 0;
        padding: 0.5rem;
        background: var(--blue);
        color: var(--white)
    }
`
export const Content = styled.div`
    h1 {
        color: var(--black);
        font-size: 2.5rem;
    }

    h2 {
        color: var(--darkblue);
    }

    button + button {
        margin-left: 1rem;
    }
`