import styled, { keyframes } from 'styled-components';

const keyFrameContainer = keyframes`
    from {
        opacity:.75
    }
    to {
        opacity:1;
    }
`;

const Container = styled.div`
    max-width: 1440px;
    margin: 8px auto;
    background: #f6f6ef;
    display: flex;
    flex-direction: column;
    animation: ${keyFrameContainer} 400ms ease-in;
`;

export default Container;
