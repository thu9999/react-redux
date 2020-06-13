import * as React from 'react';
import './Hello.scss';

export interface HelloProps {
    compiler: string 
    framework: string 
}

const Hello = (props: HelloProps) => {

    const { compiler, framework } = props;

    return <h1>Hello from { compiler } and { framework }. Hi there!</h1>

}

export default Hello;