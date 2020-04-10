import React from 'react';
import { FeedWrap } from './feeds.style';

const Feed = ({ feed }) => {
    return <FeedWrap>{feed.title}</FeedWrap>;
};

export default Feed;
