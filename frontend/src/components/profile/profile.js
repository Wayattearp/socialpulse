import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserTweets } from '../../actions/tweet_actions';
import TweetBox from '../tweets/tweet_box';

function Profile() {
    const currentUser = useSelector(state => state.session.user);
    const tweets = useSelector(state => Object.values(state.tweets.user));
    const dispatch = useDispatch();
    const [fetchedTweets, setFetchedTweets] = useState([]);

    useEffect(() => {
        dispatch(fetchUserTweets(currentUser.id));
    }, [dispatch, currentUser.id]);

    useEffect(() => {
        setFetchedTweets(tweets);
    }, [tweets]);

    if (fetchedTweets.length === 0) {
        return <div>This user has no Tweets</div>;
    } else {
        return (
            <div>
                <h2>All of This User's Tweets</h2>
                {fetchedTweets.map(tweet => (
                    <TweetBox key={tweet._id} text={tweet.text} />
                ))}
            </div>
        );
    }
}

export default Profile;
