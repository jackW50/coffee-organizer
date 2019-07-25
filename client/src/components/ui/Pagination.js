import React from 'react';
import uuid from 'uuid';

const Pagination = ({ currentPage, setCurrentPage, pageNumbers }) => {
  return (
    <section className="pagination" >
      <span onClick={() => setCurrentPage(1)}>&laquo;</span>
      {pageNumbers.map(
        e => (<span key={uuid.v4()} className={e === currentPage ? "active" : ""}
        onClick={() => setCurrentPage(e)}>{e}</span>)
      )}
      <span onClick={() => setCurrentPage(pageNumbers[pageNumbers.length - 1])}>&raquo;</span>
    </section>
  )
}

export default Pagination;
