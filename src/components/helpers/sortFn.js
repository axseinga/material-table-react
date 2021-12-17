export const handleSort = (data, sortData) => {
    const category = sortData.category;
    const order = sortData.order;
    if (order === "asc") {
        return data.sort((a, b) =>
            a[category].toString().localeCompare(b[category].toString())
        );
    }
    if (order === "desc") {
        return data.sort((a, b) =>
            b[category].toString().localeCompare(a[category].toString())
        );
    } else return;
};
