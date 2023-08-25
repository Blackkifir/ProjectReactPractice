import React from 'react';
import styles from './Search.module.scss';
import { Link } from 'react-router-dom';
const Search = ({onChangeInput, value, clickClose}) => {


    return (
<>
        <header>
        <Link to='/login'>
        <button className={styles.logReg}>Register</button>
        </Link>
     <div className={styles.container}>
     <div className={styles.search}>
       <input
         value={value}
         onChange={onChangeInput}
         placeholder='Search'
         className={styles.input}/>
        
         {value && 
           <button
           onClick={clickClose}
           className={styles.close}>&times; 
         </button>}
         
     </div>
     </div>
     </header>
</>
    );
};

export default Search;