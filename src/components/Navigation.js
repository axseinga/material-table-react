import StyledNavigation from "./styled/Navigation.styled";
import PageLinks from "./PageLinks";
import Toolkit from "./Toolkit";

const Navigation = (props) => {
    const { pages, setPage } = props;
    return (
        <StyledNavigation>
            <PageLinks pages={pages} setPage={setPage} />
            <Toolkit />
        </StyledNavigation>
    );
};

export default Navigation;
