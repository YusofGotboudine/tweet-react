import React from 'react';
import ReactDOM from 'react-dom';

export default class User extends React.Component {

    render() {
        const users = this.props.tweet.user;
        let name = users.name;
        let handle = user.screen_name;

        return (
            <p>
                {name} @{handle}
            </p>
        );
    }
}
