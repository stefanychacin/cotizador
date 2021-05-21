import React from 'react';

import styled from '@emotion/styled'

import PropTypes from 'prop-types';


const HeaderContainer = styled.header`
    background-color: #92d8bbbf;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const HeaderText = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Quicksand', sans-serif;
    text-align: center;
`;

const Paragraph = styled.p`
    text-align: center;
`;

const Header = ({titulo}) => {
    return ( 
        <HeaderContainer>
            <HeaderText>{titulo}</HeaderText>
            <Paragraph>Introduce your data and get the total to quote your insurance</Paragraph>
        </HeaderContainer>
     );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;