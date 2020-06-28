import * as React from 'react';
import './App.scss';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import SignupFormValue from '../interfaces/signup-form-value';
import AuthService from './../services/auth';
import signupFormValidation from './sisgnup-form-validation';
import SignupFormErrors from '../interfaces/signup-form-error';
import PRoute from '../interfaces/private-route';
import { useDispatch } from 'react-redux';
import { FLASH_MESSAGE } from '../redux/reducers/flash-message';
import { flashMessageAction } from '../redux/actions/flash-message-action';
import { sessionTokenAction } from '../redux/actions/session-action';
import http from '../http-common';
import { AxiosRequestConfig } from 'axios';

const Login = React.lazy(() => import('./login/Login'));

const Signup = React.lazy(() => import('./signup/Signup'));

const Home = React.lazy(() => import('./home/Home'));

export const fakeAuth = {
    isAuthenticated: localStorage.getItem('isLogin') === 'true' ? true : false,

    authenticate(token: string, cb: any) {
        fakeAuth.isAuthenticated = true;
        localStorage.setItem('token', token);
        localStorage.setItem('isLogin', 'true');

        // Add token to header of axios request
        http.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                config.headers['Authorization'] = `Bearer ${token}`;
                return config;
            },
            err => {
                return Promise.reject(err);
            }
        );

        cb();
    },

    signout(cb: any) {
        fakeAuth.isAuthenticated = false;
        localStorage.removeItem('isLogin');
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        cb();
    }
}

export const PrivateRoute = ({ children, ...rest }: PRoute) => {
    return (
        <Route
            { ...rest }
            render={({ location }) => 
                fakeAuth.isAuthenticated ? (
                    children
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: location }
                    }}/>
                )   
            }
        />
    )
}

export const useQuery = () => new URLSearchParams(useLocation().search);

const App = () => {

    const [ signupError, setSignupError ] = React.useState<SignupFormErrors>({})

    const [ loginError, setLoginError ] = React.useState<string>('');

    const history = useHistory();

    const dispatch = useDispatch();

    const onSignup = (value: SignupFormValue) => {
        // Clear signup error
        setSignupError({});

        // Validation
        const { isValid, errors } = signupFormValidation(value);

        if(!isValid) {
            setSignupError(errors);
        } else {
            AuthService.signup(value)
            .then(res => {
                if(res.data.success) {
                    dispatch(flashMessageAction(FLASH_MESSAGE, 'Successfully!'));

                    // Redirect to login page
                    history.push('/login');
                   
                }
            })
            .catch(err => {
                if(err) {
                    setSignupError(err.response.data.errors);
                }
            })
        }
    };

    const query = useQuery();

    const token = query.get('token');

    React.useEffect(() => {
        /**
         * Check if redirect login from server contains token
         */
        if(token) {
            console.log({token})
            fakeAuth.authenticate(token, () => {
                history.push('/home');
            });
        } else {
            // Check token from localStorage
            const tk = localStorage.getItem('token');
            if(tk) {
                fakeAuth.authenticate(tk, () => {
                    history.push('/home');
                })
            }
        }
    }, [token])



    /**
     * Login using username and password
     * @param username 
     * @param password 
     */
    const onLogin = (username: string, password: string) => {
        AuthService.login({username, password}).then(res => {
            if(res.data.success) {
                const token = res.data.token;
                // Save token in local storage
                localStorage.setItem('token', token);

                fakeAuth.authenticate(token, () => {
                    // Update token in redux
                    dispatch(sessionTokenAction(token));

                    dispatch(flashMessageAction(FLASH_MESSAGE, 'Login successfully!'));

                    history.push('/home');
                });
            }
        }).catch(err => {
            const error = err.response.data.error;
            setLoginError(error);
        })
    };

    {/**Logout */}
    const onLogout = () => {
        AuthService.logout()
            .then(res => {
                if(res.data.success) {
                    fakeAuth.signout(() => {
                        history.push('/login');
                    })  
                } else {
                    console.log('Something went wrong');
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (    
        <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path='/login'>
                    <Login 
                        handleLogin={onLogin}
                        error={loginError} 
                    />
                </Route>

                <Route exact path='/signup'>
                    <Signup handleSignup={onSignup} errors={signupError} />
                </Route>
                
                <PrivateRoute path="/home">
                    <Home handleLogout={onLogout}/>
                </PrivateRoute>

                <Redirect from="/" to="/login"  />
            </Switch>
        </React.Suspense>
    );
}

export default App;
