import React from 'react';
import {classify} from './utils';
import Container from './container';

export default class Jumbotron extends React.Component {
  render() {
    const props = Object.assign({}, this.props);
    const fluid = props.containerFluid;
    delete props.containerFluid;

    return <div {...props} className={classify('jumbotron', props.className)}>
      <Container fluid={fluid} className="blue" style={{color:'red'}}>
        { props.children }
      </Container>
    </div>;
  }
}
