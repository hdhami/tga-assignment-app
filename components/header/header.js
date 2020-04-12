import React from 'react';
import { NavContainer, Home, New, Top } from './header.style';

const Header = ({ logo, newsLabel, topLabel }) => {
    return (
        <NavContainer>
            <Home>
                <a href="/news">
                    <img src={logo} alt="home" />
                </a>
            </Home>
            <Top>
                <a href="/top">{topLabel}</a>
            </Top>
            {`|`}
            <New>
                <a href="/newest">{newsLabel}</a>
            </New>
        </NavContainer>
    );
};

export default Header;
