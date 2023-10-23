import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TweetBox from './tweet_box';
import { composeTweet, fetchTweets } from '../../actions/tweet_actions';

function TweetCompose() {
    const [text, setText] = useState('');
    const newTweet = useSelector(state => state.tweets.newTweet);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTweets());
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const tweet = {
            text: text
        };

        dispatch(composeTweet(tweet));
        setText('');
    }

    const update = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="textarea"
                        value={text}
                        onChange={update}
                        placeholder="Write your tweet..."
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <br />
            <TweetBox text={newTweet} />
        </div>
    );
}

export default TweetCompose;
