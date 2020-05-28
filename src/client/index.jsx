import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets';
import User from 'user';

const tweet = tweets.tweets;

class TweetList extends React.Component {
  render() {
    let text = tweet[0].text;
    let name = tweet[0].user.name;
    let handle = tweet[0].user.screen_name;

    let tweets = tweet.map(tweet => {
      return <div>
        <User tweet={tweet}></User>
        <div>{tweet.text}</div>
      </div>
    })

    return (
      <div>
        {tweets}
      </div>
    );
  }
}

const element = document.getElementById('app');


ReactDOM.render(<TweetList />, element);//

console.log("tweet react");
