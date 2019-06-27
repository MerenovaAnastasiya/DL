import * as types from '../actions/actionTypes';

const initialState = {
    books: [
        {
            title: 'Martin Eden',
            author: 'Jack London',
            description:
                'Jack London’s Martin Eden is a rare book that would indulge any reader from page one.' +
                ' It is also rare since it does resemble the typical American writing as one can observe in the writing styles of American writers of early twentieth century.' +
                ' It’s a powerful book, one that will definitely have an impact on its readers and will leave a reader thoughtful in the end.',
            image: 'images/MartinEden.jpg',
            isbn: '000000001'
        },
        {
            title: 'Martin Eden',
            author: 'Jack London',
            description:
                'Jack London’s Martin Eden is a rare book that would indulge any reader from page one.' +
                ' It is also rare since it does resemble the typical American writing as one can observe in the writing styles of American writers of early twentieth century.' +
                ' It’s a powerful book, one that will definitely have an impact on its readers and will leave a reader thoughtful in the end.',
            image: 'images/MartinEden.jpg',
            isbn: '000000002'
        },
        {
            title: 'Martin Eden',
            author: 'Jack London',
            description:
                'Jack London’s Martin Eden is a rare book that would indulge any reader from page one.' +
                ' It is also rare since it does resemble the typical American writing as one can observe in the writing styles of American writers of early twentieth century.' +
                ' It’s a powerful book, one that will definitely have an impact on its readers and will leave a reader thoughtful in the end.',
            image: 'images/MartinEden.jpg',
            isbn: '000000003'
        }
    ]
};

export function app(state = initialState, action) {
    switch (action.type) {
        case types.addAppBook:
            return ({
                ...state,
                books: [...state.books, action.payload]
            });
        default:
            return state;
    }
}

export function getAppBooks(state) {
    return state.app.books;
}