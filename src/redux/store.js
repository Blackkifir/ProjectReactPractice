import { configureStore } from '@reduxjs/toolkit';
import catalog from './slices/catalogSlice';
import search from './slices/searchSlice';

export const store = configureStore({
    reducer: {
        catalog, 
        search
    },
});
