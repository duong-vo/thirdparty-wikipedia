import React from 'react';
import withStyles from '@mui/styles/withStyles';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBar from '../../components/SearchBar';
import ArticleBody from './ArticleBody';
import axios from 'axios';

const styles = () => ({
  title: {
    color: 'black',
  },
  appBar: {
    background: 'white',
  },
});

const Article = (props) => {
  const { classes, data } = props;
  console.log('data', data);
  const router = useRouter();
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="h4">
                Test
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <SearchBar />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <ArticleBody />
    </div>
  );
}

export async function getStaticProps() {
  console.log('got here');
  axios.get('https://en.wikipedia.org/w/api.php', {
    params: {
      action: 'query',
      format: 'json',
      prop: 'extracts',
      explaintext: true,
      titles: 'ChatGPT'
    }
  })
    .then(response => {
      const pages = response.data.query.pages;
      const pageId = Object.keys(pages)[0];
      const pageContent = pages[pageId].extract;
      console.log(pageContent);
    })
    .catch(error => {
      console.error('ERROR:', error);
    });

  return {
    props: { data: 'hi' },
  };
}

export async function getStaticPaths() {
  const paths =  [{ params: { id: 'test' } }];
  return {
    paths,
    fallback: false
  };
}

export default withStyles(styles)(Article);
