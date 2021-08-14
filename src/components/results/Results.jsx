import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import './results.scss';

function Results(props) {
  return (
    <>
      <div className = 'results' data-testid="preResults">
        {props.data && (
          <>
            <h2>Headers:</h2>
            <JSONPretty className = 'jsonData' data={props.data.headers} />
            <h2>Results:</h2>
            <JSONPretty className = 'jsonData' data={props.data} />
          </>
        )}
      </div>
    </>
  );
}

export default Results;