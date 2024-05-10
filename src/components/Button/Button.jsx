import PropTypes from 'prop-types';
import { Component } from 'react';

import css from './Button.module.css';

export class Button extends Component {
  render() {
    return (
      <button type="button" className={css.button} onClick={this.props.onPage}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onPage: PropTypes.func.isRequired,
};
