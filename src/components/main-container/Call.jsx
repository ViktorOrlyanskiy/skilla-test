import React, { useState, useEffect } from 'react';
import '../../styles/components/main-container/Call.scss';
import { handlesDate, hendlesDuration, handlesCallStatus, handlesFromSite, handlesContact } from '../../utills/Call';
import MyButtonRecognize from '../UI/button/MyButtonRecognize';



function Call({ ...props }) {

    const [call, setCall] = useState();
    const [contact, setContact] = useState();

    useEffect(() => {
        setCall(props.call)
        setContact([props.call.contact_name, props.call.contact_company, props.call.from_number]);

    }, [props.call]);


    return (

        <li className='list__item'>
            {(call !== undefined)
                ? <div className="call">
                    <div className={`call__type call__type_${handlesCallStatus(call.in_out, call.status)}`}></div>
                    <div className="call__time">{handlesDate(call.date)}</div>
                    <div className="call__employee">
                        <img src={`${call.person_avatar}`} alt="avatar" />
                    </div>
                    <div className={`call__site call__site_${handlesFromSite(call.from_site)}`}></div>
                    <div className="call__call">{handlesContact(contact)}</div>
                    <div className="call__source">{call.source}</div>
                    <div className="call__grade">
                        <MyButtonRecognize children={'Распознать'} />
                    </div>
                    <div className="call__duration">{hendlesDuration(call.time)}</div>
                </div>
                : ''
            }
        </li>
    )
}

export default Call;