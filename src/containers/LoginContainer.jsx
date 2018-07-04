import React from 'react';
import { fetchData } from '../actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';
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
        console.log(e.target.user.value)
        console.log(e.target.password.value)
        const encodedString = Buffer.from(e.target.password.value).toString('base64')
        let fn = fetchData(
            API_HOST.CPN + API_PATH.CPN + 'authenticate/user',
            constant.login,
            'POST',
            {
                "userName": e.target.user.value,
                "password": encodedString
            }
        );
        this.props.dispatch(fn)
    }
    render() {
        console.log(getLocalStorage("isLoggedIn") + "isLoggedIn in get localstorage")
        if (this.props.user && getLocalStorage("isLoggedIn")) {
            console.log("in redirect to /portal")
            return (
                <Redirect to='/portal' />
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