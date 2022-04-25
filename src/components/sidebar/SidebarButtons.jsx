import React from 'react';
import '../../styles/components/sidebar/SidebarButtons.scss';
import Button from './Button';


function SidebarButtons() {
    return (
        <div className="sidebar-buttons">
            <Button children={'Добавить заказ'} icon={'btn-plus'} />
            <Button children={'Оплата'} icon={'btn-point'} />
        </div>
    );
}

export default SidebarButtons;