import styled from 'styled-components';

const NavContainer = styled.nav`
    display: flex;
`;
const Home = styled.div`
    border: 1px white solid;
    a {
        text-decoration: none;
        display: flex;
        color: #000;
    }
    img {
        font-size: 8px;
        height: 18px;
    }
`;
const Top = styled.div`
    margin-left: 5px;
    padding: 0 5px;
    a {
        text-decoration: none;
        display: flex;
        color: #000;
    }
`;

const New = styled.div`
    padding: 0 5px;
    a {
        text-decoration: none;
        display: flex;
        color: #000;
    }
`;

export { NavContainer, Home, New, Top };
