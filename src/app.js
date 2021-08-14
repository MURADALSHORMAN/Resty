import React from 'react';
import { useState, useEffect, useReducer } from 'react';
import { BeatLoader } from 'react-spinners';
import axios from 'axios';
import './app.scss';

import Header from './components/header/Headers';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Results';
import History from './components/history/History';
import {
  initialState,
  historyReducer,
  historyAction,
} from './components/action/Actions';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [requestBody, setRequestBody] = useState({});
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useReducer(historyReducer, initialState);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (requestParams.url) {
      if (requestBody) {
        const data = await axios({
          method: requestParams.method,
          url: requestParams.url,
          bodyData:JSON.parse(requestBody)
        });
        setData(data);
        setLoading(false);
        dispatch(historyAction(requestParams));
      } else {
        const data = await axios({
          method: requestParams.method,
          url: requestParams.url
        });
        setData(data);
        setLoading(false);
        dispatch(historyAction(requestParams));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestParams]);

  async function callApi(formData, requestBody) {
    setLoading(true);
    setRequestBody(requestBody);
    setRequestParams(formData);
  }

  return (
    <React.Fragment>
      <Header />
      {state.history.length ? <History history={state.history} /> : null}
      <Form handleApiCall={callApi} />
      {loading ? <BeatLoader loading /> : <Results data={data} />}
      <Footer />
    </React.Fragment>
  );
}

export default App;