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





        // if (calls !== undefined) {
        //     return calls.filter(call => {
        //         if (
        //             call.in_out === filter.callDuration
        //             && filter.callDuration === 1) {
        //             return true
        //         }

        //         else if (
        //             filter.callDuration === 0
        //             && filter.callStatus === 'Дозвонился'
        //             && call.in_out === filter.callDuration
        //             && call.status === filter.callStatus) {
        //             return true
        //         }

        //         else if (
        //             filter.callDuration === 0
        //             && filter.callStatus === 'Не дозвонился'
        //             && call.in_out === filter.callDuration
        //             && call.status === filter.callStatus) {
        //             return true
        //         }
        //     })
        // }
    }
}