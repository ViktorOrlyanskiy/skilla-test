import React from 'react';
import '../../styles/components/sidebar/Button.scss';

function Button({ children, icon }) {

    return (
        <div className="button">
            <div className="button__title">{children}</div>
            <div className={`button__icon ${icon}`}></div>
        </div>
    );
}

export default Button;