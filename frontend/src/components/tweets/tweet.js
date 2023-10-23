import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTweets } from '../../actions/tweet_actions';
import TweetBox from './tweet_box';

function Tweet() {
    const tweets = useSelector(state => Object.values(state.tweets.all));
    const dispatch = useDispatch();
    const [fetchedTweets, setFetchedTweets] = useState([]);

    useEffect(() => {
        dispatch(fetchTweets());
    }, [dispatch]);

    useEffect(() => {
        setFetchedTweets(tweets);
    }, [tweets]);

    if (fetchedTweets.length === 0) {
        return (<div>There are no Tweets</div>);
    } else {
        return (
            <div>
                <h2>All Tweets</h2>
                {fetchedTweets.map(tweet => (
                    <TweetBox key={tweet._id} text={tweet.text} />
                ))}
            </div>
        );
    }
}

export default Tweet;
