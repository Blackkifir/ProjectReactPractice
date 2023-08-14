import { configureStore } from '@reduxjs/toolkit';
import catalog from './slices/catalogSlice';
import search from './slices/searchSlice';
import pagination from './slices/paginationSlice';

export const store = configureStore({
    reducer: {
        pagination,
        catalog,
        search,
    },
});
