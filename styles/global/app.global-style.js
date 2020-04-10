import { createGlobalStyle } from 'styled-components';
import fonts from './app.fonts';

const GlobalStyle = createGlobalStyle`
    ${fonts}
    html,
    body,
    ul,
    li,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        padding:0;
        margin:0;
    }
    body{
        font-family: Roboto, sans-serif;
        font-weight: 400;
    }
    html * {
        box-sizing: border-box;
    }
    ul,
    li {
        list-style-type: none;
    }
`;
export default GlobalStyle;
