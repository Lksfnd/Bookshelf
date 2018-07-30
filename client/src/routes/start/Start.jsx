import React, { Component } from 'react';

/* Import styled components */
import { WelcomePage } from './Styles';

/**
 * The start page that is displayed for non regisered users or logged-off users
 * This page contains a register and login form
 */
export class Start extends Component {

    constructor(...props) {
        super(...props);
    }

    render() {
        return(<WelcomePage>
            Start
        </WelcomePage>);
    }

}