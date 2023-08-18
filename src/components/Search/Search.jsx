import React from 'react';
import styles from './Search.module.scss';

const Search = ({onChangeInput, value}) => {

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
     </div>
     </div>
     </header>
</>
    );
};

export default Search;