import StyledMaterialTable from "./styled/MaterialTable.styled";
import Table from "./Table";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import { TableDataContext } from "../context/Context";
import { PaginationContext } from "../context/Context";
import { NavigationContext } from "../context/Context";
import { handleSort } from "./helpers/sortFn";
import { handleSearch } from "./helpers/searchFn";

const MaterialTable = (props) => {
    const { columns, data, limit } = props;
    const [rows, setRows] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const [limitPerPage, setLimitPerPage] = useState(limit);
    const [searchWord, setSearchWord] = useState("");
    const [sortData, setSortData] = useState({
        category: "name",
        order: "desc",
    });

    useEffect(() => {
        const filteredRows = handleSearch(data, searchWord);
        setRows(filteredRows);
    }, [searchWord]);

    useEffect(() => {
        const sortedRows = handleSort(rows, sortData);
        setRows(sortedRows);
    }, [sortData]);

    const pages = Math.ceil(rows.length / limitPerPage);

    return (
        <StyledMaterialTable>
            <h1>{props.title}</h1>
            <TableDataContext.Provider
                value={{
                    columns: columns,
                    data: rows,
                    setSortData: setSortData,
                }}
            >
                <PaginationContext.Provider
                    value={{ page: currentPage, limit: limitPerPage }}
                >
                    <Table />
                </PaginationContext.Provider>
            </TableDataContext.Provider>
            <NavigationContext.Provider
                value={{
                    currentPage: currentPage,
                    pages: pages,
                    setPage: setCurrentPage,
                    setLimit: setLimitPerPage,
                    limitPerPage: limitPerPage,
                    setSearchWord: setSearchWord,
                }}
            >
                <Navigation />
            </NavigationContext.Provider>
        </StyledMaterialTable>
    );
};

export default MaterialTable;
