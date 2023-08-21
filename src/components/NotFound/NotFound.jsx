import React from 'react';
import styles from './NotFound.module.scss';

const NotFound = () => {
    return (
        <div>
           <h3 className={styles.notFoundItem}>По вашему запросу ничего не найдено! 😕</h3> 
        </div>
    );
};

export default NotFound;