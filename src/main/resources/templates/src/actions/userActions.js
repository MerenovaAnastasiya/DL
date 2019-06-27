import * as types from './actionTypes';

export function addSession(session) {
    return {
        type: types.addSession,
        payload: session
    }
}