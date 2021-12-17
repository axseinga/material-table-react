import styled from "styled-components";

const StyledTableBody = styled.tbody`
    border: 1px solid black;

    & tr {
        max-height: 20px;
    }

    & td {
        text-align: center;
        max-height: 20px;

        &:first-child {
            text-align: left;
        }
    }
`;

export default StyledTableBody;
