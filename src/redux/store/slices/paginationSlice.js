import { combineReducers, createSlice } from '@reduxjs/toolkit';


const initialState = {
    currentPage: 1,
    totalPage: 0
};


const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    redusers: {
        setCurrentPages(state, action) {
            state.currentPage = action.payload;
        }
    }
});


export const { setCurrentPages } = paginationSlice.actions;
export default paginationSlice.reducer;