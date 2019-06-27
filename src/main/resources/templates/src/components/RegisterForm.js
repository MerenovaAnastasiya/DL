import React from 'react';
import auth from '../services/Authorization';
import {TextInput, Row, Col} from 'react-materialize';
import M from '../materialize';

class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props.user
        };
        this.setLogin = this.setLogin.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setSecondPassword = this.setSecondPassword.bind(this);
        this.register = this.register.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.state = {
            ...this.props.user
        };
    }

    register(event) {
        event.preventDefault();
        auth.register({login: this.state.login, password: this.state.password})
            .then(
                res => {
                    this.props.addSession(res.data.sessionId);
                    M.toast({html: 'Login success!', classes: 'green white-text rounded'});
                }
            )
            .catch(
                error => {
                    const ers = error.response.data.errors;
                    for (let elem in ers) {
                        M.toast({html: ers[elem], classes: 'red white-text rounded'})
                    }
                }
            )
        ;
    }

    setLogin(event) {
        this.props.addLogin(event.target.value);
    }

    setPassword(event) {
        this.props.addPassword(event.target.value);
    }

    setSecondPassword(event) {
        this.props.addSecondPassword(event.target.value);
    }

    render() {
        return (
            <div className='min-height-block'>
                <div className='container' style={{paddingTop: 80}}>
                    <Row>
                        <Col s={3}>
                            <div>
                                <form onSubmit={this.register}>
                                    <TextInput id='login' placeholder="Login" onChange={this.setLogin}/>
                                    <TextInput id='password' password placeholder="Password"
                                               onChange={this.setPassword}/>
                                    <TextInput id='secondPassword' password placeholder="Password confirmation"
                                               onChange={this.setSecondPassword}/>
                                    <input type='submit' className='btn'/>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }

}

export default RegisterForm;