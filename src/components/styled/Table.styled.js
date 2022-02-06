import styled from "styled-components";

const StyledTable = styled.table`
    border-collapse: collapse;
    border: 1px solid black;
    min-width: 400px;
    width: 80%;
    height: 80vh;

    background-color: #ffd37d;

    & tr {
        border-bottom: 1px solid grey;
        width: 100%;

        &:last-child {
            border-bottom: none;
        }
        & td {
            padding: 0.5rem 1rem;
        }
    }
`;

export default StyledTable;
