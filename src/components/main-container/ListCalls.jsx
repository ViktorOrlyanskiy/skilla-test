import React, { useEffect, useState } from 'react';
import '../../styles/components/main-container/ListCalls.scss';
import Call from '../main-container/Call'
import { getCallsArray } from '../../utills/callArrayGeneration';
import { sortCalls } from '../../utills/ListCalls';
import Loader from '../UI/Loader/Loader';

function ListCalls({ sort }) {

    const [calls, setCalls] = useState();
    const [sortMethod, setSortMethod] = useState('call-all');
    const [isLoading, setIsLoading] = useState(false);

    // имитирует ответ сервера
    const renderCalls = () => {
        // setIsLoading(true)
        setTimeout(() => {
            if (calls === undefined) {
                setCalls(getCallsArray())
            }
            setIsLoading(false)
        }, 2000)
    }


    // const renderCalls = () => {
    //     if (calls === undefined) setCalls(getCallsArray())
    // }
    // renderCalls()

    useEffect(() => {
        setIsLoading(true)
        setSortMethod(sort)
        renderCalls() // имитирует ответ сервера
    }, [sort])

    console.log(sortCalls(calls, sortMethod))

    return (

        <ul className="list-calls">
            {isLoading
                ? <Loader />
                : (calls !== undefined)
                    ? sortCalls(calls, sortMethod).map(call => <Call call={call} key={call.id} />)
                    : ''
            }
        </ul>


        // <Loader />
        // <ul className="list-calls">
        //     {(calls !== undefined)
        //         ? sortCalls(calls, sortMethod).map(call => <Call call={call} key={call.id} />)
        //         : <Loader />
        //     }
        // </ul>
    );
}

export default ListCalls;