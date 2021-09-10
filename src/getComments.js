const getComments = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lCZQ9jd97Oj1oy24PzZg/comments?item_id=${id}`;
  const tempResult = await fetch(url);
  const results = await tempResult.json();
  return results;
};

export default getComments;