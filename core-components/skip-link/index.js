import styled from 'styled-components';

const SkipLink = styled.a`
    font-size: 16px;
    text-decoration: none;
    color: #333;
    position: absolute;
    top: -40px;
    left: 0;
    background: #000000;
    color: white;
    padding: 8px;
    z-index: 100;
    &:focus {
        top: 0;
    }
`;

export default SkipLink;
