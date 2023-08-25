import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    password: '',
    emailError: 'Email не может быть пустым',
    passwordError: 'Password не может быть пустым',
    passwordDirty: false,
    emailDirty: false,
    formValid: false
};


export const registrationSlice = createSlice({
    name: 'LoginAndPassword',
    initialState,
    reducers: {
        setEmail(state, action) {
            state.email = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
        setEmailError(state, action) {
            state.emailError = action.payload;
        },
        setPasswordError(state, action) {
            state.passwordError = action.payload;
        },
        setEmailDirty(state, action) {
            state.emailDirty = action.payload;
        },
        setPasswordDirty(state, action) {
            state.passwordDirty = action.payload;
        },
        setFormValid(state, action) {
            state.formValid = action.payload;
        }
    }
})


export const { setEmail, setPassword,
    setEmailError, setPasswordError,
    setEmailDirty, setPasswordDirty,
    setFormValid } = registrationSlice.actions;
export default registrationSlice.reducer;