
import React, { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { axiosCatalog, setPage, setSearchValue } from '../redux/store/slices/catalogSlice';

import Pagination from '../components/Pagination/Pagination';
import Catalog from '../components/Catalog/Catalog';
import Loader from '../components/Loader/Loader';
import debounce from '../helpers/debounce'; 
import styles from '../scss/.app.scss';


const Home = () => {
    //redux
    const dispatch = useDispatch();
    const { items, isLoading, searchValue, page, contentPerPage } = useSelector((state) => state.catalog);
    const [value, setValue] = useState('');

    //pagination
    const totalPages = Math.ceil(items.length / contentPerPage);
    const lastContentIndex = page * contentPerPage;
    const firstContentIndex = lastContentIndex - contentPerPage;
    

    useEffect(() => {
        
        dispatch(axiosCatalog({
          searchValue,
          page
        }));
      }, [dispatch, searchValue, page ]); 

    /* eslint-disable react-hooks/exhaustive-deps */
    const updateSearchValue = useCallback(
        debounce((str) => {
          dispatch(setSearchValue(str))
        },
    ), []); 
  
    const onChangeInput = (event) => {
       setValue(event.target.value);
       updateSearchValue(event.target.value); 
    }; 

    const changePage = (page) => {
      if (page < 1) {
        dispatch(setPage(totalPages));
      }
      else if (page > totalPages) {
        dispatch(setPage(1));
      }
      else {
        dispatch(setPage(page));
      }
   }

   

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
            
            {isLoading ? <Loader/> : ( 
            items.slice(firstContentIndex, lastContentIndex)
                 .map((obj) => <Catalog
            key={obj.id}
            id={obj.id}
            title={obj.title}
            price={obj.price}
            description={obj.description}
            time={obj.updatedAt}
            images={obj.images}
            />))}
            {!isLoading && <Pagination changePage={changePage} totalPages={totalPages}/>}
            </div>
    );
};

export default Home;