import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Pagination.module.scss';


const Pagination = ({changePage, totalPages}) => {
const { page } = useSelector((state) => state.catalog);

  return (
   <nav>
     <div className={styles.paginationBlock}>
  <p className={styles.text}>
    {page}/{totalPages}
  </p>
  <button onClick={() => changePage(page - 1)} className='page'>
    &larr;
  </button>
  {[...Array(totalPages).keys()].map((el) => (
    <button
      onClick={() => changePage(el + 1)}
      key={el}
      className={`page ${page === el + 1 ? "active" : ""}`}
    >
      {el + 1}
    </button>
  ))}
  <button onClick={() => changePage(page + 1)} className="page">
    &rarr;
  </button>
</div>
   </nav>
  );
};


export default Pagination;

