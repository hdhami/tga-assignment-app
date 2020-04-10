import React from 'react';
import Feed from './feed';
import { FeedsWrap } from './feeds.style';

const Feeds = ({ hits }) => {
    return (
        <FeedsWrap>
            {hits.map((feed) => (
                <Feed key={feed.objectID} feed={feed} />
            ))}
        </FeedsWrap>
    );
};

export default Feeds;
