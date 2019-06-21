import React from 'react';
import { TextInput, Row, Col } from 'react-materialize';

class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { login: '', password: '' };

    this.setLogin = this.setLogin.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.register = this.register.bind(this);
  }

  register(event) {
    // TODO ajax request
    console.log(this.state)
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
      <div className='container'>
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