export const getPosts = async () => {
  const response = await (await fetch("blog_posts.json")).json();

  if (response) {
    return response;
  }
};
