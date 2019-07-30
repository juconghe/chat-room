import { combineReducers } from 'redux';

import messages from './MessageReducer';
const reducers = combineReducers({
    messages
});

export default reducers;
