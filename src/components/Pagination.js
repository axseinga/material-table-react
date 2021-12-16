import { useContext } from "react";
import { PaginationContext } from "../context/Context";

const Pagination = (props) => {
    const { page, limit } = useContext(PaginationContext);
    const { children } = props;

    const begin = limit * (page - 1);
    const end = page * limit;

    return <>{children.slice(begin, end)}</>;
};

export default Pagination;
