import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby-theme-material-ui';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      {new Date().getFullYear()}, Built with
      {` `}
      <Link color="inherit" href="https://www.gatsbyjs.org">
        Gatsby
      </Link>
      {` and `}
      <Link color="inherit" href="https://material-ui.com/">
        Material UI
      </Link>
    </Typography>
  );
};

export default Copyright;
