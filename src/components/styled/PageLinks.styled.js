import styled from "styled-components";

const StyledPageLinks = styled.div`
    width: 50%;
    height: min-content;
    & a,
    a:link,
    a:visited {
        display: inline-block;
        border: 1px solid gray;
        padding: 0.3rem 0.8rem;
        margin: 0 0.2rem;
        text-decoration: none;
        color: black;
    }

    &a:active,
    a:hover {
        background-color: beige;
    }
`;

export default StyledPageLinks;
