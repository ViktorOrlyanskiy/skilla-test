// фильтрует массив по статусу и направлению вызова
export const sortCalls = (array, sort) => {
    if (array !== undefined && sort !== undefined) {

        if (sort === 'call-all') { return array }

        else if (sort === 'call-in') {
            return array.filter(item => item.in_out === 1)
        }
        else if (sort === 'call-out') {
            return array.filter(item => item.in_out === 0)
        }

    }
}