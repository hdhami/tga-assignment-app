import React from 'react';
import psl from 'psl';
import Feed from './feed';
import { FeedsWrap, LoadMore } from './feeds.style';

const Feeds = ({ hits, upvote, currentPage, possiblePages }) => {
    return (
        <>
            <FeedsWrap>
                {hits.map((feed, idx) => {
                    const { hostname } = feed.url ? new URL(feed.url) : '';
                    const domain = hostname ? psl.get(hostname) : '';

                    return (
                        <Feed
                            key={feed.objectID}
                            id={feed.objectID}
                            domain={domain}
                            upvote={upvote}
                            feed={feed}
                            even={idx % 2 === 0}
                        />
                    );
                })}
            </FeedsWrap>
            {currentPage < possiblePages && (
                <LoadMore>
                    <a href={`/?page=${currentPage + 1}`}>More</a>
                </LoadMore>
            )}
        </>
    );
};

export default Feeds;
