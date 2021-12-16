import StyledTable from "./styled/Table";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = (props) => {
    const { columns, data, page } = props;
    return (
        <StyledTable>
            <TableHeader columns={columns} />
            <TableBody data={data} page={page} />
        </StyledTable>
    );
};

export default Table;
