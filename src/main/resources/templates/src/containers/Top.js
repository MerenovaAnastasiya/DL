import React from 'react';
import {Modal, Navbar} from "react-materialize";
import {Link} from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
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
    }

    render() {
        const { user } = this.props;
        return (
            <Navbar className='topBar'
                    alignLinks="right">
                <Modal header="Log in or register" trigger={<Link to='/registration'> Registration </Link>}>
                    <RegisterForm user={user}
                                  {...this.boundActionCreators}
                    />
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