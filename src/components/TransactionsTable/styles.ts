import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            padding: 1rem 2rem;
            line-height: 1.5rem;
            text-align: left;
            font-weight: 400;
            color: var(--text-body);
        }

        td {
            background: var(--shape);
            padding: 1rem 2rem;
            border: 0;
            border-radius: 0.25rem;
            color: var(--text-body);

            &:first-child {
                color: var(--text-title);
            }
            &.expense {
                color: var(--red);
            }
            &.income {
                color: var(--green);
            }
        }
    }
`;
