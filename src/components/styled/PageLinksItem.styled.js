import styled, { css } from "styled-components";

const activeStyle = css`
    :link,
    :visited {
        background-color: beige;
    }

    :hover {
        background-color: #facc74;
    }
`;

const StyledPageLinksItem = styled.a`
    :link,
    :visited {
        display: inline-block;
        border: 1px solid gray;
        padding: 0.3rem 0.8rem;
        margin: 0 0.2rem;
        text-decoration: none;
        color: black;
    }

    :active,
    :hover {
        background-color: #facc74;
    }

    ${(props) => props.isActive && activeStyle}
`;

export default StyledPageLinksItem;
