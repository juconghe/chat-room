import { ADD_MESSAGE, REST_MESSAGE } from '../Actions/Actions';
const messages = (state = [], action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return [...state, action.payload];
        case REST_MESSAGE:
            return [];
        default:
            return state;
    }
};

export default messages;
