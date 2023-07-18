import React from 'react';
import axios from 'axios';

function Page() {
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

  return (
    <>
      <div> Page Content Here </div>
    </>
  )
}

export default Page;
