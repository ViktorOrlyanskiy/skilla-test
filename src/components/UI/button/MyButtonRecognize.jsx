import React from 'react';
import cl from './MyButtonRecognize.module.scss';


const MyButtonRecognize = ({ children }) => {


    return (
        <button className={cl.btn}>{children}</button>
    )
}

export default MyButtonRecognize;