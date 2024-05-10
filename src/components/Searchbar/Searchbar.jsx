import PropTypes from 'prop-types';
import { Component } from 'react';

import css from './Searchbar.module.css';

export class Searchbar extends Component {
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.props.onSubmit}>
          <input
            className={css.searchForm_input}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.searchForm_button}>
            <span className={css.searchForm_span}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
