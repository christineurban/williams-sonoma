import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  GridListTileBar,
  IconButton,
  withStyles,
} from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';

import Carousel from './Carousel';
import Subtitle from './Subtitle';
import Image from './Image';

const styles = () => {
  return {
    root: {
      padding: 2,
      boxSizing: 'border-box',
      flexShrink: 0,
    },
    tile: {
      height: "100%",
      display: 'block',
      overflow: 'hidden',
      position: 'relative',
    },
    gridListTileBar: {
      fontFamily: '\'Montserrat\', sans-serif',
    },
    gridListTileBarRoot: {
      background: 'rgba(255, 255, 255, 0.8)',
      height: '90px !important',
    },
    gridListTileBarTitleWrap: {
      color: '#303030',
      margin: '5px, 0',
    },
    gridListTileBarTitle: {
      fontSize: 18,
    },
    iconButton: {
      marginRight: 5,
    },
    icon: {
      color: 'rgba(0, 0, 0, 0.5)',
    },
  };
};

class Tile extends Component {
  state = {
    showCarousel: false,
    tileHeight: null,
  };

  handleClick = () => {
    const { showCarousel } = this.state;

    // keep static height on image/carousel wrapper to prevent flickering on switch
    const tileHeight = document.getElementsByClassName('tile-item')[0].clientHeight;

    this.setState({
      showCarousel: !showCarousel,
      tileHeight: { height: tileHeight },
    });
  }

  getWidth = (cols) => {
    let width;

    switch (cols) {
      case 1:
        width = `100%`;
        break;
      case 2:
        width = `50%`;
        break;
      default:
        width = `33.33%`;
    }

    return { width };
  }

  getHeight = (tileHeight) => {
    return tileHeight || { height: 'auto' };
  }

  render() {
    const { showCarousel, tileHeight } = this.state;
    const { classes, product, cols } = this.props;
    const width = this.getWidth(cols);
    const height = this.getHeight(tileHeight);

    return (
      <li style={{ ...width, ...height }} className={`${classes.root} tile-item`}>
        <div className={classes.tile}>
          {showCarousel ? (
            <Carousel id={product.id} images={product.images} imageClicked={this.handleClick} />
          ) : (
            <Image url={product.hero.href} alt={product.hero.alt} imageClicked={this.handleClick} />
          )}
          <GridListTileBar
            title={product.name}
            subtitle={<Subtitle product={product} />}
            className={classes.gridListTileBar}
            classes={{
              root: classes.gridListTileBarRoot,
              titleWrap: classes.gridListTileBarTitleWrap,
              title: classes.gridListTileBarTitle,
            }}
            actionIcon={
              <IconButton aria-label={`navigate to ${product.name}`} className={classes.iconButton}>
                <a href={product.links.www} target="_blank" rel="noopener noreferrer">
                  <LaunchIcon className={classes.icon}/>
                </a>
              </IconButton>
            }
          />
        </div>
      </li>
    );
  }
}

Tile.propTypes = {
  product: PropTypes.object,
  cols: PropTypes.number,
};

export default withStyles(styles)(Tile);
