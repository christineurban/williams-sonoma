import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ url, alt, imageClicked }) => {
  const styles = {
    width: '100%',
    height: '100%',
    left: '50%',
    position: 'relative',
    transform: 'translateX(-50%)',
    cursor: 'pointer',
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (imageClicked) {
      imageClicked();
    }
  }

  return (
    <img src={url} alt={alt} style={styles} onClick={handleClick}></img>
  );
}

Image.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  imageClicked: PropTypes.func,
};

export default Image;
