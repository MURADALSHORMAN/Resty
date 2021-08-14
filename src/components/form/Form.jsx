import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import './form.scss';

function Form(props) {
  const [url, seturl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [method, setMethod] = useState('get');
  const [textArea, settextArea] = useState(false);
  const [request, setrequest] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        method: method,
        url: url,
        data: {},
      });
      const formData = {
        method: method,
        url: url,
      };
      props.handleApiCall(res.headers, res.data, formData, request);
    } catch (error) {
      console.error(error);
    }
  };


  const methodHandler = async (event) => {
    await setMethod(event.target.id);
    settextArea(false);
  };

  const textAreaHandler = async (event) => {
    settextArea(true);
    await setMethod(event.target.id);
  };

  const requestHandler = (event) => {
    setrequest(event.target.value);
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input onChange = {(event) => seturl(event.target.value)} name="url" type="text" />
          <button data-testid="submitData" type="submit">GO!</button>
        </label>
        <label className="methods">
          <button onClick = {methodHandler} id="get">GET</button>
          <button onClick = {textAreaHandler} id="post">POST</button>
          <button onClick = {textAreaHandler} id="put">PUT</button>
          <button onClick = {methodHandler} id="delete">DELETE</button>
        </label>
        {textArea &&
          <textarea onChange = {requestHandler} cols="50" rows="5"></textarea>
        }
      </form>
    </>
  );
}

export default Form;