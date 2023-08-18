import { configureStore } from '@reduxjs/toolkit';
import catalog from './slices/catalogSlice';

export const store = configureStore({
    reducer: {
        catalog
    },
});
