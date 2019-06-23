import React from 'react';
import { Route } from 'react-router-dom';
import SearchEngine from './SearchEngine';

function Main() {

  return (
    <div className='min-height-block'>
      <h1>
        Hello, thx for visit our library
      </h1>
      <Route exact path='/'>
        <SearchEngine/>
      </Route>
    </div>
  )
}

export default Main;
