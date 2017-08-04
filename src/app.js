import React from 'react';
import Button from './bootstrap/button';

export default class App extends React.Component {
  render() {
    return <div className="jumbotron jumbotron-fluid text-sm-center" style={{background: 'url(img/moon-1817885_1920.jpg) no-repeat center center', color: 'white'}}>
      <div className="container">
        <h1>Building React.js User Interfaces 1.1</h1>
        <p>with Bootstrap and Sass</p>
        <Button className="-outline-primary" disabled href="#" target="_blank" />
        <Button className="-danger -sm" disabled target="_blank" />

        <Button className="-outline-info -lg -block" href="#" target="_blank" />

      </div>
    </div>;
  }
}
