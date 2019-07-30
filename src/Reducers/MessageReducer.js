const data = [
    {
        id: 1,
        message: 'Hello',
        fromUser: 'juconghe'
    },
    {
        id: 2,
        message: 'Hello',
        fromUser: 'mohan'
    },
    {
        id: 3,
        message: 'how are you?',
        fromUser: 'juconghe'
    },
    {
        id: 4,
        message: 'I am fine thank you, and you?',
        fromUser: 'mohan'
    },
    {
        id: 5,
        message: 'me too, nice to meet you',
        fromUser: 'juconghe'
    },
    {
        id: 6,
        message: 'nice to meet you too',
        fromUser: 'mohan'
    },
    {
        id: 7,
        message: 'Have a good day',
        fromUser: 'juconghe'
    },
    {
        id: 8,
        message: 'same to you',
        fromUser: 'mohan'
    },
    {
        id: 9,
        message: 'bye',
        fromUser: 'juconghe'
    }
];

const messages = (state = data, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default messages;
