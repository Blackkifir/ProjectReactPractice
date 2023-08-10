import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosCatalog } from '../redux/slices/catalogSlice';
import { setSearchValue } from '../redux/slices/searchSlice';

import Catalog from '../components/Catalog/Catalog';
import debounce from '../helpers/debounce'; 
import styles from '../scss/.app.scss';

const Home = () => {
    const dispatch = useDispatch();
    const { items, isLoading, searchValue } = useSelector((state) => state.catalog);
    const inputRef = useRef();
     
    useEffect(() => {
        dispatch(axiosCatalog());
      }, []); 
     
    const updateSearchValue = useCallback(
        debounce(() => dispatch(axiosCatalog())
    ), []); 
  
    const onChangeInput = (event) => {
       dispatch(setSearchValue(event.target.value));
        updateSearchValue(event.target.value); 
    }; 
    
    return (
         <div className='container'>
             <header>
          <div className={styles.container}>
          <div className={styles.search}>
            <input
              ref={inputRef}
              value={searchValue}
              onChange={onChangeInput}
              placeholder='Search'
              className={styles.input}/>
          </div>
          </div>
          </header>
            {!isLoading && ( 
            items?.map((obj) => <Catalog
            key={obj.id}
            id={obj.id}
            role={obj.role}
            authorName={obj.name}
            email={obj.email}
            createAt={obj.creationAt}
            // avatar={obj.avatar}
            />))}
            </div>
    );
};

export default Home;