import { Container, Row, Col } from "reactstrap";
import Categories from "./Categories";
import Sort, { sortType } from "./Sort";
import ShoppingCart from "./ShoppingCart";
import PizzaBlock from "./PizzaBlock";
import React, { useRef } from "react";
import Skeleton from "./Skeleton";
import Search from "./Search";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUsers } from "../redux/usersSlice";
import {setFilters} from '../redux/filterSlice'

import qs from "qs";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const isMounted = useRef(false);
  const isSearch = useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filterSlice);
  const usersList = useSelector((state) => state.usersSlice.users);

  const [searched, setSearch] = React.useState("");
  const [isLoading, setIsloading] = React.useState(true);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage, setPostsPerPage] = React.useState(4);

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const search = searched ? `&title_like=${searched}` : "";
    const pagination = `_page=${currentPage}&_limit=${postsPerPage}`;

    setIsloading(true);

    axios
      .get(
        `http://localhost:3000/pizzas?&${pagination}&${category}&_sort=${sortBy}&_order=${order}${search}`
      )
      .then((res) => {
        dispatch(setUsers(res.data));
        setIsloading(false);
      });
  }, [categoryId, sort, searched, currentPage]);

    React.useEffect(()=>{
       if(isMounted.current){
        const queryString = qs.stringify({
          sortProperty: sort.sortProperty,
          categoryId,
          currentPage
        })

        navigate(`?${queryString}`);
       }
       isMounted.current = true;
    },[categoryId, sort.sortProperty])

    React.useEffect(()=>{
      if(window.location.search){
        const params = qs.parse(window.location.search.substring(1));
        const sort = sortType.find((obj) => obj.sortProperty === params.sortProperty)
      
      dispatch(setFilters({...params,sort}))
      isSearch.current = true;
      }
    },[])

  return (
    <Container>
      <Row>
        <Col xs={9}>
          <Search searched={searched} setSearch={setSearch} />
        </Col>
        <Col>
          <ShoppingCart />
        </Col>
      </Row>
      <Row>
        <Col xs={9}>
          <Categories />
        </Col>
        <Col xs={3}>
          <Sort />
        </Col>
      </Row>
      <Row>
        <div className="d-flex flex-wrap">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : usersList.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
        </div>
      </Row>
      <Row>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          postsPerPage={postsPerPage}
          setPostsPerPage={setPostsPerPage}
        />
      </Row>
    </Container>
  );
}

export default DashBoard;
