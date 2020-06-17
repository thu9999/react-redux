import * as React from 'react';
import { Link } from 'react-router-dom';
import SignupFormValue  from '../../interfaces/signup-form-value';
import TextField from '../text-field/TextField';
import SignupFormErrors from '../../interfaces/signup-form-error';

interface SignupProps {
    errors: SignupFormErrors
    handleSignup(value: SignupFormValue): void
}

const Signup = (props: SignupProps) => {

    const { handleSignup, errors } = props;

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
                    <TextField
                        id='inputUsername'
                        error={errors?.username}
                        label='Username' 
                        placeholder='Enter username'
                        type='text'
                        value={username}
                        handleChange={(value) => {
                            setUsername(value)
                        }}
                    />

                    {/**Email */}
                    <TextField
                        id='inputEmail'
                        error={errors?.email}
                        label='Email' 
                        placeholder='Enter email'
                        type='text'
                        value={email}
                        handleChange={(value) => {
                            setemail(value)
                        }}
                    />

                    {/**Password */}
                    <TextField
                        id='inputPassword'
                        error={errors?.password}
                        label='Password' 
                        placeholder='Enter password'
                        type='password'
                        value={password}
                        handleChange={(value) => {
                            setPassword(value)
                        }}
                    />

                    {/**Confirm password */}
                    <TextField
                        id='inputConfirmPassword'
                        error={errors?.confirmPassword}
                        label='Confirm password' 
                        placeholder='Enter confirm password'
                        type='password'
                        value={confirmPassword}
                        handleChange={(value) => {
                            setConfirmPassword(value)
                        }}
                    />


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