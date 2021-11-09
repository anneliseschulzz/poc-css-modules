import React from 'react';
import styles from './action-button.module.scss';
import classNames from 'classnames';

class ActionButton extends React.Component {
  render() {
    const type = this.props.type
    return (
        <button
          className={classNames(
            styles.button,
            styles[`button__${type}`]
          )}
            >
            {this.props.label}
        </button>
    );
  }
}
export default ActionButton;