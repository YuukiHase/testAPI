import * as Types from '../constants/ActionTypes';

let initialState = [];

const logs = (state = initialState, action) => {
    switch (action.type) {
        case Types.CREATE_LOGS:
            state = [];
            for (let i = 0; i < action.amount; i++) {
                state.push({
                    name: `${i + 1}`,
                    result: '',
                    time: '',
                    avg: ''
                });
            }
            return [...state];

        case Types.UPDATE_LOGS:
            state[action.index] = {
                name: `${action.index + 1}`,
                result: action.result,
                time: action.time,
                avg: 0
            }
            return [...state];

        case Types.CAL_AVG:
            let total = 0;
            for (let i = 0; i < state.length; i++) {
                total = total + (+state[i].time);
            }

            let avg = (total / (state.length + 1)).toFixed(0);

            for (let i = 0; i < state.length; i++) {
                state[i].avg = avg;
            }
            return [...state];

        default: return state;
    }
}

export default logs;