import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({setCurrentPage,postsPerPage}) => {

   

    return (
       <>
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={event => setCurrentPage(event.selected + 1)}
        pageRangeDisplayed={postsPerPage}
        pageCount={9/4}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
       </>
  );
};

export default Pagination;
