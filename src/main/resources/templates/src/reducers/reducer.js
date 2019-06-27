import * as types from '../actions/actionTypes';

const initialState = {
    login: '',
    password: '',
    secondPassword: '',
    session: '',
    books: []
};

export function reduce(state = initialState, action) {
    switch (action.type) {
        case types.addSession:
            return ({
                ...state,
                session: action.payload
            });
        case types.addLogin:
            return ({
                ...state,
                login: action.payload
            });
        case types.addPassword:
            return ({
                ...state,
                password: action.payload
            });
        case types.addSecondPassword:
            return ({
                ...state,
                secondPassword: action.payload
            });
        case types.addBook:
            return ({
                ...state,
                books: [...state.books, action.payload]
            });
        default:
            return state;
    }
}

export function getUsersBooks(state) {
    return state.books;
}

export function getUser(state) {
    return {
        login: state.reduce.login,
        password: state.reduce.password,
        secondPassword: state.reduce.secondPassword,
        session: state.reduce.session
    }
}