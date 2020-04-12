import React from 'react';
import psl from 'psl';
import Link from 'next/link';
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
                    <Link href={{ pathname: '/news', query: { page: currentPage + 1 } }}>
                        <a>Load More</a>
                    </Link>
                </LoadMore>
            )}
        </>
    );
};

export default Feeds;
