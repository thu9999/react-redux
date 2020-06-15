import * as React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect, } from 'react-router-dom';
import SignupFormValue from '../interfaces/signup-form-value';
import AuthService from './../services/auth';

export interface PRoute {
    children: React.ReactNode
    path: string
}

const Login = React.lazy(() => import('./login/Login'));

const Signup = React.lazy(() => import('./signup/Signup'));

const Home = React.lazy(() => import('./home/Home'));

export const fakeAuth = {
    isAuthenticated: localStorage.getItem('isLogin') === 'true' ? true : false,

    authenticate(cb: any) {
        fakeAuth.isAuthenticated = true;
        localStorage.setItem('isLogin', 'true');
        setTimeout(cb, 100);
    },

    signout(cb: any) {
        fakeAuth.isAuthenticated = false;
        localStorage.setItem('isLogin', 'false');
        setTimeout(cb, 100);
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

export interface SignupErrorInterface {
    username?: string
    email?: string 
    password?: string 
    confirmPassword?: string
}

const App = () => {

    const [ signupError, setSignupError ] = React.useState<SignupErrorInterface>({})

    const onSignup = (value: SignupFormValue) => {
        // Clear signup error
        setSignupError({});

        AuthService.signup(value)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            setSignupError(err.response.data.errors);
        })
    }

    const onLogin = (username: string, password: string) => {
        console.log(username, password)
    };

    return (    
        <Router>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path='/login'>
                        <Login handleLogin={onLogin} />
                    </Route>

                    <Route exact path='/signup'>
                        <Signup handleSignup={onSignup} errors={signupError} />
                    </Route>
                    
                    <PrivateRoute path="/home">
                        <Home />
                    </PrivateRoute>

                    <Redirect from="/" to="/login"  />
                </Switch>
            </React.Suspense>
        </Router>
    );
}

export default App;
