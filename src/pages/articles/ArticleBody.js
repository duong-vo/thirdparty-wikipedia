import React from 'react';
import withStyles from '@mui/styles/withStyles';

const styles = () => ({
});
const ArticleBody = (props) => {
  const { classes } = props;
  return (
    <div>
      Body Here
    </div>
  );
}

export default withStyles(styles)(ArticleBody);
