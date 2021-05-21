import React, { useState } from'react';
import styled from '@emotion/styled';
import { getYearsDifference, getBrandDifference, getPlanDifference } from '../helper';

const Box = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const QuoteButton = styled.button`
    background-color: #82bdb3;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover{
        background-color: #53a798;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: #ca4242;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Form = ({saveSummary, saveLoading}) => {

    const [ data, saveData ] = useState({
        brand:'',
        year: '',
        plan:''
    });

    const [ error, saveError ] = useState(false);

    //extract state values
    const { brand, year, plan } = data;

    //leer los datos del form
    const getInformation = e => {
        saveData({
            ...data,
            [e.target.name] : e.target.value
        })
    };

    //Submit
    const insurance = e =>{
        e.preventDefault();

        if( brand.trim() === '' || year.trim() === '' || plan.trim() === '' ){
        saveError(true);
        return;
        }
        saveError(false);

        //Base amount
        let results = 50000;

        //years
        const difference = getYearsDifference(year);

        //3% per year
        results -= ((difference * 3) * results) / 100;

        //American, Asian y European
        results = parseFloat(getBrandDifference(brand) * results).toFixed(2);

        //Plan
        const planIncrease = getPlanDifference(plan);
        results = parseFloat(planIncrease * results).toFixed(2);

        saveLoading(true);

        //Total
        setTimeout(() => {

            saveLoading(false);

            saveSummary({
                quotation: Number(results),
                data
            });
        }, 3000);
    }

    return ( 
    <form
        onSubmit={insurance}
    >
        { error ? <Error>All fields are required</Error> : null }

        <Box>
            <Label>Brand</Label>
            <Select
                name="brand"
                value={brand}
                onChange={getInformation}
            >
                <option value="">-- Select --</option>
                <option value="european">European</option>
                <option value="american">American</option>
                <option value="asian">Asian</option>
            </Select>
        </Box>

        <Box>
            <Label>Year</Label>
            <Select
                name="year"
                value={year}
                onChange={getInformation}
            >
                <option value="">-- Select --</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                
            </Select>
        </Box> 

        <Box>
            <Label>Plan</Label>
            <InputRadio 
                type="radio"
                name="plan"
                value="basic"
                checked={ plan === "basic" }
                onChange={getInformation}                
            /> Basic
            
            <InputRadio 
                type="radio"
                name="plan"
                value="full"
                checked={ plan === "full" }
                onChange={getInformation}
            /> Full
        </Box>
        <QuoteButton type="submit">Quote it</QuoteButton>
    </form>
    );
}
 
export default Form;