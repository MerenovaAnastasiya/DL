import * as types from './actionTypes';

export function addLogin(login) {
    return {
        type: types.addLogin,
        payload: login
    };
}

export function addPassword(password) {
    return {
        type: types.addPassword,
        payload: password
    }
}

export function addSecondPassword(secondPassword) {
    return {
        type: types.addSecondPassword,
        payload: secondPassword
    }
}

export function addSession(session) {
    return {
        type: types.addSession,
        payload: session
    }
}