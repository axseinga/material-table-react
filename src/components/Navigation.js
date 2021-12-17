import StyledNavigation from "./styled/Navigation.styled";
import PageLinks from "./PageLinks";
import Toolkit from "./Toolkit";

const Navigation = (props) => {
    const { pages, setPage, setLimit } = props;
    return (
        <StyledNavigation>
            <PageLinks pages={pages} setPage={setPage} />
            <Toolkit setLimit={setLimit} />
        </StyledNavigation>
    );
};

export default Navigation;
