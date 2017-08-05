import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import Container from './bootstrap/container';

export default class App extends React.Component {
  render() {
    return <Jumbotron className="-fluid text-sm-center" style={{background: 'url(img/moon-1817885_1920.jpg) no-repeat center center', color: 'white'}}>
      <Container>
        <h1>Building React.js User Interfaces 1.1</h1>
        <p>with Bootstrap and Sass</p>
        <Button className="-outline-primary" href="#" target="_blank" />
        <Button className="-danger -sm" disabled target="_blank" />

        <Button className="-outline-info -lg -block" href="#" target="_blank" />
      </Container>
    </Jumbotron>;
  }
}
