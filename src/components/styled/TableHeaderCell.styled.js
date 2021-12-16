import styled from "styled-components";

const StyledTableHeaderCell = styled.th`
    padding: 0.5rem 1rem;
    border: 1px solid black;
    width: 100px;
    text-align: center;
    &:first-child {
        width: 200px;
    }
`;

export default StyledTableHeaderCell;
