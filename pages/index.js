import React, { useEffect } from 'react';
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';
import Spinner from '../components/spinner';

const {
    publicRuntimeConfig: { FRONTPAGE_STORIES_API_ENDPOINT }
} = getConfig();
const HomePage = ({ hits = [] }) => {
    useEffect(() => {
        console.log(hits);
    });
    return hits.length !== 0 ? <div>Welcome To Home Page!</div> : <Spinner />;
};

HomePage.getInitialProps = async function () {
    const res = await fetch(FRONTPAGE_STORIES_API_ENDPOINT);
    const data = await res.json();

    return {
        hits: data.hits
    };
};

export default HomePage;
