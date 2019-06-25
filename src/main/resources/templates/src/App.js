import React from 'react';
import { Navbar, Footer, Modal } from 'react-materialize';
import RegisterForm from './components/RegisterForm';
import BookShelf from './components/BookShelf';
import Main from './components/Main';
import M from './materialize';
import { Route, Switch, Link } from 'react-router-dom';

class App extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount() {
        M.Modal.init(this)
    }

    render() {
        return (
            <div className='app'>
                <Navbar className='topBar'
                        alignLinks="right">
                    <Modal header="Log in or register" trigger={<Link to='/registration'> Registration </Link>}>
                        <RegisterForm/>
                    </Modal>
                </Navbar>
                <Switch>
                    <Route path='/' render={() => {
                        return (<div><Main/><BookShelf/></div>)
                    }}/>
                </Switch>
                <Footer
                    copyrights="&copy 2019 Copyright Text"
                    links={<ul/>}
                    className="brown"
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
}

export default App;