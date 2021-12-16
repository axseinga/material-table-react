import StyledTableBody from "./styled/TableBody.styled";
import Pagination from "./Pagination";
import { useContext } from "react";
import { TableDataContext } from "../context/Context";

const TableBody = (props) => {
    const { data } = useContext(TableDataContext);
    return (
        <StyledTableBody>
            <Pagination>
                {data.map((d) => (
                    <tr key={d.id}>
                        <td>{d.name}</td>
                        <td>{d.category}</td>
                        <td>{d.amount}</td>
                        <td>{d.calories}</td>
                        <td>{d.carbs}</td>
                        <td>{d.fat}</td>
                        <td>{d.protein}</td>
                    </tr>
                ))}
            </Pagination>
        </StyledTableBody>
    );
};

export default TableBody;
