import React from 'react';
import { fetchData } from '../actions/index';
import { connect } from 'react-redux';
import LoginComponent from '../components/LoginComponent';
import PortalContainer from './PortalContainer';
import { API_HOST, API_PATH } from '../helpers/Config';
import { clearLocalStorage, getLocalStorage } from '../helpers/Utility';
import * as constant from '../helpers/constants';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.hadleSubmit = this.hadleSubmit.bind(this);
    }
    componentDidMount(){
        clearLocalStorage()
    }
    hadleSubmit(e) {
        e.preventDefault();
        console.log(e.target.email.value)
        console.log(e.target.password.value)
        let fn = fetchData(
            API_HOST.CPN + API_PATH.CPN + 'authenticate/user',
            constant.login,
            'POST',
            {
                "userName": "ssrikantha",
                "password": "R29vZFdpbGxDb21lQDIwMTg="
            }
        );
        this.props.dispatch(fn)
    }
    render() {
        console.log(getLocalStorage("isLoggedIn") + "isLoggedIn in get localstorage")
        if (this.props.user && getLocalStorage("isLoggedIn")) {
            return (<PortalContainer />
            )
        }
        return (    
            <LoginComponent isSubmitForm={this.hadleSubmit} user={this.props.user} team={this.props.team} />    
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.logindata.user,
        team: state.logindata.team,
        isEligibleForCPNUpload: state.logindata.isEligibleForCPNUpload
    }
};
export default connect(mapStateToProps)(LoginContainer);