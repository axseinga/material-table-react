import StyledMainView from "./MainView.styled";
import MaterialTable from "../components/MaterialTable";
import { columns, mcData } from "../db/tableData";

const MainView = () => {
    return (
        <StyledMainView>
            <MaterialTable
                title={"Mcdonald's calories table"}
                columns={columns}
                data={mcData}
                limit={5}
            />
        </StyledMainView>
    );
};

export default MainView;
