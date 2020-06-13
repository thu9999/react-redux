import * as React from 'react';
import './App.scss';

export interface AppProps {
    compiler: string 
    framework: string 
}

const App = (props: AppProps) => {

    const { compiler, framework } = props;

    return <h1>App from { compiler } and { framework } change</h1>

}

export default App;