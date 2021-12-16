import styled from "styled-components";

const StyledTable = styled.table`
    border: 1px solid black;
    border-collapse: collapse;
    width: 80%;

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
