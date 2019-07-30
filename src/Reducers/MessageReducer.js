import { ADD_MESSAGE } from '../Actions/Actions';
const messages = (state = [], action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return [...state, action.payload];
        default:
            return state;
    }
};

export default messages;
