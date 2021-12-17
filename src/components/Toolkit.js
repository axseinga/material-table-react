import StyledToolkit from "./styled/Toolkit.styled";
import SearchBar from "./SearchBar";
import LimitInput from "./LimitInput";
import { useContext } from "react";
import { NavigationContext } from "../context/Context";

const Toolkit = () => {
    const { limitPerPage, setLimit, setSearchWord } =
        useContext(NavigationContext);
    return (
        <StyledToolkit>
            <SearchBar setSearchWord={setSearchWord} />
            <LimitInput setLimit={setLimit} limit={limitPerPage} />
        </StyledToolkit>
    );
};

export default Toolkit;
