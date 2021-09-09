const getLikes = async () => {
  const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/N3qJO6H3DKthRFBBn3Uz/likes/';
  const response = await fetch(url2);
  const result = await response.json();
  return result;
};

export default getLikes;