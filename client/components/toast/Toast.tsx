import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastHeader from 'react-bootstrap/ToastHeader';
import ToastBody from 'react-bootstrap/ToastBody';
import './Toast.scss';

interface ToastProps {
    message: string 
    duration: number
}

const ToastElement = (props: ToastProps) => {

    const [show, setShow] = useState(true);

    const {message, duration} = props;

    useEffect(() => {
        const timeShow = setTimeout(() => {
            setShow(false);
        }, duration)
        return () => {
            clearTimeout(timeShow);
        };
    }, [])

    return show && (
        <div className='toast-container'>
            <Toast 
                show={show}
                animation={true} 
                onClose={() => setShow(false)}
            >
            <ToastHeader>
                <strong className='mr-auto'>Welcome!</strong>
            </ToastHeader>
            <ToastBody>{message}</ToastBody>
            </Toast>
        </div>
    );
}

export default ToastElement;