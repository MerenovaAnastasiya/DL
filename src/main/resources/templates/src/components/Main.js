import React from 'react';
import { Route } from 'react-router-dom';
import SearchForm from './SearchForm';
function Main() {

  return (
    <div className='min-height-block'>
      <h1>
        Hello, thx for visit our library
      </h1>
      <Route exact path='/'>
        <SearchForm/>
      </Route>
    </div>
  )
}

export default Main;
