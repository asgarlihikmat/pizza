

function Search({setSearch,searched}) {

    function handleChange(event) {
        const{name,value} = event.target;
        setSearch(value)
    }

    return(
        <form className="d-flex" role="search">
              <input
              value={searched}
                onChange={handleChange}
                className="form-control me-2"
                type="search"
                placeholder="Search my broo....."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
    )
}

export default Search;