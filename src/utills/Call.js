// получает корректную дату
export const handlesDate = (date) => {
    const [, time] = date.split(' ');
    return time.replace(/.{3}$/, '')
}

// получает корректную продолжительность
export const hendlesDuration = (num) => {
    const min = Math.floor(num / 60);
    const sec = num % 60;

    const normalizeNum = function (num) {
        return (num < 10) ? '0' + num : num;
    }

    return `${normalizeNum(min)}:${normalizeNum(sec)}`;
}

// обрабатывает статус звонка
export const handlesCallStatus = (callDirection, callStatus) => {

    if (callDirection === 0) {
        if (callStatus === 'Дозвонился') { return 'green' }
        return 'red'
    }
    return 'blue'
}

// обрабатывает имя контакта
export const handlesContact = ([name, company, phoneNumber]) => {
    if (name !== '') {
        return (
            <div>
                {name}
                <span>{company}</span>
            </div>

        )
    }
    else {
        return normalizePhoneNumber(phoneNumber)
    }

    function normalizePhoneNumber(str) {
        return `
                + ${str[0]}
        (${str[1]}${str[2]}${str[3]}) 
         ${str[4]}${str[5]}${str[6]}
        -${str[7]}${str[8]}
        -${str[9]}${str[10]} `
    }
}

// обрабатывает источник поступления звонка
export const handlesFromSite = (num) => {
    if (num === 1) {
        return true
    }
}