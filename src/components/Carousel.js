import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Avatar, withStyles } from '@material-ui/core';
import { ArrowForward, ArrowBack } from '@material-ui/icons';
import Image from './Image';

const styles = () => {
  return {
    avatar: {
      position: 'absolute',
      top: 'calc(50% - 45px)',
      zIndex: 2,
      cursor: 'pointer',
    },
    avatarColor: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    arrowBack: {
      left: 10,
    },
    arrowForward: {
      right: 10,
    },
  };
};

class Carousel extends Component {
  state = {
    currImgIdx: 0,
  }

  previousSlide = () => {
    const { currImgIdx } = this.state;
    const { images } = this.props;

    const lastIndex = images.length - 1;
    const shouldResetIndex = currImgIdx === 0;
    const index = shouldResetIndex ? lastIndex : currImgIdx - 1;

    this.setState({
      currImgIdx: index,
    });
  }

  nextSlide = () => {
    const { currImgIdx } = this.state;
    const { images } = this.props;

    const lastIndex = images.length - 1;
    const shouldResetIndex = currImgIdx === lastIndex;
    const index = shouldResetIndex ? 0 : currImgIdx + 1;

    this.setState({
      currImgIdx: index,
    });
  }

  handleClick = () => {
    const { id, imageClicked } = this.props;
    imageClicked(id);
  }

  render() {
    const { currImgIdx } = this.state;
    const { classes, images } = this.props;

    return (
      <Fragment>
        <Avatar
          className={`${classes.avatar} ${classes.arrowBack}`}
          classes={{ colorDefault: classes.avatarColor }}
          onClick={this.previousSlide}
        >
          <ArrowBack />
        </Avatar>

        <Image url={images[currImgIdx].href} alt={images[currImgIdx].alt} imageClicked={this.handleClick} />

        <Avatar
          className={`${classes.avatar} ${classes.arrowForward}`}
          classes={{ colorDefault: classes.avatarColor }}
          onClick={this.nextSlide}
        >
          <ArrowForward />
        </Avatar>
      </Fragment>
    );
  }
}

Carousel.propTypes = {
  id: PropTypes.string,
  images: PropTypes.array,
};

export default withStyles(styles)(Carousel);
