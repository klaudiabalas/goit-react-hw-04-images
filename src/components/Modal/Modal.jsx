import PropTypes from 'prop-types';
import { useEffect } from 'react';

import css from './Modal.module.css';

export const Modal = ({ onModalClose, largeImageURL }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 27 || event.currentTarget === event.target) {
        return onModalClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalClose]);

  return (
    <div className={css.overlay} onClick={onModalClose}>
      <div className={css.modal}>
        <img src={largeImageURL} alt="" className={css.modal_image} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
