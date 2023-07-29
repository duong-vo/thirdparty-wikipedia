import React from 'react';
import withStyles from '@mui/styles/withStyles';

const styles = () => ({
});
const ArticleBody = (props) => {
  const { classes, content } = props;
  return (
    <div>
      {content}
    </div>
  );
}

export default withStyles(styles)(ArticleBody);
