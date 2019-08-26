import { combineReducers } from 'redux';
import excute from './excute';
import logs from './logs';

const appReducers = combineReducers({
    excute,
    logs
})

export default appReducers;