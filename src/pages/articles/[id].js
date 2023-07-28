import React from 'react';
import withStyles from '@mui/styles/withStyles';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBar from '../../components/SearchBar';

const styles = () => ({
  title: {
    color: 'black',
  },
  appBar: {
    background: 'white',
  },
});

const Article = (props) => {
  const { classes } = props;
  const router = useRouter();
  return (
    <div>
      <AppBar className={classes.appBar} position="sticky">
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography className={classes.title} variant="h4">
                Test
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <SearchBar />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Article);
