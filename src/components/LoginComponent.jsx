import React from 'react';
import Input from './global/Input';
import Button from './global/Button';
import PropTypes from 'prop-types';

export default class LoginComponent extends React.Component {
    render() {
        return (
            <main className="login-container">
            <div><h1 id="login-header">Engineering Provisioning Portal</h1></div>
                <section className="login-form-container">
                    <div id="login-form-header">
                        <h3 id="login-form-h3">Log In</h3>
                    </div>
                    <div id="login-form-body">
                    <form className='formcls' onSubmit={this.props.isSubmitForm} >
                        <div className="form-group">
                            <Input label="Email" idName="input_email" clsName="form-control" placeHolder="Enter Email" name="email" RequiredField={true} />
                        </div>
                        <div className="form-group">
                            <Input label="Password" idName="input_password" clsName="form-control" inputType="password" placeHolder="Enter Password" name="password" RequiredField={true}  />
                        </div>
                        <div className="clearfix">
                            <Button inputType="submit" clsName="btn btn-green" name="login" value="Login" />
                        </div>
                    </form>
                    </div>
                </section>
            </main>
        );
    }
}

LoginComponent.propTypes = {
    isSubmitForm: PropTypes.func
}