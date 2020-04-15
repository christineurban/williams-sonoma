import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  message: {
    color: '#af1a31',
    margin: '5px 0',
  },
  regular: {
    textDecoration: 'line-through',
    margin: '5px 0',
  },
  selling: {
    fontWeight: 400,
    color: '#af1a31',
    fontSize: 15,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
}));

const Subtitle = ({ product }) => {
  const classes = useStyles();
  const { priceRange, price, messages } = product;
  let regularPrice, sellingPrice, priceType;

  if (priceRange) {
    const { regular, selling, type } = priceRange;
    regularPrice = regular && `$${regular.low.toFixed(2)} – $${regular.high.toFixed(2)}`;
    sellingPrice = selling && `$${selling.low.toFixed(2)} – $${selling.high.toFixed(2)}`;
    priceType = type;
  } else if (price) {
    const { regular, selling, type } = price;
    regularPrice = regular && `$${regular.toFixed(2)}`;
    sellingPrice = selling && `$${selling.toFixed(2)}`;
    priceType = type;
  }

  return (
    <Fragment>
      {messages && messages.map((message, index) => (
        <div className={classes.message} key={`message-${index}`}>{message}</div>
      ))}
      {regularPrice && (
        <div className={classes.regular}>{regularPrice}</div>
      )}
      {sellingPrice && (
        <div className={classes.selling}>
          {priceType === 'special' && (
            <span className="subtitle-type">{'Limited Time Offer '}</span>
          )}
          <span>{sellingPrice}</span>
        </div>
      )}
    </Fragment>
  );
}

Subtitle.propTypes = {
  product: PropTypes.object,
};

export default Subtitle;
