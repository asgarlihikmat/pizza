import React from 'react'
import debounce from 'lodash.debounce';

function Search({ setSearch, searched }) {

  const[value,setValue] = React.useState('');  
  const inputRef = React.useRef();

  function handleChange(event) {
    const { value } = inputRef.current;
    setValue(value);
    updateSearchValue(value);
  }
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearch(str)
    },1000),
    []
  )

  return (
    <form className="d-flex" role="search">
      <input
        ref={inputRef}
        value={value}
        onChange={handleChange}
        className="form-control me-2"
        type="search"
        placeholder="Search my broo....."
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
