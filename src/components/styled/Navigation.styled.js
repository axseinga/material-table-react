import styled from "styled-components";

const StyledNavigation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 400px;
    width: 80%;
    padding: 0.5rem 4rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    border-left: 1px solid black;

    & label {
        margin-right: 0.5rem;
    }
`;

export default StyledNavigation;
