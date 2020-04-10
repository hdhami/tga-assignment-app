import React, { useEffect } from 'react';
import getConfig from 'next/config';
import fetch from 'cross-fetch';
import Container from '../core-components/layout/container';
import PageHeader from '../core-components/layout/page-header';
import PageFooter from '../core-components/layout/page-footer';
import Main from '../core-components/layout/main';
import Header from '../components/header';
import Feeds from '../components/feeds';

const {
    publicRuntimeConfig: { FRONTPAGE_STORIES_API_ENDPOINT }
} = getConfig();

const HomePage = ({ hits = [], logo, newsLabel, footerTxt, topLabel }) => {
    useEffect(() => {
        console.log(hits, logo);
    });

    return (
        <Container>
            <PageHeader>
                <Header newsLabel={newsLabel} logo={logo} topLabel={topLabel}></Header>
            </PageHeader>
            <Main>
                <Feeds hits={hits} />
            </Main>
            <PageFooter>{footerTxt}</PageFooter>
        </Container>
    );
};

HomePage.getInitialProps = async () => {
    const res = await fetch(FRONTPAGE_STORIES_API_ENDPOINT);
    const data = await res.json();

    return {
        hits: data.hits
    };
};

export default HomePage;
