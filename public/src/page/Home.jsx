import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosCatalog } from '../redux/slices/catalogSlice';
import { setSearchValue } from '../redux/slices/searchSlice';


import Catalog from '../components/Catalog/Catalog';
import debounce from '../helpers/debounce'; 
import styles from '../scss/.app.scss';

const Home = () => {
    const dispatch = useDispatch();
    const { items, isLoading } = useSelector((state) => state.catalog);
    const searchValue = useSelector((state) => state.search.searchValue); 
 
    useEffect(() => {
        dispatch(axiosCatalog());
    }, [])
     
    const updateSearchValue = useCallback(
        debounce(() => dispatch(axiosCatalog())
    ), []); 

    const findItemsSortBy = items.filter((obj) => {
        return obj.name.toLowerCase().includes(searchValue.toLowerCase());
    });  

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
              onChange={onChangeInput}
              placeholder='Search'
              className={styles.input}/>
          </div>
          </div>
          </header>
            {!isLoading && ( 
            findItemsSortBy.map((obj) => <Catalog
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