export const handleSearch = (data, searchWord) => {
    return data.filter((d) =>
        Object.values(d).some((value) => {
            const str = value.toString().toLowerCase();
            return str.includes(searchWord);
        })
    );
};
