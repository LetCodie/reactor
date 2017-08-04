import React from 'react';

export default class Button extends React.Component {
  classify(v) {
    if(v[0]==='-') v = ` ${v}`;
    let value = v.split(' ').join(` btn`);
    return `btn${value}`;
  }

  render() {
    const Tag = this.props.href ? 'a' : 'button';
    const className = this.classify( this.props.className ) + (this.props.disabled ? ' disabled' : '');

    return <Tag  {...this.props } className={className}>Visit us!</Tag>;
  }
}
