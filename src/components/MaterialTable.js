import StyledMaterialTable from "./styled/MaterialTable.styled";
import TableHeader from "./TableHeader";

const MaterialTable = (props) => {
    const { columns, data } = props;
    return (
        <>
            <StyledMaterialTable>
                <TableHeader columns={columns} />
            </StyledMaterialTable>
        </>
    );
};

export default MaterialTable;
