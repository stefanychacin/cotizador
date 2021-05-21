import React from 'react';

import styled from '@emotion/styled';

import PropTypes from 'prop-types';

const Message = styled.p`
    background-color: #82bdb3;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    color: #FFF;
`;

const TotalBox = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #67948c;
    background-color: #82bdb3;
    margin-top: 1rem;
    position: relative;
`;

const TotalText = styled.p`
    color: #FFF;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Results = ({quotation}) => {

    return ( 
        (quotation === 0) 
        ? <Message>Choose your brand, year and insurance plan</Message> 
        : (
            <TotalBox>
                        <TotalText>Your total quote is: <span>${quotation}</span></TotalText>
            </TotalBox>
        )
     )
}
 
Results.propTypes= {
    quotation: PropTypes.number.isRequired
}

export default Results;