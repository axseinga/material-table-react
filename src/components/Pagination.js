const Pagination = (props) => {
    const { children, limit = 5, page } = props;
    console.log(page);

    const begin = limit * (page - 1);
    const end = page * limit;

    return <>{children.slice(begin, end)}</>;
};

export default Pagination;
