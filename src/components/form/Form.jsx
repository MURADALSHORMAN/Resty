import { useState } from 'react';
import uuid from 'react-uuid';
import './form.scss';

function Form(props) {
  const [method, setMethod] = useState('get');
  const [request, setrequest] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      id: uuid(),
      method: method,
      url: event.target.url.value,
    };
    if (method === 'get' || method === 'delete') props.handleApiCall(formData);
    if (method === 'post' || method === 'put')
      props.handleApiCall(formData, request);
  }

  const methodHandler = (event) => {
    setMethod(event.target.id);
  };

  const textAreaHandler = (event) => {
    setrequest(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <button id="get" onClick={(event) => methodHandler(event)}> GET </button>
          <button id="post" onClick={(event) => methodHandler(event)}> POST </button>
          <button id="put" onClick={(event) => methodHandler(event)}> PUT </button>
          <button id="delete" onClick={(event) => methodHandler(event)}> DELETE </button>
        </label>
        {(method === 'post' || method === 'put') && (
          <textarea cols="60" rows="5" placeholder="{'key': 'value'}" onChange={textAreaHandler}></textarea>
        )}
      </form>
    </>
  );
}

export default Form;