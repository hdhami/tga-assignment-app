import React, { useEffect } from 'react';
import getConfig from 'next/config';
import fetch from 'cross-fetch';

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
    console.log('======================API URL==========================', FRONTPAGE_STORIES_API_ENDPOINT);
    const res = await fetch('https://hn.algolia.com/api/v1/search?tags=front_page');
    const data = await res.json();

    return {
        hits: data.hits
    };
};

export default HomePage;
