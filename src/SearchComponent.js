const SearchComponent = (props) => {
    return (
        <div class="input-group input-group-lg">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-lg">Search for Assets</span>
            </div>
            <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={props.debouncedOnChange}
            />
        </div>
    );
}

export default SearchComponent;