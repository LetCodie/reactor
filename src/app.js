import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './application.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    console.log(this);
  }

  render() {
    return <ReactCSSTransitionGroup
              transitionName="app"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}><Jumbotron containerFluid={false} className="-fluid custom">
        <h1>Building React.js User Interfaces 1.1</h1>
        <p>with Bootstrap and Sass</p>
        <Button className="-primary" href="#" target="_blank" label="Discover things" />
        <Button className="-danger -sm" target="_blank">A miracle happen!</Button>

        <p></p>
        <Button onClick={this.onClick} className="-success -lg btn -block" href="#" label="Sound so great!" />

    </Jumbotron></ReactCSSTransitionGroup>;
  }
}
