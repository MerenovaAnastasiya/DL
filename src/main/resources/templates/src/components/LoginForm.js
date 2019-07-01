import React from 'react';
import {Authorization} from "../services/Authorization";
import M from "../materialize";
import {Col, Row, TextInput} from "react-materialize";

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
        this.login = this.login.bind(this);
        this.set = this.set.bind(this);
    }

    login(event) {
        event.preventDefault();
        Authorization.login({login: this.state.login, password: this.state.password})
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

    set(event) {
        const {id, value} = event.target;
        this.setState({
            [id]: value
        })
    }

    render() {
        return (
            <div className='min-height-block'>
                <div className='container' style={{paddingTop: 80}}>
                    <Row>
                        <Col s={4}>
                            <div>
                                <form onSubmit={this.register}>
                                    <TextInput id={'login'}
                                               placeholder="Login"
                                               onChange={this.set}/>
                                    <TextInput id={'password'}
                                               password placeholder="Password"
                                               onChange={this.set}/>
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