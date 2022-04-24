import React, { useEffect, useState } from 'react';
import '../../styles/components/main-container/MenuCalls.scss';
import MySelect from '../UI/select/MySelect';



function MenuCalls({ changeSortMethod }) {

    const [sort, setSort] = useState('call-all');

    const sortCalls = (sort) => {
        setSort(sort)
    }

    useEffect(() => {
        changeSortMethod(sort)
    }, [sort])



    return (
        <div className="list-calls__menu">
            <div className="list-calls__container">
                <div className="menu-error">Все ошибки</div>
                <div className='menu-calls'>



                    <div className="menu-calls__title mc-type">
                        <MySelect
                            value={sort}
                            onChange={sortCalls}
                            options={[
                                { value: 'call-all', name: 'Все типы' },
                                { value: 'call-in', name: 'Входящие' },
                                { value: 'call-out', name: 'Исходящие' },
                            ]} /></div>

                    {/* <div className="menu-calls__title mc-time">Время</div> */}
                    <div className="menu-calls__title mc-employee">Сотрудник</div>
                    <div className="menu-calls__title mc-call">Звонок</div>
                    <div className="menu-calls__title mc-source">Источник</div>
                    <div className="menu-calls__title mc-grade">Оценка</div>
                    <div className="menu-calls__title mc-duration">Длительность</div>
                </div>
            </div>
        </div>
    );
}

export default MenuCalls;