export const getCallsArray = () => {
    const callsArray = [];

    for (let i = 0; i < 50; i++) {
        const [name, company] = getContact();
        const call = {
            "id": 488812 + (i + 1),
            "partnership_id": "136",
            "date": "2022-04-19 12:10:08",
            "date_notime": "2022-04-19",
            "time": getRandomInt(1, 3599),
            "from_number": "79315xxxxxx",
            "from_extension": "",
            "to_number": "sip:hr_xxx@vpbx400105738.mangosip.ru",
            "to_extension": "671",
            "is_skilla": 0,
            "status": getStatus(),
            "record": "MToxMDA2NzYxNToxNDM0ODcwNDQzMzow",
            "line_number": "sip:userxx@vpbx400105738.mangosip.ru",
            "in_out": getRandomInt(0, 1),
            "from_site": getRandomInt(0, 1),
            "source": "Rabota.ru",
            "errors": [],
            "disconnect_reason": "",
            "results": [],
            "stages": [],
            "contact_name": name,
            "contact_company": company,
            "person_id": 4042,
            "person_name": "Татьяна",
            "person_surname": "Михалкович",
            "person_avatar": "https://lk.skilla.ru/img/noavatar.jpg"
        }

        callsArray.push(call)
    }
    return callsArray;




    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getStatus() {
        const flag = getRandomInt(0, 1);
        return (flag === 1) ? 'Дозвонился' : 'Не дозвонился'
    }
    function getContact() {
        const flag = getRandomInt(0, 10);
        return (flag === 5) ? ['Сергей Петров', 'ООО "Компания"'] : ['', '']
    }
}

