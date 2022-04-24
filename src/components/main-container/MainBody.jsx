import React, { useState } from 'react';
import '../../styles/components/main-container/MainBody.scss';
import ListCalls from './ListCalls';
import MenuCalls from './MenuCalls';

function MainBody() {

    const [sortMethod, setSortMethod] = useState('call-all');

    const changeSortMethod = (method) => {
        setSortMethod(method)
    }

    return (
        <main className="main-body">
            <MenuCalls changeSortMethod={changeSortMethod} />
            <ListCalls sort={sortMethod} />
        </main>
    );
}

export default MainBody;