import React from 'react';
import ReactDOM from 'react-dom';

export default class User extends React.Component {

    render() {
        const user = this.props.tweet.user;
        let name = user.name;
        let handle = user.screen_name;

        return (
            <p>
                {name} @{handle}
            </p>
        );
    }
}
