import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const axiosCatalog = createAsyncThunk(
    'catalog/axiosCatalogStatus',
    async () => {
        const { data } = await axios.get('https://api.escuelajs.co/api/v1/users');
        return data;
    }
);
const initialState = {
    items: [],
    isLoading: false,
    loading: 'loading' | 'fulfilled' | 'error'
};

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    redusers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(axiosCatalog.pending, (state) => {
            state.status = 'loading';
            state.items = [];
            console.log('loading');
        })
        builder.addCase(axiosCatalog.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.items = action.payload;
            console.log('fulfilled');
        })
        builder.addCase(axiosCatalog.rejected, (state) => {
            state.status = 'error';
            state.items = [];
            console.log('error');
        })
    }
});



export const { setItems } = catalogSlice.actions;
export default catalogSlice.reducer;