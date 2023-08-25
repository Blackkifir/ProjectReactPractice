import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Registration.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setPassword,
         setEmailError, setPasswordError,
         setEmailDirty, setPasswordDirty,
         setFormValid} from '../../redux/store/slices/registrationSlice';

const Registration = () => {
const dispatch = useDispatch();
const {email, password,
       emailError, passwordError,
       emailDirty, passwordDirty, 
       formValid} = useSelector((state) => state.registration);


const onChangeEmail = (e) => {
  dispatch(setEmail(e.target.value));
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!re.test(String(e.target.value).toLowerCase())) {
      dispatch(setEmailError('Не коректный email'));
  } else {
    dispatch(setEmailError(''));
  }
};

const onChangePassword = (e) => {
  dispatch(setPassword(e.target.value));
  if (e.target.value.length < 3 || e.target.value.length > 8) {
    dispatch(setPasswordError('Password должен быть длинее 3 и меньше 8'))
    if (!e.target.value) {
      dispatch(setPasswordError('Password не может быть пустым'));
    }
  } else {
    dispatch(setPasswordError(''));
  }
}

useEffect(() => {
    if (emailError || passwordError) {
      dispatch(setFormValid(false));
    } else {
      dispatch(setFormValid(true));
    }
}, [emailError, passwordError]);

const blurHandler = (e) => {
  if (e.target.name === 'email') {
     dispatch(setEmailDirty(true));
  }
  if (e.target.name === 'password') {
     dispatch(setPasswordDirty(true)); 
  }
}


    return (
        <>
          <form className={styles.form}>
            <div className={styles.formBlock}>
            <Link to='/home'>
        <button className={styles.closeReg}>&times;</button>
        </Link>
            <h1>Регистрация</h1>
            {(emailError && emailDirty) && <span className={styles.errorColor}>{emailError}</span>}
            <input onBlur={blurHandler}
                   onChange={onChangeEmail}
                   value={email}
                   name='email'
                   className='email'
                   type='text'
                   placeholder='Enter your email...'/>
            {(passwordError && passwordDirty) && <span className={styles.errorColor}>{passwordError}</span>}
            <input onBlur={blurHandler}
                   onChange={onChangePassword}
                   value={password}
                   name='password'
                   className='password'
                   type='password'
                   placeholder='Enter your password...'/>
            <Link to='/home'>
            <button className={styles.btnRegistration} disabled={!formValid} type='submit'>Registration</button>
            </Link> 
            </div>
          </form>
        </>
    );
};

export default Registration;