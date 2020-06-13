import * as React from 'react';
import { Link } from 'react-router-dom';

interface LoginProps {
    handleLogin(username: string, password: string): void
}

const Login = (props: LoginProps) => {

    const [ username, setUsername ] = React.useState('');

    const [ password, setPassword ] = React.useState('');

    const { handleLogin } = props;

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

                    <button type='submit' className='btn btn-primary w-100'>Submit</button>
                </form>
            </div>
        </div>

    )
}

export default Login;