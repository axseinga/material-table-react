import styled from "styled-components";

const StyledToolkit = styled.div`
    display: flex;
    justify-content: space-around;
    width: 30%;
    height: min-content;

    & input,
    & select {
        padding: 0.3rem 0.4rem;
    }
`;

export default StyledToolkit;
