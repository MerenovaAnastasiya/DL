import React from 'react';
import axios from 'axios';
import { TextInput, Row, Col } from 'react-materialize';
import M from '../materialize';

class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { login: '', password: '', secondPassword: '' };
    this.setRef = element => {
        this.submitButton = element;
    };
    axios.defaults.baseURL = 'http://localhost:8080';

    this.set = this.set.bind(this);
    this.register = this.register.bind(this);
    this.checkPasswords = this.checkPasswords.bind(this);
  }

  register(event) {
      axios.post(`${axios.defaults.baseURL}/users`,{login: this.state.login, password: this.state.password})
          .then(
            res => {
            //    TODO REDUX or Some other way to global storage
                console.log(res);
            }
        )
          .catch(
            error => {
                const ers = error.response.data.errors;
                for ( let elem in ers ) {
                    M.toast({html: ers[elem]})
                }
            })
      ;
      event.preventDefault();
  }

  set(event) {
      const {id, value} = event.target;
      this.setState({ [id]: value }, this.checkPasswords);
  }
  checkPasswords() {
      this.submitButton.disabled = !(this.state.secondPassword === this.state.password);
  }

  render() {
      return (
      <div className='min-height-block'>
          <div className='container' style={{paddingTop: 80}}>
            <Row>
              <Col s={3}>
                <div>
                  <form onSubmit={this.register}>
                    <TextInput id='login' placeholder="Login" onInput={this.set} />
                    <TextInput id='password' password placeholder="Password" onInput={this.set} />
                    <TextInput id='secondPassword' password placeholder="Password confirmation" onInput={this.set} />
                    <input ref={this.setRef} type='submit' className='btn' />
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