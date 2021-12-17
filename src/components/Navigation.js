import StyledNavigation from "./styled/Navigation.styled";
import PageLinks from "./PageLinks";
import Toolkit from "./Toolkit";

const Navigation = (props) => {
    const { pages, setPage, setLimit, setSearchWord } = props;
    return (
        <StyledNavigation>
            <PageLinks pages={pages} setPage={setPage} />
            <Toolkit setLimit={setLimit} setSearchWord={setSearchWord} />
        </StyledNavigation>
    );
};

export default Navigation;
