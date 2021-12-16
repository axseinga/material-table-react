import StyledTableHeader from "./styled/TableHeader.styled";
import TableHeaderCell from "./TableHeaderCell";

const TableHeader = (props) => {
    const { columns } = props;
    console.log(columns);
    return (
        <StyledTableHeader>
            <tr>
                {columns.map((c) => (
                    <TableHeaderCell key={c}>
                        {c[0].toUpperCase() + c.slice(1)}
                    </TableHeaderCell>
                ))}
            </tr>
        </StyledTableHeader>
    );
};

export default TableHeader;
