const LimitInput = () => {
    return (
        <div>
            <label htmlFor="rows">Rows:</label>
            <select name="rows">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="5">5</option>
            </select>
        </div>
    );
};

export default LimitInput;
