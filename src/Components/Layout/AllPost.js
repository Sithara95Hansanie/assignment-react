import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import ReactPaginate from "react-paginate";

function AllPosts() {
  const [offset, setOffset] = useState(0);
  const [data, setPosts] = useState([]);
  const [perPage] = useState(9);
  const [pageCount, setPageCount] = useState(0);

  const getData = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    const data = res.data;
    const slice = data.slice(offset, offset + perPage);
    const postData = slice.map((item, index) => (
      <Link to={{ pathname: "/" + item.id, state: item }} key={index}>
        <div key={item.id} className="post-card-conatiner">
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      </Link>
    ));
    setPosts(postData);
    setPageCount(Math.ceil(data.length / perPage));
  };
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    getData();
  }, [offset]);

  return (
    <div className="blog-page-wrapper">
      <div className="post-grid">{data}</div>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default AllPosts;
