import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
  },
  title: {
    flexGrow: 1,
  },
  buttonLink: {
    color: 'white',
  },
}));
const Header = props => {
  const classes = useStyles();
  return (
    <AppBar position="static" style={{ marginBottom: 20 }}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {props.siteTitle}
        </Typography>
        <Link className={classes.link} to="/garden">
          <Button color="inherit" className={classes.buttonLink}>
            Garden
          </Button>
        </Link>
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
