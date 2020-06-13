import * as React from 'react';
import { Link } from 'react-router-dom';
import { SignupFormValue } from '../../interfaces/signup-form-value';

interface SignupProps {
    handleSignup(value: SignupFormValue): void
}

const Signup = (props: SignupProps) => {

    const { handleSignup } = props;

    const [username, setUsername] = React.useState('');

    const [email, setemail] = React.useState('');

    const [password, setPassword] = React.useState('');

    const [confirmPassword, setConfirmPassword] = React.useState('');

    return (
        <div className='row d-flex justify-content-center'>
            
            <div className='col-md-4 col-md-offset-4'>
                <form className='login-form' onSubmit={e => {
                    e.preventDefault();
                handleSignup({username, email, password, confirmPassword});
                }}>
                    
                    {/**Username */}
                    <div className='form-group'>
                        <label htmlFor='inputUsername' className="font-weight-bold">Username</label>
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

                    {/**Email */}
                    <div className='form-group'>
                        <label htmlFor='inputEmail' className="font-weight-bold">Email</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='inputEmail' 
                            aria-describedby='emailhelp'
                            placeholder='Enter email'
                            value={email}
                            onChange={e => {
                                const value = e.target.value;
                                setemail(value);
                            }}
                        />
                    </div>

                    {/**Password */}
                    <div className='form-group'>
                        <label htmlFor='inputPassword' className="font-weight-bold">Password</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='inputPassword' 
                            aria-describedby='passwordhelp'
                            placeholder='Enter password'
                            value={password}
                            onChange={e => {
                                const value = e.target.value;
                                setPassword(value);
                            }}
                        />
                    </div>

                    {/**Confirm password */}
                    <div className='form-group'>
                        <label htmlFor='inputConfirmPassword' className="font-weight-bold">Confirm password</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='inputConfirmPassword' 
                            aria-describedby='confirmPasswordHelp'
                            placeholder='Enter confirm password'
                            value={confirmPassword}
                            onChange={e => {
                                const value = e.target.value;
                                setConfirmPassword(value);
                            }}
                        />
                    </div>

                    <div className='form-group'>
                        Already had an account? <Link to="/login">Login</Link>
                    </div>

                    <button type='submit' className='btn btn-primary w-100 mt-2'>Signup</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;