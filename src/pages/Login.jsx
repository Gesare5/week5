import React from 'react';
// import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import '../styles/login.css';
// import { AppContext } from '../components/stateProvider';

function Login() {
    // const { setState } = useContext(AppContext);
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const login = ({ email, password }) => {
        // get the users data
        const user = localStorage.getItem(email);

        if (!user) {
            return alert('An account for this email was not found');
        }

        const userdata = JSON.parse(user);
        console.log(userdata);

        if (password !== userdata.password) {
            return alert('email or password was incorrect');
        }

        alert('login successfull');
        /* setState(prevstate => {
             return {
                 ...prevstate,
                 isLoggedIn: true,
                userId: userdata.userId,
                userEmail: userdata.email,
            };
        });*/
        history.push("/home");
    };
    return (
        <div className="login-container">

            <form onSubmit={handleSubmit(login)} className="login-form">
                <h1 className="login">Login</h1>
                <div>
                    <input
                        className="unn"
                        type='text'
                        placeholder='email'
                        required
                        {...register('email')}
                    />
                </div>
                <div>
                    <input
                        className="passw"
                        type='password'
                        placeholder='password'
                        required
                        {...register('password')}
                    />
                </div>
                <input className="submit" type='submit' value='Login' />
            </form>
        </div>
    );
}

export default Login;