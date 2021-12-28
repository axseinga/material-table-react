import { createGlobalStyle } from "styled-components";
import backgroundImage from "../../assets/food.png";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    background-color: #fff;
    box-sizing: inherit;
    background-image: url(${backgroundImage});
}
`;

export default GlobalStyle;
