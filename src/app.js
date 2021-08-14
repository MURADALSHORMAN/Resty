import React from 'react';
import { useState } from 'react';
import { BeatLoader } from 'react-spinners';
import './app.scss';

import Header from './components/header/Headers';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Results';

function App() {

  const [data, setdata] = useState(null);
  const [requestParams, setrequestParams] = useState({});
  const [loading, setloading] = useState(true);
  const [history, sethistory] = useState(false);
  const [headers, setheaders] = useState('');

  function callApi(headers, results, formData) {
    setdata(results);
    setheaders(headers);
    setrequestParams(formData);
    setloading(false);
    sethistory(true);
  };


  return (
    <React.Fragment>
      <Header />
      <h3>History</h3>
      {history &&
      <div className = 'history'>
        <button>{requestParams.method}</button>
        <h4>URL: {requestParams.url}</h4>
      </div>
      }
      <Form handleApiCall={callApi} />
      {loading ? <BeatLoader loading/> : <Results data={{results: data, headers:headers}} />}
      <Footer />
    </React.Fragment>
  );
}

export default App;