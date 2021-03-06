import { useState } from "react";

const SearchBar = (props) => {
    const { setSearchWord } = props;
    const [selectValue, setSelectValue] = useState("");

    const handleChange = (e) => {
        setSelectValue(e.target.value);
        setSearchWord(e.target.value);
    };
    return (
        <div>
            <label htmlFor="search">Search for:</label>
            <input
                name="search"
                type="text"
                id="search"
                value={selectValue}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;
