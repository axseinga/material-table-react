import StyledPageLinks from "./styled/PageLinks.styled";
import { useContext } from "react";
import { NavigationContext } from "../context/Context";
import PageLinksItem from "./PageLinksItem";

const PageLinks = () => {
    const { currentPage, pages, setPage } = useContext(NavigationContext);
    const links = new Array(pages).fill(0).map((item, index) => {
        const isActive = currentPage === index + 1 ? true : false;
        return (
            <PageLinksItem
                key={index}
                index={index}
                setPage={setPage}
                isActive={isActive}
            />
        );
    });
    return <StyledPageLinks>{links}</StyledPageLinks>;
};

export default PageLinks;
