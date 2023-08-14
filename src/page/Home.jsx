import React, { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { axiosCatalog, setCurrentPages } from '../redux/store/slices/catalogSlice';
import { setSearchValue } from '../redux/store/slices/searchSlice';
// import { setCurrentPages  }  from '../redux/store/slices/paginationSlice';

import Pagination from '../components/Pagination/Pagination';
import Catalog from '../components/Catalog/Catalog';
import debounce from '../helpers/debounce'; 
import styles from '../scss/.app.scss';

const Home = () => {
    const dispatch = useDispatch();
    const { items, isLoading } = useSelector((state) => state.catalog);
    const searchValue = useSelector((state) => state.search.searchValue);
    const [value, setValue] = useState('');
    // const currentPage = useSelector((state) => state.pagination.currentPage);z

    useEffect(() => {
        dispatch(axiosCatalog({
          searchValue
        }));
      }, [searchValue]); 

    const updateSearchValue = useCallback(
        debounce((str) => {
          dispatch(setSearchValue(str))
        },
    ), []); 
  
    const onChangeInput = (event) => {
       setValue(event.target.value);
       updateSearchValue(event.target.value); 
    }; 
    
    const onChangePage = (page) => {
      dispatch(setCurrentPages(page)); 
      console.log(page)
    };

    return (
         <div className='container'>
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
            {!isLoading && ( 
            items?.map((obj) => <Catalog
            key={obj.id}
            id={obj.id}
            title={obj.title}
            price={obj.price}
            description={obj.description}
            time={obj.updatedAt}
            images={obj.images}
            />))}
            <Pagination onChangePage={onChangePage}/>
            </div>
    );
};

export default Home;