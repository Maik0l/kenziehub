import styled from 'styled-components'

export const Container = styled.button`
    background: var(--white);
    border: none;
    padding: 1rem;
    background: var(--blue);
    color: var(--white);
    width: calc(50% - 4rem);
    margin-top: 1rem;
    border-radius: 3px;

    :hover {
        background: var(--darkblue);
        transition: 0.4s;
    }
`