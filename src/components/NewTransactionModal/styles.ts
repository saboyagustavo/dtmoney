import styled from 'styled-components';
import { darken, transparentize } from 'polished';
export const Container = styled.form`
    h2 {
        margin-bottom: 2rem;
        font-size: 1.5rem;
        color: var(--text-title);
    }

    input {
        background: var(--input-background);

        width: 100%;
        height: 4rem;

        padding: 0 1.5rem;
        border: 0.063rem solid var(--border);
        border-radius: 0.25rem;

        font-size: 1rem;
        font-weight: 400;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type='submit'] {
        background: var(--green);
        transition: filter 0.2s;

        width: 100%;
        height: 4rem;

        margin-top: 1.5rem;
        padding: 0 1.5rem;
        border: 0;
        border-radius: 0.25rem;

        font-size: 1rem;
        color: #fff;

        &:active {
            background: var(--shape);
            color: var(--green);
        }
        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    width: 100%;
    margin: 0.5rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33CC95',
    red: '#E52E4D',
    border: '#d7d7d7',
}


export const RadioBox = styled.button<RadioBoxProps>`
    background: ${props => props.isActive
        ? transparentize(0.9, colors[props.activeColor])
        : 'transparent'
    };

    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s;

    height: 4rem;
    border: 0.063rem solid var(--border);
    border-radius: 0.25rem;

    &:hover {
        border-color: ${darken(0.2, colors.border)};
    }

    &:active {
        border-color: var(--shape);
    }

    span {
        display: inline-block;
        margin-left: 1rem;

        font-size: 1rem;
        font-weight: 400;
        color: var(--text-title);
    }

    img {
        width: 1.5rem;
        height: 1.5rem;
    }
`;
