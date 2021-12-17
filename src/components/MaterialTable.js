import StyledMaterialTable from "./styled/MaterialTable.styled";
import Table from "./Table";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import { TableDataContext } from "../context/Context";
import { PaginationContext } from "../context/Context";

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

    const handleSearch = (searchWord) => {
        const filteredData = data.filter((d) =>
            Object.values(d).some((value) => {
                const str = value.toString().toLowerCase();
                return str.includes(searchWord);
            })
        );
        return filteredData;
    };

    const handleSort = (sortData) => {
        const category = sortData.category;
        const order = sortData.order;
        if (order === "asc") {
            const sortedRows = rows.sort((a, b) =>
                a[category].toString().localeCompare(b[category].toString())
            );
            return sortedRows;
        }
        if (order === "desc") {
            const sortedRows = rows.sort((a, b) =>
                b[category].toString().localeCompare(a[category].toString())
            );
            return sortedRows;
        } else return;
    };

    useEffect(() => {
        const filteredRows = handleSearch(searchWord);
        setRows(filteredRows);
    }, [searchWord]);

    useEffect(() => {
        const sortedRows = handleSort(sortData);
        setRows(sortedRows);
    }, [sortData]);

    const pages = Math.ceil(rows.length / limitPerPage);

    return (
        <StyledMaterialTable>
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
            <Navigation
                pages={pages}
                setPage={setCurrentPage}
                setLimit={setLimitPerPage}
                setSearchWord={setSearchWord}
            />
        </StyledMaterialTable>
    );
};

export default MaterialTable;
