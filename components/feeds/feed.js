import React, { useState, useEffect } from 'react';
import { FeedWrap, CommentWrap, UpvotesWrap, UpvoteLink } from './feeds.style';

const Comments = ({ numbers }) => {
    return (
        <CommentWrap>
            <a href="/comments">{numbers}</a>
        </CommentWrap>
    );
};

const Upvotes = ({ upvotes, upvote, id, onUpvote }) => {
    return (
        <UpvotesWrap>
            <span>{upvotes}</span>
            <UpvoteLink
                href="#"
                upvote={upvote}
                onClick={(ev) => {
                    ev.preventDefault();
                    onUpvote(id);
                }}
            ></UpvoteLink>
        </UpvotesWrap>
    );
};
const Title = ({ title }) => {
    return <span>{title}</span>;
};

const LinkedDetails = ({ feed, domain, onHide, id }) => {
    return (
        <span>
            {`(`}
            <a className="domain" href={feed.url}>
                {domain}
            </a>
            {`) `}
            {` by ${feed.author} ${feed.created_at} `}
            {`[ `}
            <span
                onClick={() => {
                    onHide(id);
                }}
            >
                Hide
            </span>
            {` ]`}
        </span>
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
                <Title title={feed.title} />
                <LinkedDetails feed={feed} domain={domain} onHide={onHide} id={id} />
            </FeedWrap>
        )) ||
        null
    );
};

export default Feed;