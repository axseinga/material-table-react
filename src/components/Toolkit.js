import StyledToolkit from "./styled/Toolkit.styled";
import SearchBar from "./SearchBar";
import LimitInput from "./LimitInput";

const Toolkit = (props) => {
    const { setLimit, setSearchWord } = props;
    return (
        <StyledToolkit>
            <SearchBar setSearchWord={setSearchWord} />
            <LimitInput setLimit={setLimit} />
        </StyledToolkit>
    );
};

export default Toolkit;
