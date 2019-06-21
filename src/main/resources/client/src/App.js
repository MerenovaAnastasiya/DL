import React from 'react';
import { Navbar, Footer, NavItem } from 'react-materialize';
import RegisterForm from './components/RegisterForm';
import './App.css';

function App() {
    return (
      <div className="App">
        <Navbar brand={<a />} alignLinks="right">
          <NavItem href="register">
            Getting started
          </NavItem>
          <NavItem href="">
            Components
          </NavItem>
        </Navbar>
        <RegisterForm/>
        <Footer
          copyrights="&copy 2019 Copyright Text"
          moreLinks={<a />}
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