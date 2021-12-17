import StyledSortBtn from "./styled/SortBtn.styled";
import { useContext } from "react";
import { TableDataContext } from "../context/Context";

const SortBtn = ({ value, name, children }) => {
    const { setSortData } = useContext(TableDataContext);

    const handleClick = (e) => {
        setSortData({ category: name, order: value });
    };

    return (
        <StyledSortBtn value={value} onClick={handleClick}>
            {children}
        </StyledSortBtn>
    );
};

export default SortBtn;
