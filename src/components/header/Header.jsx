import React, { useState } from "react";
import '../../styles/components/header/Header.scss';
import HeaderProgress from './HeaderProgress'


function Header() {

    const [progressList, setProgressList] = useState([
        { color: 'green', param: '20 из 30 шт', children: 'Новые звонки' },
        { color: 'yellow', param: '40%', children: 'Качество разговоров' },
        { color: 'red', param: '67%', children: 'Коверсия в заказы' },
    ]);

    return (
        <header className="header">
            <div className="container">
                <div className="header__date">Среда, 13 окт</div>
                {progressList.map(progress =>
                    <HeaderProgress
                        color={progress.color}
                        param={progress.param}
                        children={progress.children}
                        key={progress.param}
                    />
                )}
                <div className="header__people people">
                    <div className="people__search"></div>
                    <div className="people__title">ИП Сидоров Александр Михайлович</div>
                    <div className="people__icon"></div>
                </div>
            </div>
        </header>
    );
}

export default Header;