import StyledMainView from "./MainView.styled";
import MaterialTable from "../components/MaterialTable";
import { columns, mcData } from "../db/tableData";

const MainView = () => {
    return (
        <StyledMainView>
            <MaterialTable columns={columns} data={mcData} />
        </StyledMainView>
    );
};

export default MainView;
