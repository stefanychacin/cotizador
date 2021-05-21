import React from 'react';
import { firstLetter } from '../helper';

import styled from '@emotion/styled';

import PropTypes from 'prop-types';
 
const SummaryContainer = styled.div`
    padding: 1rem;
    padding-bottom: 2.5rem;
    text-align: center;
    background-color: #82bdb3;
    color: #FFF;
    margin-top: 1rem
`;

const Summary = ({data}) => {

    const {brand, year, plan} = data;

    if(brand === '' || year === '' || plan === '') return null;

    return ( 
        <SummaryContainer>
            <h2>Quote Summary</h2>
            <ul>
                <li>Brand: { firstLetter(brand) } </li>
                <li>Year: {year} </li>
                <li>Plan: { firstLetter(plan) } </li>
            </ul>
        </SummaryContainer>
     );
}

Summary.propTypes = {
    data: PropTypes.object.isRequired
}
 
export default Summary;