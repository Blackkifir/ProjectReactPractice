import { configureStore } from '@reduxjs/toolkit';
import catalog from './slices/catalogSlice';
import registration from '../store/slices/registrationSlice';

export const store = configureStore({
    reducer: {
        catalog,
        registration
    },
});
