import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(1),
    verticalAlign: 'bottom'
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: `1.45rem`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >          
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
          <HomeIcon className={classes.icon} fontSize="large" />
            {siteTitle}
          </Link>
        </Typography>
        <nav>
          <Link
            to="/page-2/"
            variant="button"
            color="textPrimary"
            className={classes.link}
          >
            Page 2
          </Link>
          <Link
            to="/page-3/"
            variant="button"
            color="textPrimary"
            className={classes.link}
          >
            Page 3
          </Link>
          <Link
            to="/album/"
            variant="button"
            color="textPrimary"
            className={classes.link}
          >
            Album
          </Link>
        </nav>
        <Button
          href="#"
          color="primary"
          variant="outlined"
          className={classes.link}
        >
          Login
        </Button>
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
