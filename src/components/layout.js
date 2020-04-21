import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Copyright from '../components/copyright';
import Header from './header';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(2),
    '& p': {
      fontSize: '15px',
    },
    '& a': {
      fontSize: '15px',
    },
  },
  footer: {
    textAlign: 'center',
    padding: theme.spacing(2, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container component="main" className={classes.main} maxWidth="md">
          <main>{children}</main>
        </Container>
        <footer className={classes.footer}>
          <Container maxWidth="xl">
            <Copyright />
          </Container>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
