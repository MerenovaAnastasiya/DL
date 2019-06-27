import React from 'react';
import SearchForm from '../components/SearchForm';

class Main extends React.Component{
    // {/*Photo by Patrick Tomasso on Unsplash*/}

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='min-height-block flex-column background-image-shelf'>
                <div className='container'>
                    <h1 className='white-text'>
                        Hello, thx for visit our library
                    </h1>
                    <SearchForm/>
                </div>
            </div>
        )
    }
}

export default Main;
