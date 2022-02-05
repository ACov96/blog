const api = 'https://cdn.covington.tech/blog/posts';

function parsePostsFromIndex(indexString) {
  const doc = new DOMParser().parseFromString(indexString, 'text/html');
  const rawPostElements = doc.getElementsByTagName('pre').item(0).innerText.split('\n').filter(post => post !== "../" && post !== "");
  const minifiedPosts = rawPostElements.map((post) => {
    const words = post.split(/\s+/);
    const _date = new Date(Date.parse(`${words[1]} ${words[2]}`));
    return {
      link: `${api}/${words[0]}`,
      title: words[0].replace('.md', ''),
      date: _date.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}),
    };
  });
  console.log(minifiedPosts);
  return minifiedPosts;
}

export { parsePostsFromIndex };