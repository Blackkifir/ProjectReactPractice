import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    items: [],
    isLoading: false,
    loading: 'loading' | 'fulfilled' | 'error'
};

export const axiosCatalog = createAsyncThunk(
    'catalog/axiosCatalogStatus',
    async (params) => {
        const { searchValue } = params
        const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products/?title=${searchValue}`);
        return data;
    }
);

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    redusers: {
        setItems(state, action) {
            state.items = action.payload;
        },
        setCurrentPages(state, action) {
            // state.currentPage = action.payload;
            console.log(action);
        }
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



export const { setItems, setCurrentPages } = catalogSlice.actions;
export default catalogSlice.reducer;