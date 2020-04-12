import React, { useEffect } from 'react';
import getConfig from 'next/config';
import fetch from 'cross-fetch';
import Container from '../core-components/layout/container';
import PageHeader from '../core-components/layout/page-header';
import PageFooter from '../core-components/layout/page-footer';
import Main from '../core-components/layout/main';
import Header from '../components/header';
import Feeds from '../components/feeds';
import GlobalStyle from '../styles/global/app.global-style';

const {
    publicRuntimeConfig: { FRONTPAGE_STORIES_API_ENDPOINT }
} = getConfig();

const HomePage = ({ hits = [], currentPage, possiblePages, logo, newsLabel, footerTxt, topLabel, upvote }) => {
    useEffect(() => {}, []);

    return (
        <Container>
            <GlobalStyle />
            <PageHeader>
                <Header newsLabel={newsLabel} logo={logo} topLabel={topLabel}></Header>
            </PageHeader>
            <Main>
                <Feeds hits={hits} upvote={upvote} currentPage={currentPage} possiblePages={possiblePages} />
            </Main>
            <PageFooter>{footerTxt}</PageFooter>
        </Container>
    );
};

HomePage.getInitialProps = async ({ query }) => {
    const activePage = (query && query.page) || 0;
    const res = await fetch(`${FRONTPAGE_STORIES_API_ENDPOINT}?page=${activePage}`);
    const data = await res.json();

    return {
        hits: data.hits,
        currentPage: data.page,
        possiblePages: data.nbPages - 1
    };
};

export default HomePage;
