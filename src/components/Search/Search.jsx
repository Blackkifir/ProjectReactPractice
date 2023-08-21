import React from 'react';
import styles from './Search.module.scss';

const Search = ({onChangeInput, value, clickClose}) => {

    return (
<>
        <header>
     <div className={styles.container}>
     <div className={styles.search}>
       <input
         value={value}
         onChange={onChangeInput}
         placeholder='Search'
         className={styles.input}/>
        <button
        onClick={clickClose}
        className={styles.close}>&times;</button>
     </div>
     </div>
     </header>
</>
    );
};

export default Search;