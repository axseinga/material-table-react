import StyledPageLinks from "./styled/PageLinks.styled";

const PageLinks = ({ pages, setPage }) => {
    const links = new Array(pages).fill(0).map((item, index) => (
        <a href="#" key={index} onClick={() => setPage(index + 1)}>
            {index + 1}
        </a>
    ));
    return <StyledPageLinks>{links}</StyledPageLinks>;
};

export default PageLinks;
