import React from 'react';
import { Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Typography variant="h2" component="h1" gutterBottom>
      Hi people
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      {'Pin a footer to the bottom of the viewport. '}
      {'The footer will move as the main element of the page grows. '}
    </Typography>
    <Typography variant="body1">Welcome to your new Gatsby site.</Typography>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
);

export default IndexPage;
