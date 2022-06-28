// On the web, it is considered good practice not to load anything extra into the browser.
// There are many strategies for dealing with redundant code: code splitting and minification, image optimization, caching, refactoring and removal of old code.

// we will make a stub for the server to simulate requests to it:
// Let's create the database first:
const post = {
  title: "Post title",
  body:
    "The text of the post in the world's best social network Switter.",
  likes: 77,
  reposts: 7,
}

// Now let's create an "API server":
const server = {
  // The page argument is the number of the page to load.
  posts(page = 1) {
    const finished = page >= 5
    // It indicates which page will be next in a row.
    const next = finished ? null : page + 1
      // We send an array of 5 post objects as posts.
      const posts = Array(5).fill(post)

    return new Promise((resolve) => {
      // Timeout simulates network "latency".
      setTimeout(() => {
        resolve({ posts, next })
      }, 150)
    })
  },
}

// We will call the method to receive new posts using await
const response = await server.posts();

// We want to load new content when the user scrolls to the bottom of the page.
/* HTML
<article class="post">
  <h1>Post title</h1>
  <p>
    The text of the post in the world's best social network Switter.
  </p>
  <footer>
    <button type="button">❤️ 20</button>
    <button type="button">🔄 20</button>
  </footer>
</article>
*/



