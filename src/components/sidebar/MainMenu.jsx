import React, { useState } from 'react';
import '../../styles/components/sidebar/MainMenu.scss';
import MainMenuItem from './MainMenuItem';

function MainMenu() {

    const [list, setList] = useState([
        { icon: 'totals', title: 'Итоги', isActive: false },
        { icon: 'orders', title: 'Заказы', isActive: false },
        { icon: 'mail', title: 'Сообщения', isActive: false },
        { icon: 'calls', title: 'Звонки', isActive: true },
        { icon: 'people', title: 'Контрагенты', isActive: false },
        { icon: 'documents', title: 'Документы', isActive: false },
        { icon: 'perm', title: 'Испольнители', isActive: false },
        { icon: 'briefcase', title: 'Отчеты', isActive: false },
        { icon: 'library', title: 'База знаний', isActive: false },
        { icon: 'settings', title: 'Настройки', isActive: false },
    ]);


    return (
        <nav className="main-menu">
            <ul className='main-menu__list'>
                {list.map(item =>
                    <li className="main-menu__item" key={item.title}>
                        <MainMenuItem
                            icon={item.icon}
                            children={item.title}
                            isActive={item.isActive}

                        />
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default MainMenu;