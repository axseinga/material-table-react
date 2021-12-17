const checkIfString = (category) => {
    if (category === "name" || category === "category") {
        return true;
    } else return false;
};

export const handleSort = (data, sortData) => {
    const category = sortData.category;
    const order = sortData.order;

    const isString = checkIfString(category);

    if (isString === true && order === "asc") {
        return data.sort((a, b) => a[category].localeCompare(b[category]));
    }
    if (isString === true && order === "desc") {
        return data.sort((a, b) => b[category].localeCompare(a[category]));
    }
    if (isString === false && order === "asc") {
        console.log("num and asc");
        return data.sort((a, b) =>
            a[category]
                .toString()
                .localeCompare(b[category].toString(), undefined, {
                    numeric: true,
                })
        );
    }
    if (isString === false && order === "desc") {
        console.log("num and desc");
        return data.sort((a, b) =>
            b[category]
                .toString()
                .localeCompare(a[category].toString(), undefined, {
                    numeric: true,
                })
        );
    } else return;
};
