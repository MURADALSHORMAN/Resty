import React from 'react';
import './history.scss';

function History(props) {
  return (
    <div>
      <h3>History:</h3>
      {props.history.map((data) => {
        return (
          <ul key ={data.id}>
            <li className = 'dataList'>
              URL:{data.url}<button>{data.method.toUpperCase()} </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default History;