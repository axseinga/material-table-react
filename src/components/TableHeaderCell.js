import StyledTableHeaderCell from "./styled/TableHeaderCell.styled";
import SortBtn from "./SortBtn";

const TableHeaderCell = ({ cell }) => {
    return (
        <StyledTableHeaderCell>
            {cell[0].toUpperCase() + cell.slice(1)}
            <SortBtn>
                <i className="fas fa-arrow-up"></i>
            </SortBtn>
            <SortBtn>
                <i className="fas fa-arrow-down"></i>
            </SortBtn>
        </StyledTableHeaderCell>
    );
};

export default TableHeaderCell;
