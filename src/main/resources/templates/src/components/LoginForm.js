import React from 'react';
import auth from "../services/Authorization";
import M from "../materialize";
import {Col, Row, TextInput} from "react-materialize";

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props.user
        }
        this.login = this.login.bind(this);
        this.setLogin = this.setLogin.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.state = {
            ...this.props.user
        };
    }

    login(event) {
        event.preventDefault();
        auth.login({login: this.state.login, password: this.state.password})
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

    render() {
        return (
            <div className='min-height-block'>
                <div className='container' style={{paddingTop: 80}}>
                    <Row>
                        <Col s={4}>
                            <div>
                                <form onSubmit={this.register}>
                                    <TextInput placeholder="Login"
                                               onChange={this.setLogin}/>
                                    <TextInput password placeholder="Password"
                                               onChange={this.setPassword}/>
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