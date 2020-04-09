import React from 'react';
import App, { Container } from 'next/app';
import GlobalStyle from '../styles/global/app.global-style';

class HNFeeds extends App {
    constructor(props) {
        super(props);
    }
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <GlobalStyle />
                <Component {...pageProps} />
            </Container>
        );
    }
}
export default HNFeeds;
