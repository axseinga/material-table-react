import StyledPageLinks from "./styled/PageLinks.styled";
import { useContext } from "react";
import { NavigationContext } from "../context/Context";

const PageLinks = () => {
    const { pages, setPage } = useContext(NavigationContext);
    const links = new Array(pages).fill(0).map((item, index) => (
        <a href="#" key={index} onClick={() => setPage(index + 1)}>
            {index + 1}
        </a>
    ));
    return <StyledPageLinks>{links}</StyledPageLinks>;
};

export default PageLinks;
