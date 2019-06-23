import React from 'react';
import { Autocomplete } from 'react-materialize';

class SearchForm extends React.Component {

    constructor(props) {
        super(props)
        this.findBookByName = this.findBookByName.bind(this)
        this.requestPopularBooks = this.requestPopularBooks.bind(this)
        this.state = {
            'popular': this.requestPopularBooks()
        }
    }

    findBookByName(event) {
        console.log('Searching....')
        event.preventDefault()
    }

    requestPopularBooks() {
        // TODO ajax request
        return { data: { Nastya: null, Super: null, Developer: null }, onChange: console.log }
    }

    componentDidMount() {
    }

    render() {
        return (
            <form onSubmit={this.findBookByName}>
            <Autocomplete
        options={this.state.popular}
        placeholder='Find somethink, or choose popular' />
            </form>
    )
    }

}

export default SearchForm;