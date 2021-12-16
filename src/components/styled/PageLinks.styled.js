import styled from "styled-components";

const StyledPageLinks = styled.div`
    display: flex;
    width: 80%;
    padding: 0.1rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    border-left: 1px solid black;

    & a,
    a:link,
    a:visited {
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
