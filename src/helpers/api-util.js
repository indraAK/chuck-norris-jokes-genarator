const fetchJokes = async (url) => {
  const controller = new AbortController();
  const { signal } = controller;

  try {
    const response = await fetch(url, { signal });
    const data = await response.json();
    return data;
  } catch (err) {
    controller.abort();
  }
};

export default fetchJokes;
