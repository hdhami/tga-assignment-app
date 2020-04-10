import React, { useEffect } from 'react';
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';

const Feed = ({ feed }) => {
    return <div>{feed.title}</div>;
};
const Feeds = ({ hits }) => {
    return hits.map((feed) => <Feed key={feed.objectID} feed={feed} />);
};

const {
    publicRuntimeConfig: { FRONTPAGE_STORIES_API_ENDPOINT }
} = getConfig();

const HomePage = ({ hits = [] }) => {
    useEffect(() => {
        console.log(hits);
    });

    return <Feeds hits={hits} />;
};

HomePage.getInitialProps = async () => {
    const res = await fetch(FRONTPAGE_STORIES_API_ENDPOINT);
    const data = await res.json();

    return {
        hits: data.hits
    };
};

export default HomePage;
