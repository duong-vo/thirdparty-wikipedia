import React from 'react';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBar from '../../components/SearchBar';

const Article = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography>
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

export default Article;
