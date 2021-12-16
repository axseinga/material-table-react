import styled from "styled-components";

const StyledTableBody = styled.tbody`
    border: 1px solid black;

    & td {
        text-align: center;

        &:first-child {
            text-align: left;
        }
    }
`;

export default StyledTableBody;
