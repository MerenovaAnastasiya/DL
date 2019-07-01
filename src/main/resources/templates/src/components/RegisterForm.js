import React from 'react';
import {Authorization} from '../services/Authorization';
import {TextInput, Row, Col} from 'react-materialize';
import M from '../materialize';

class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '-',
            secondPassword: '+'
        };
        this.ref = element => {
            this.input = element
        };
        this.set = this.set.bind(this);
        this.checkPasswords = this.checkPasswords.bind(this);
        this.register = this.register.bind(this);
    }

    register(event) {
        event.preventDefault();
        Authorization.register({login: this.state.login, password: this.state.password})
            .then(
                res => {
                    this.props.addSession(res.data.sessionId);
                    M.toast({html: 'Registration success!', classes: 'green white-text rounded'});
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
        const { id, value } = event.target;
        this.setState({
            [id]: value
        }, this.checkPasswords)
    }

    checkPasswords() {
        this.input.disabled = !(this.state.secondPassword === this.state.password)
    }

    render() {
        return (
            <div className='min-height-block'>
                <div className='container' style={{paddingTop: 80}}>
                    <Row>
                        <Col s={4}>
                            <div>
                                <form onSubmit={this.register} style={{color: 'black'}}>
                                    <TextInput id={'login'}
                                               placeholder="Login"
                                               onChange={this.set}/>
                                    <TextInput id={'password'}
                                               password placeholder="Password"
                                               onChange={this.set}/>
                                    <TextInput id={'secondPassword'}
                                               password placeholder="Password confirmation"
                                               onChange={this.set}/>
                                    <input ref={this.ref} type='submit' className='btn' disabled={true} />
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