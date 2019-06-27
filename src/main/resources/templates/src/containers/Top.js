import React from 'react';
import {Modal, Navbar, Tabs, Tab } from "react-materialize";
import {Link} from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import * as M from "../materialize";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as actions from '../actions/actions';
import {getUser} from "../reducers/reducer";

class Top extends React.Component {

    constructor(props) {
        super(props);
        const { dispatch } = props;
        this.boundActionCreators = bindActionCreators(actions, dispatch)
    }

    componentDidMount() {
        M.Modal.init(this);
        M.Tabs.init(this);
    }

    render() {
        const { user } = this.props;
        return (
            <Navbar className='topBar'
                    alignLinks="right">
                <Modal header="Introduce yourself" trigger={<Link to='/registration'> Log In </Link>}>
                    <Tabs className="tab-demo z-depth-1"
                    >
                        <Tab title="Login">
                            <LoginForm user={user}
                                          {...this.boundActionCreators}
                            />
                        </Tab>
                        <Tab title="Registration">
                            <RegisterForm user={user}
                                          {...this.boundActionCreators}
                            />
                        </Tab>
                    </Tabs>
                </Modal>
            </Navbar>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: getUser(state)
    }
}

export default connect(mapStateToProps)(Top);