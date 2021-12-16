import StyledMaterialTable from "./styled/MaterialTable.styled";
import Table from "./Table";
import PageLinks from "./PageLinks";
import { useState } from "react";

const MaterialTable = (props) => {
    const { columns, data } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const [limitPerPage, setLimitPerPage] = useState(5);

    const pages = Math.ceil(data.length / limitPerPage);

    return (
        <StyledMaterialTable>
            <Table columns={columns} data={data} page={currentPage} />
            <PageLinks pages={pages} setPage={setCurrentPage} />
        </StyledMaterialTable>
    );
};

export default MaterialTable;
