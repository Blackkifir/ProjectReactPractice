import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Pagination.module.scss';


const Pagination = ({onChangePage}) => {
const { totalPage, currentPage } = useSelector((state) => state.pagination);

const pageNewArray = Array.from({length: totalPage}, (_, i) => i + 1);



  return (
   <nav>
      <div className={styles.container}>
        <div className={styles.pagFlex}>
          <ul className='pagList'>
            <li className='list-items'>
              <button 
                className={styles.btn_previous}
                onClick={() => onChangePage(currentPage - 1)}
                >
                {'<'}
              </button>
            </li>
            
            <li className='list-items'>
             <button 
                className={styles.btn_next}
                onClick={() => onChangePage(currentPage + 1)}>
                {'>'}
              </button>
            </li>
          </ul>
        </div>
      </div>
   </nav>
  );
};

export default Pagination;

