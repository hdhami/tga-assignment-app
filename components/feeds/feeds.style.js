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
            color: #311c1c;
            font-size: 12px;
        }
    }
`;

const CommentWrap = styled.span`
    width: 100px;
    display: flex;
    justify-content: center;
`;

const UpvotesWrap = styled.div`
    display: flex;
`;
const UpvoteLink = styled.a`
    background: ${(props) => `url('${props.upvote}')`};
    width: 20px;
    background-size: 10px;
    background-repeat: no-repeat;
    background-position: top;
`;

const LoadMore = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    font-size: 18px;
    padding-left: 100px;
    a {
        color: #ff6600;
        text-decoration: none;
    }
`;

export { FeedsWrap, FeedWrap, CommentWrap, UpvotesWrap, UpvoteLink, LoadMore };
