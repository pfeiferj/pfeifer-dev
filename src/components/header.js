import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

const Header = props => {
  const { classes } = props;
  console.log(classes);
  return (
    <AppBar position="static" style={{ marginBottom: 20 }}>
      <Toolbar>
        <Typography variant="h6">{props.siteTitle}</Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
