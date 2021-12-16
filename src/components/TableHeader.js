import StyledTableHeader from "./styled/TableHeader.styled";
import TableHeaderCell from "./TableHeaderCell";

const TableHeader = (props) => {
    const { columns } = props;
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
