import React from 'react';
import { Switch, Route, withRouter  } from 'react-router-dom'
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
    </Switch>);
    }
}

export default withRouter(Router);