import React from 'react';
import { Navbar, Footer } from 'react-materialize';
import RegisterForm from './components/RegisterForm';
import Main from './components/Main';
import { Route, Switch, Link } from 'react-router-dom';

function App() {
    return (
      <div className='app'>
        <Navbar brand={<Link to='/'>DL </Link>}
          alignLinks="right">
          <Link to='/register'> Registration </Link>
          <Link to='/'> Home </Link>
        </Navbar>
        <div className='container'>
          <Switch>
            <Route path='/register' component={RegisterForm} />
            <Route path='/' component={Main} />
          </Switch>
        </div>
        <Footer
          copyrights="&copy 2019 Copyright Text"
          links={<ul />}
          className="example"
        >
          <h5 className="white-text">
            Footer Content
          </h5>
          <p className="grey-text text-lighten-4">
            You can use rows and columns here to organize your footer content.
          </p>
        </Footer>
      </div>
    );
}

export default App;