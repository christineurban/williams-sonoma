import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, CircularProgress, withStyles } from '@material-ui/core';

import Tile from './Tile';
import productData from '../data/products.json'
import logo from '../images/westElmLogoWhite.png';

const styles = (theme) => {
  return {
    root: {
      backgroundColor: theme.palette.background.paper,
      margin: '0 -8px',
    },
    header: {
      width: '100%',
      marginTop: '-8px',
      borderBottom: '1px solid #d9d9d9',
    },
    logoWrapper: {
      width: '100%',
      padding: '20px 0',
      backgroundColor: '#474747',
    },
    logo: {
      maxWidth: 190,
    },
    subheader: {
      fontSize: 12,
      fontFamily: '\'Montserrat\', sans-serif',
      fontWeight: 400,
      borderTop: '1px solid #f8f8f8',
      padding: '15px 0',
      width: '100%',
      textAlign: 'center',
    },
    gridList: {
      padding: '50px 0 0',
      borderTop: 'solid 6px #050708',
      margin: '0 20px 20px !important',
      maxWidth: 1200,
    },
    loading: {
      color: 'rgba(0, 0, 0, 0.5)',
      marginTop: 150,
    },
    flex: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
  };
};

class Products extends Component {
  state = {
    name: '',
    groups: [],
    cols: 1,
    loading: true,
    mediaQueries: {
      smlMax: window.matchMedia('(max-width: 599px)'),
      medMin: window.matchMedia('(min-width: 600px)'),
      lrgMin: window.matchMedia('(min-width: 1280px)'),
    }
  };

  componentDidMount() {
    const { name, groups } = productData;
    this.setState({ name, groups });

    // add media query listeners
    const { mediaQueries: { smlMax, medMin, lrgMin } } = this.state;

    smlMax.addListener(this.handleSmallScreen);
    medMin.addListener(this.handleMediumScreen);
    lrgMin.addListener(this.handleLargeScreen);

    this.handleSmallScreen(smlMax);
    this.handleMediumScreen(medMin);
    this.handleLargeScreen(lrgMin);

    this.setState({
      loading: false,
    })
  }

  componentWillUnmount() {
    const { mediaQueries: { smlMax, medMin, lrgMin } } = this.state;

    smlMax.removeListener(this.handleSmallScreen);
    medMin.removeListener(this.handleMediumScreen);
    lrgMin.removeListener(this.handleLargeScreen);
  }

  handleSmallScreen = (query) => {
    if (query.matches) {
      this.setState({ cols: 1 });
    }
  }

  handleMediumScreen = (query) => {
    if (query.matches) {
      this.setState({ cols: 2 });
    }
  }

  handleLargeScreen = (query) => {
    if (query.matches) {
      this.setState({ cols: 3 });
    }
  }

  render() {
    const { name, groups, cols, loading } = this.state;
    const { classes } = this.props;

    if (loading) {
      return (
      <div className={classes.flex}>
        <CircularProgress className={classes.loading} size={70} thickness={3} />
      </div>
      );
    }

    return (
      <div className={`${classes.root} ${classes.flex}`}>
        <div className={`${classes.header} ${classes.flex}`}>
          <div className={`${classes.logoWrapper} ${classes.flex}`}>
            <a href="https://github.com/christineurban/williams-sonoma" target="_blank" rel="noopener noreferrer">
              <img src={logo} alt="Logo" className={classes.logo} />
            </a>
          </div>
          <div className={classes.subheader}>{name.toUpperCase()}</div>
        </div>
        <GridList cellHeight='auto' cols={cols} className={classes.gridList}>
          {groups.map((product) => (
            <Tile key={product.id} product={product} cols={cols} />
          ))}
        </GridList>
      </div>
    );
  }
}

Products.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Products);
