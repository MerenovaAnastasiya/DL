import * as types from '../actions/actionTypes';

const initialState = {
    session: '',
    books: []
};

export function user(state = initialState, action) {
    switch (action.type) {
        case types.addSession:
            return ({
                ...state,
                session: action.payload
            });
        case types.addUserBook:
            return ({
                ...state,
                books: [...state.books, action.payload]
            });
        default:
            return state;
    }
}

export function getUsersBooks(state) {
    return state.user.books;
}

export function getUser(state) {
    return {
        session: state.user.session
    }
}