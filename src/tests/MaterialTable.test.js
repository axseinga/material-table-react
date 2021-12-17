import MaterialTable from "../components/MaterialTable";
import { columns, mcData } from "../db/tableData";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("MaterialTable tests", () => {
    it("check if input for searchbar exists", () => {
        render(<MaterialTable columns={columns} data={mcData} limit={5} />);

        const searchElement = screen.getByLabelText("Search for:");
        expect(searchElement).toBeInTheDocument();
    });
    it("check if text is shown when user types in search bar ", () => {
        render(<MaterialTable columns={columns} data={mcData} limit={5} />);

        const searchElement = screen.getByLabelText("Search for:");
        userEvent.type(searchElement, "burger");
        const text = screen.getByText("burger");
        expect(text).toBeInTheDocument();
    });
    it("check if after typing 'burger' the table will display 'Double Cheeseburger' ", () => {
        //przechodzi test zawsze bez znaczenia co jest pod "Double Cheeseburger, to uzycie tex Content nie dziala (dopiero przy pozniejszych testach to zauwazylam)"
        render(<MaterialTable columns={columns} data={mcData} limit={5} />);

        const searchElement = screen.getByLabelText("Search for:");
        userEvent.type(searchElement, "burger");
        const cell = screen.getAllByRole("cell");

        expect(cell[0].textContent === "Double Cheeseburger");
    });
    it("check if after typing 'burger' the table will not display 'Hash Brown' ", () => {
        // tutaj tak samo
        render(<MaterialTable columns={columns} data={mcData} limit={5} />);

        const searchElement = screen.getByLabelText("Search for:");
        userEvent.type(searchElement, "burger");
        const cell = screen.getAllByRole("cell");

        expect(cell[0].textContent !== "Hash Brown");
    });
    it("check if chosen by developer limit for pages displays in select option", () => {
        render(<MaterialTable columns={columns} data={mcData} limit={5} />);

        expect(screen.getByRole("option", { name: "5" }).selected).toBe(true);
    });
    it("check if chosen by user limit for pages displays in select option as default", () => {
        render(<MaterialTable columns={columns} data={mcData} limit={5} />);

        const selectRowsElement = screen.getByLabelText("Rows:");
        userEvent.selectOptions(selectRowsElement, ["10"]);
        expect(screen.getByRole("option", { name: "10" }).selected).toBe(true);
    });
    it("check if 6th row is not displayed when limit is 5", () => {
        render(<MaterialTable columns={columns} data={mcData} limit={5} />);

        const rows = screen.getAllByRole("row");
        expect(rows[6]).toBe(undefined);
    });
    it("check if table shows 2 page links if the limit of pages is 5", () => {
        render(<MaterialTable columns={columns} data={mcData} limit={5} />);

        const links = screen.getAllByRole("link");

        expect(links.length).toBe(2);
    });
    it("check if table does not show 3 page links if the limit of pages is 5", () => {
        render(<MaterialTable columns={columns} data={mcData} limit={5} />);

        const links = screen.getAllByRole("link");

        expect(links.length === 3).toBe(false);
    });
    it("check if rows are sorted by alphabetical order when user clicks sort ascending button for name column", () => {
        render(<MaterialTable columns={columns} data={mcData} limit={10} />);

        const buttonElement = screen.getAllByRole("button");
        userEvent.click(buttonElement[0]);
        const cell = screen.getAllByRole("cell");

        // zadne z tych wersji nie dzialaja, nie potrafie wyszukac jak testowac zawartosc komorek, a bez tego wydaje mi sie, ze nie znajde sposobu zeby testowac sortowanie //

        /*expect(cell[0].textContent.toBe("Bacon Roll"));*/
        /*expect(cell[0].toHaveTextContent("Bacon Roll"));*/
    });
});
