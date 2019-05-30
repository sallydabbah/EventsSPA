import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import WishContext from './WishContext';

export default class RedirectIfAnonymous extends React.Component {

    render() {
        const { name } = this.context;
        return (
            <Route path={this.props.path} render={(props) => (
                name ? <this.props.component {...props}/> : <Redirect to="/login" />
            )} />
        );
    }
}

RedirectIfAnonymous.contextType = WishContext;