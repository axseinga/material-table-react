import StyledNavigation from "./styled/Navigation.styled";
import PageLinks from "./PageLinks";
import Toolkit from "./Toolkit";

const Navigation = (props) => {
    return (
        <StyledNavigation>
            <PageLinks />
            <Toolkit />
        </StyledNavigation>
    );
};

export default Navigation;
