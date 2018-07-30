import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom'
/* Imported modules */
// Start route (login/register page)
import { Start } from './routes/Start/Start.jsx';


/**
 * Main App component, handles routing
 */
export class App extends Component {

    render() {

        // Route elements can have either component property to render a component directly
        // or by using a render function which returns a react element to insert there
        return(<Switch>
            <Route exact path='/start' component={ Start } />
        </Switch>);
    }

}