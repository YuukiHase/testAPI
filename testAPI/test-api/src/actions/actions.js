import * as types from '../constants/ActionTypes';

export const actOnExcute = (method, url, amount, expectedTime, code, body) => {
    return {
        type: types.ON_EXCUTE,
        method,
        url,
        amount,
        expectedTime,
        code,
        body
    }
}

export const actCreateLogs = (amount) => {
    return {
        type: types.CREATE_LOGS,
        amount
    }
}

export const actUpdateLogs = (result, time, index) => {
    return {
        type: types.UPDATE_LOGS,
        result,
        time,
        index
    }
}

export const actExcuteDone = () => {
    return {
        type: types.ON_EXCUTE_DONE
    }
}

export const actCalAvg = () => {
    return {
        type: types.CAL_AVG
    }
}