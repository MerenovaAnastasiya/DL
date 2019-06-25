import React from 'react';
import SearchForm from './SearchForm';

function Main() {
    // {/*Photo by Patrick Tomasso on Unsplash*/}

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

export default Main;
