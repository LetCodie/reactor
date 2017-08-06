import React from 'react';
import {classify} from './utils';
import Container from './container';
import './jumbotron.scss';

export default class Jumbotron extends React.Component {
  render() {
    const CSS_NAME = 'jumbotron';
    const props = Object.assign({}, this.props);
          props.className = classify('jumbotron', props.className);
    const fluid = props.containerFluid;
    delete props.containerFluid;
    console.log(props.className.includes(CSS_NAME + '-fluid'));
    const body = props.className.includes(CSS_NAME + '-fluid') ? props.children:<Container fluid={fluid} className="blue" style={{color:'red'}}>
      { props.children }
    </Container>;

    return <div {...props}>
      {body}
    </div>;
  }
}
