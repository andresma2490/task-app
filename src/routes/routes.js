import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Navigation from '../components/Navigation';
import TaskList from '../components/TaskList';
import About from '../components/About';
import NoMatch from '../components/NoMatch';

const history = createBrowserHistory();

function Routes(){
    return(
        <Router history={history}>
            <Navigation/>
            
            <Switch>
                <Route exact path="/" component={ TaskList }/>
                <Route path="/about" component={ About }/>
                
                <Route path="*" component={ NoMatch }/>
            </Switch>
        </Router>
    )
}

export default Routes;