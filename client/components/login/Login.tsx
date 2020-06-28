import * as React from 'react';
import { Link } from 'react-router-dom';

interface LoginProps {
    error: string
    handleLogin(username: string, password: string): void
    handleGoogleLogin(): void
}

const Login = (props: LoginProps) => {

    const [ username, setUsername ] = React.useState('');

    const [ password, setPassword ] = React.useState('');

    const { handleLogin, handleGoogleLogin, error } = props;

    return (
        <div className='row d-flex justify-content-center align-items-center' onSubmit={e => {
            e.preventDefault();
            handleLogin(username, password);
        }}>
            <div className='col-md-4 col-md-offset-4'>
                <form className='login-form'>
                    <div className='form-group'>
                        <label htmlFor='inputUsername'>Username</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='inputUsername' 
                            aria-describedby='usernamehelp'
                            placeholder='Enter username'
                            value={username}
                            onChange={e => {
                                const value = e.target.value;
                                setUsername(value);
                            }}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='inputPassword'>Password</label>
                        <input
                            type='password' 
                            className='form-control' 
                            id='inputPassword' 
                            placeholder='Password'
                            value={password}
                            onChange={e => {
                                const value = e.target.value;
                                setPassword(value);
                            }}
                        />
                    </div>

                    <div className='form-group'>
                        Haven't had an account yet? <Link to="/signup">Signup</Link>
                    </div>

                    <button type='submit' className='btn btn-info w-100'>Submit</button>

                    {/**OpenID login */}
                    <div className='row mt-4'>

                        {/**Login by google account */}
                        <div className='col-6'>
                            <a className='btn btn-danger w-100' href="http://localhost:8080/api/users/google">Google +</a>
                        </div>
                        
                        {/**Login by facebook account */}
                        <div className='col-6'>
                            <button className='w-100 btn bg-primary text-white'>Facebook</button>
                        </div>
                    </div>

                    <div className='form-group text-danger mt-2'>{error}</div>

                </form>
            </div>
        </div>

    )
}

export default Login;