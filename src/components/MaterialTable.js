import StyledMaterialTable from "./styled/MaterialTable.styled";
import Table from "./Table";
import Navigation from "./Navigation";
import { useState } from "react";
import { TableDataContext } from "../context/Context";
import { PaginationContext } from "../context/Context";

const MaterialTable = (props) => {
    const { columns, data } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const [limitPerPage, setLimitPerPage] = useState(5);

    const pages = Math.ceil(data.length / limitPerPage);

    return (
        <StyledMaterialTable>
            <TableDataContext.Provider value={{ columns: columns, data: data }}>
                <PaginationContext.Provider
                    value={{ page: currentPage, limit: limitPerPage }}
                >
                    <Table />
                </PaginationContext.Provider>
            </TableDataContext.Provider>
            <Navigation pages={pages} setPage={setCurrentPage} />
        </StyledMaterialTable>
    );
};

export default MaterialTable;
