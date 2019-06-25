import React from 'react';
import axios from 'axios';
import { TextInput, Row, Col } from 'react-materialize';

class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { login: '', password: '' };
    axios.defaults.baseURL = 'http://localhost:8080';

    this.setLogin = this.setLogin.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.register = this.register.bind(this);
  }

  register(event) {
      console.log(`${axios.defaults.baseURL}/users`);
      axios.post(`${axios.defaults.baseURL}/users`,{login: this.state.login, password: this.state.password})
          .then(
            res => {
              console.log(res)
            }
        )
          .catch(
            res => {
              alert(res)
            }
       )
      console.log(this.state);
      event.preventDefault();
  }

  setLogin(event) {
    this.setState({ 'login': event.target.value})
  }

  setPassword(event) {
    this.setState({ 'password': event.target.value})
  }

  render() {
      return (
      <div className='min-height-block'>
        <Row>
          <Col s={3}>
            <div>
              <form onSubmit={this.register}>
                <TextInput placeholder="Login" onInput={this.setLogin} />
                <TextInput password placeholder="Password" onInput={this.setPassword} />
                <input type='submit' className='btn'/>
              </form>  
            </div>
          </Col>
        </Row>
      </div>
    )
  }

}

export default RegisterForm;