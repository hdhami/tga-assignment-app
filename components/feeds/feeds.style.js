import styled from 'styled-components';

const FeedsWrap = styled.ul`
    display: flex;
    flex-direction: column;
`;
const FeedWrap = styled.li`
    padding: 5px;
    background: ${(props) => (props.even ? '#f6f6ef' : '#e6e6df')};
    display: flex;
    a {
        text-decoration: none;
        &.domain {
            display: block;
            color: #311c1c;
            font-size: 12px;
            @media (min-width: 768px) {
                display: inline-block;
            }
        }
    }
    .created-at {
        color: #311c1c;
        font-size: 12px;
        display: block;
        @media (min-width: 768px) {
            padding: 0 5px;
            display: inline-block;
        }
    }
    .hide-feed {
        color: #311c1c;
        font-size: 14px;
        display: block;
        @media (min-width: 768px) {
            display: inline-block;
        }
    }
    .author-name {
        color: #311c1c;
        font-size: 12px;
    }
    .linked-details {
        padding-left: 2px;
        width: 100px;
        margin-left: auto;
        flex: none;
        @media (min-width: 768px) {
            width: auto;
            margin-left: unset;
        }
    }
`;

const CommentWrap = styled.span`
    width: 50px;
    display: flex;
    flex: none;
    justify-content: center;
    a {
        color: #311c1c;
        text-decoration: none;
    }
    @media (min-width: 768px) {
        width: 100px;
    }
`;

const UpvotesWrap = styled.div`
    display: flex;
`;
const UpvoteLink = styled.span`
    background: ${(props) => `url('${props.upvote}')`};
    width: 20px;
    background-size: 10px;
    background-repeat: no-repeat;
    background-position: top;
    cursor: pointer;
`;

const LoadMore = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    font-size: 18px;
    padding-left: 100px;
    a {
        color: #805335;
        text-decoration: none;
    }
`;

export { FeedsWrap, FeedWrap, CommentWrap, UpvotesWrap, UpvoteLink, LoadMore };
