import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './application.scss';

export default class App extends React.Component {
  render() {
    return <ReactCSSTransitionGroup
              transitionName="app"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}><Jumbotron containerFluid={false} className="-fluid custom">
        <h1>Building React.js User Interfaces 1.1</h1>
        <p>with Bootstrap and Sass</p>
        <Button className="-outline-primary" href="#" target="_blank" />
        <Button className="-danger -sm" target="_blank" />

        <Button className="-outline-info -lg -block" href="#" target="_blank" />
    </Jumbotron></ReactCSSTransitionGroup>;
  }
}
