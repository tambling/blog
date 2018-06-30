import React, { Component } from 'react';

import classNames from './style.module.css';

class Modal extends Component {
  // componentDidMount() {
  //   document.body.classList.toggle('modalOpen', true);
  // }

  // componentWillUnmount() {
  //   document.body.classList.toggle('modalOpen', false);
  // }

  render() {
    const { wrapperStyle, containerStyle, children, dismiss } = this.props;
    return (
      <div 
        onClick={() => dismiss()} 
        className={classNames.wrapper} 
        style={wrapperStyle}
      >
        <div 
          className={classNames.container} 
          style={containerStyle}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    );
  }
}


export default Modal;
