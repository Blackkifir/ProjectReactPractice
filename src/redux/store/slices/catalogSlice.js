import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    items: [],
    isLoading: false,
    loading: 'loading' | 'fulfilled' | 'error',
    searchValue: '',

    page: 1,
    contentPerPage: 20,
    totalPages: 0,
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
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(axiosCatalog.pending, (state) => {
            state.isLoading = true;
            state.status = 'loading';
            state.items = [];
            console.log('loading');
        })
        builder.addCase(axiosCatalog.fulfilled, (state, action) => {
            state.isLoading = false;
            state.status = 'fulfilled';
            if (action.payload) {
                state.items = action.payload;
                console.log('fulfilled');
            }
        })
        builder.addCase(axiosCatalog.rejected, (state) => {
            state.status = 'error';
            state.items = [];
            console.log('error');
        })
    }
});



export const { setItems, setSearchValue, setPage } = catalogSlice.actions;
export default catalogSlice.reducer;

// / page — текущая страница, на которой находится пользователь;
// totalPages — общее количество сгенерированных страниц;
// firstContentIndex — первый индекс для метода .slice();
// lastContentIndex — последний индекс для метода .slice();
// nextPage — функция для перехода на одну страницу вперед;
// prevPage — функция для перехода на одну страницу назад;
// setPage — функция для перехода на определенную страницу.