import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Results from './components/Results';

import Spinner from './components/Spinner';
import styled from '@emotion/styled';

import PropTypes from 'prop-types';

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const FormContainer = styled.div`
    background-color: #FFF;
    padding: 3rem;
`;

function App() {

  const [ summary, saveSummary ] = useState({
    quotation: 0,
    data:{
      brand: '',
      year: '',
      plan: ''
    }
  });

  const [ loading, saveLoading ] = useState(false);

  const {quotation, data} = summary;

  return (
    <Container>
      <Header 
        titulo='Insurance quote'
      />
      <FormContainer>
        <Form 
          saveSummary={saveSummary}
          saveLoading={saveLoading}
        />
        <Summary 
          data={data}
        />

        {loading ? <Spinner /> : null}


        {!loading ? 
          <Results 
            quotation={quotation}
          /> : null
        }
        
      </FormContainer>
    </Container>
  );
}

Form.propTypes = {
  saveSummary: PropTypes.func.isRequired,
  saveLoading: PropTypes.func.isRequired
}

export default App;
