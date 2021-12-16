import StyledTable from "./styled/Table";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = (props) => {
    return (
        <StyledTable>
            <TableHeader />
            <TableBody />
        </StyledTable>
    );
};

export default Table;
