import React from 'react';
import ReactDOM from 'react-dom';

const component = <div className="jumbotron jumbotron-fluid text-sm-center" style={{background: 'url(img/moon-1817885_1920.jpg) no-repeat center center', color: 'white'}}>
  <div className="container">
    <h1>Building React.js User Interfaces</h1>
    <p>with Bootstrap and Sass</p>
    <a className="btn btn-primary" href="#" target="_blank">Visit us!</a>
  </div>
</div>

ReactDOM.render(component, document.getElementById('app'));
