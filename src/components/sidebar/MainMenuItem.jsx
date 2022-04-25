import React from 'react';
import '../../styles/components/sidebar/MainMenuItem.scss';
import Icons from '../UI/icons/Icons';


function MainMenuItem({ children, icon, isActive }) {

    const checkStatusActive = (isActive) => {
        if (isActive) return 'active';
        return ''
    }

    return (
        <div className={`item ${checkStatusActive(isActive)}`}>
            <div className="item__icon">
                <Icons icon={icon} />
            </div>
            <div className="item__title">{children}</div>
            <div className="item__dot"></div>
        </div>
    );
}

export default MainMenuItem;
