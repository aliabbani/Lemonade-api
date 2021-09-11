const postLike = async (idMeal) => {
  const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/N3qJO6H3DKthRFBBn3Uz/likes/';
  const response = await fetch(url2, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      item_id: idMeal,
    }),
  });
  return response;
};

export default postLike;