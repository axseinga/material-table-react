import StyledToolkit from "./styled/Toolkit.styled";
import SearchBar from "./SearchBar";
import LimitInput from "./LimitInput";

const Toolkit = (props) => {
    const { setLimit } = props;
    return (
        <StyledToolkit>
            <SearchBar />
            <LimitInput setLimit={setLimit} />
        </StyledToolkit>
    );
};

export default Toolkit;
