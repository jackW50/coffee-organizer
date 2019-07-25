import React from 'react';
import uuid from 'uuid';

const Pagination = props => {
  return (
    <section className="pagination" >
      <span onClick={() => props.setCurrentPage(1)}>&laquo;</span>
      {props.pageNumbers.map(
        e => (<span key={uuid.v4()} className={e === props.currentPage ? "active" : ""}
        onClick={() => props.setCurrentPage(e)}>{e}</span>)
      )}
      <span onClick={() => props.setCurrentPage(props.pageNumbers[props.pageNumbers.length - 1])}>&raquo;</span>
    </section>
  )
}

export default Pagination;
