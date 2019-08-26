import * as Types from '../constants/ActionTypes';

let initialState = {
    method: 'GET',
    url: '',
    amount: 0,
    expectedTime: 0,
    code: '',
    body: '',
    click: 0,
    excute: false,
};

const excute = (state = initialState, action) => {
    switch (action.type) {
        case Types.ON_EXCUTE:
            return Object.assign({}, state, {
                method: action.method,
                url: action.url,
                amount: +action.amount,
                expectedTime: +action.expectedTime,
                code: action.code,
                body: action.body,
                click: new Date().getTime(),
                excute: true
            });

        case Types.ON_EXCUTE_DONE:
            return Object.assign({}, state, {
                excute: false
            });

        default: return state;
    }
}

export default excute;