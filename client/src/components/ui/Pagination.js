import React from 'react';
import uuid from 'uuid';

const Pagination = ({ currentPage, setCurrentPage, pageNumbers }) => {

  function setPage(page) {
    window.scroll(0, 300);

    setCurrentPage(page);
  }

  return (
    <section className="pagination" >
      <span onClick={() => setPage(1)}>&laquo;</span>
      {pageNumbers.map(
        e => (<span key={uuid.v4()} className={e === currentPage ? "active" : ""}
        onClick={() => setPage(e)}>{e}</span>)
      )}
      <span onClick={() => setPage(pageNumbers[pageNumbers.length - 1])}>&raquo;</span>
    </section>
  )
}

export default Pagination;
