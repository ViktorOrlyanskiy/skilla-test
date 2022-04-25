import React, { } from 'react';
import '../../styles/components/header/HeaderProgress.scss'


function HeaderProgress({ children, param, color }) {
    return (
        <div className={`header__progress ${color}`}>
            <div className="progress__title">{children} <span>{param}</span></div>
            <div className="progress__back"></div>
            <div className="progress__front"></div>
        </div>
    );
}

export default HeaderProgress;