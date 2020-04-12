import React, { useState, useEffect } from 'react';
import TimeAgo from 'timeago-react';
import { FeedWrap, CommentWrap, UpvotesWrap, UpvoteLink } from './feeds.style';

const Comments = ({ numbers }) => {
    return (
        <CommentWrap>
            <a href="/comments">{numbers || '-'}</a>
        </CommentWrap>
    );
};

const Upvotes = ({ upvotes, upvote, id, onUpvote }) => {
    return (
        <UpvotesWrap>
            <span>{upvotes}</span>
            <UpvoteLink
                upvote={upvote}
                onClick={(ev) => {
                    onUpvote(id);
                }}
                tabIndex="0"
                aria-label="upvote"
            ></UpvoteLink>
        </UpvotesWrap>
    );
};
const Title = ({ title, feed, domain }) => {
    return (
        <div>
            <span>{title}</span>
            {(domain && (
                <a className="domain" href={feed.url}>
                    {` ( ${domain} ) `}
                </a>
            )) ||
                null}
        </div>
    );
};

const LinkedDetails = ({ feed, domain, onHide, id }) => {
    return (
        <div className="linked-details">
            <span className="author-name">{`by ${feed.author}`}</span>
            <TimeAgo className="created-at" datetime={feed.created_at} />
            <a
                href="/hide"
                className="hide-feed"
                onClick={(ev) => {
                    ev.preventDefault();
                    onHide(id);
                }}
            >
                {`[ Hide ]`}
            </a>
        </div>
    );
};

const Feed = ({ feed, even, domain, upvote, id }) => {
    const [upvoteCount, setUpvoteCount] = useState(feed.points);
    const [hideFeed, setHideFeed] = useState(false);

    const updateUpvoteCount = (feedId) => {
        if (typeof localStorage !== undefined) {
            const feedDetails =
                (localStorage.getItem(`${feedId}`) && JSON.parse(localStorage.getItem(`${feedId}`))) || {};

            feedDetails.count = upvoteCount + 1;
            localStorage.setItem(`${feedId}`, JSON.stringify(feedDetails));
            setUpvoteCount(upvoteCount + 1);
        }
    };

    const onHide = (feedId) => {
        if (typeof localStorage !== undefined) {
            const feedDetails =
                (localStorage.getItem(`${feedId}`) && JSON.parse(localStorage.getItem(`${feedId}`))) || {};

            feedDetails.hideFeed = true;
            localStorage.setItem(`${feedId}`, JSON.stringify(feedDetails));
            setHideFeed(true);
        }
    };

    useEffect(() => {
        const doesCacheExists = (typeof localStorage !== undefined && localStorage.getItem(id)) || false;
        const upCount = (doesCacheExists && JSON.parse(localStorage.getItem(id)).count) || undefined;

        if (upCount) {
            setUpvoteCount(upCount);
        }
    }, []);

    useEffect(() => {
        const doesCacheExists = (typeof localStorage !== undefined && localStorage.getItem(id)) || false;
        const hideFeed = doesCacheExists && JSON.parse(localStorage.getItem(id)).hideFeed;

        if (hideFeed) {
            setHideFeed(true);
        }
    }, []);

    return (
        (!hideFeed && (
            <FeedWrap even={even}>
                <Comments numbers={feed.num_comments} />
                <Upvotes upvotes={upvoteCount} upvote={upvote} id={id} onUpvote={updateUpvoteCount} />
                <Title title={feed.title} feed={feed} domain={domain} />
                <LinkedDetails feed={feed} onHide={onHide} id={id} />
            </FeedWrap>
        )) ||
        null
    );
};

export default Feed;
