import React from 'react';
import { Switch, Route, withRouter, NavLink } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import PortalContainer from './containers/PortalContainer';
import LoginContainer from './containers/LoginContainer';
import OLTContainer from './containers/OLTContainer';

class Router extends React.Component {
    render() {
    return (
    <Switch>
        <Route exact path='/' component={LoginContainer}/>
        <Route exact path='/login' component={LoginContainer}/>
        <Route exact path='/olt' component={OLTContainer}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/portal' component={PortalContainer}/>
        <Route exact path='/error' render={()=><div><h1>You are not logged in. Login to access the application.</h1><NavLink to='/login'>click here to login</NavLink></div>}/>
    </Switch>);
    }
}

export default withRouter(Router);