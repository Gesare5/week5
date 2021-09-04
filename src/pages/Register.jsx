// import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import { AppContext } from '../components/stateProvider';
// import styles
import '../styles/register.css';

const Register = () => {
    const { register, handleSubmit } = useForm();
    // const { setState } = useContext(AppContext);
    const history = useHistory();

    function registerUser({ email, password, confirmPassword }) {
        if (!email) {
            return alert(`please provide an email`);
        }
        if (password !== confirmPassword) {
            return alert(`passwords don't match`);
        }
        let userFound = localStorage.getItem(email);
        console.log(userFound);
        if (userFound) {
            return alert('this user has already been registered');
        }
        // create new user object and save it to local storage
        const newUser = {
            email: email,
            password: password,
            userId: Date.now(),
        };
        // save the users data for accessing later
        localStorage.setItem(email, JSON.stringify(newUser));

        alert('user registered');
        /* setState(prevValue => {
             return {
                 ...prevValue,
                 isLoggedIn: true,
                 userId: newUser.userId,
                 userEmail: newUser.email,
             };
         });*/
        history.push("/home");
    }

    return (
        <>
            <div className="register-container">
                <form className="main-form" onSubmit={handleSubmit(registerUser)}>
                    <h1 className="register">Register</h1>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            className='uname'
                            type='text'
                            name='email'
                            id='email'

                            {...register('email', { required: true })}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input
                            className='pass'
                            type='password'
                            name='password'
                            id='password'

                            {...register('password', { required: true })}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='passwordRepeat'>Confirm Password</label>
                        <input
                            className='pass'
                            type='password'
                            name='passwordRepeat'
                            id='passwordRepeat'

                            {...register('confirmPassword', { required: true })}
                        />
                    </div>
                    <button className='btn--form' type='submit'>
                        Register
                    </button>
                    <a className='login__link' href='/login'>
                        I already have an account
                    </a>
                    {/* <div className='m-t-lg'> */}
                    {/* <ul className='list-inline'>
                            <li>
                                <button className='btn--form' type='submit'>
                                    Register
                                </button>
                            </li>
                            <li>
                                <a className='signup__link' href='/login'>
                                    I already have an account
                                </a>
                            </li>
                        </ul> */}
                    {/* </div> */}
                </form>
            </div>
        </>
    );
};


export default Register;