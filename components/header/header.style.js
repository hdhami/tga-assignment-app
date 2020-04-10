import styled from 'styled-components';

const NavContainer = styled.ul`
    display: flex;
`;
const Home = styled.li`
    border: 1px white solid;
    a {
        text-decoration: none;
        display: flex;
        color: #000;
    }
`;
const Top = styled.li`
    margin-left: 5px;
    padding: 0 5px;
    a {
        text-decoration: none;
        display: flex;
        color: #000;
    }
`;

const New = styled.li`
    padding: 0 5px;
    a {
        text-decoration: none;
        display: flex;
        color: #000;
    }
`;

export { NavContainer, Home, New, Top };
