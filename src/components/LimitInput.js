import { useState } from "react";

const LimitInput = (props) => {
    const { limit, setLimit } = props;
    const [selectValue, setSelectValue] = useState(limit);

    const handleChange = (e) => {
        console.log("handling change");
        setSelectValue(e.target.value);
        setLimit(e.target.value);
    };

    return (
        <div>
            <label htmlFor="rows">Rows:</label>
            <select
                name="rows"
                id="rows"
                value={selectValue}
                onChange={handleChange}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
            </select>
        </div>
    );
};

export default LimitInput;
