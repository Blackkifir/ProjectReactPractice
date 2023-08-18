
import React, { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { axiosCatalog, setPage, setSearchValue } from '../redux/store/slices/catalogSlice';
import Search from '../components/Search/Search';
import Pagination from '../components/Pagination/Pagination';
import Catalog from '../components/Catalog/Catalog';
import Loader from '../components/Loader/Loader';
import debounce from '../helpers/debounce'; 


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
            <Search 
            onChangeInput={onChangeInput}
            value={value}
            />
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