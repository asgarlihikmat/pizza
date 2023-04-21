import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";


const Pagination = ({setCurrentPage,postsPerPage}) => {

  const usersList = useSelector((state) => state.usersSlice.users);

    return (
       <>
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={event => setCurrentPage(event.selected + 1)}
        pageRangeDisplayed={postsPerPage}
        pageCount={4}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
       </>
  );
};

export default Pagination;
