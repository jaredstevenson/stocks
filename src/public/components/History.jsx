import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class History extends React.Component{
  render() {
    return (
      <div>
        <div>History!</div>
        <div>{JSON.stringify(this.props.transactions)}</div>
        <div></div>
      </div>
    )}
  }
