import React, { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';
import GlobalStyle from '../styles/global/app.global-style';

class HNFeeds extends App {
    constructor(props) {
        super(props);
    }
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Fragment>
                <Head>
                    <title>HN Feeds</title>
                    <meta name="Description" content="Category: Universal JS App" />
                    <meta name="robots" content="all" />
                </Head>
                <GlobalStyle />
                <Component {...pageProps} />
            </Fragment>
        );
    }
}
export default HNFeeds;
