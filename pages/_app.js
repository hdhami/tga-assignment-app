import React, { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';

const staticProps = require('../resources/staticProps.json');

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
                <Component {...pageProps} {...staticProps} />
            </Fragment>
        );
    }
}
export default HNFeeds;
