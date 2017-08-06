import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import './application.css';

export default class App extends React.Component {
  render() {
    return <Jumbotron containerFluid={false} className="-fluid text-sm-center custom">
        <h1>Building React.js User Interfaces 1.1</h1>
        <p>with Bootstrap and Sass</p>
        <Button className="-outline-primary" href="#" target="_blank" />
        <Button className="-danger -sm" disabled target="_blank" />

        <Button className="-outline-info -lg -block" href="#" target="_blank" />
    </Jumbotron>;
  }
}
