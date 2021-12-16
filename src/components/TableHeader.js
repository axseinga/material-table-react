import StyledTableHeader from "./styled/TableHeader.styled";
import TableHeaderCell from "./TableHeaderCell";
import { useContext } from "react";
import { TableDataContext } from "../context/Context";

const TableHeader = (props) => {
    const { columns } = useContext(TableDataContext);
    return (
        <StyledTableHeader>
            <tr>
                {columns.map((c) => (
                    <TableHeaderCell key={c} cell={c} />
                ))}
            </tr>
        </StyledTableHeader>
    );
};

export default TableHeader;
