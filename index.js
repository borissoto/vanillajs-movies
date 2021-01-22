const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '193b44a8',
      s: searchTerm,
    },
  });

  return response.data.Search; // it is uppercase S beacuse of the api, in general you should expect lowercase letter
};

const input = document.querySelector('input');

const onInput = debounce((event) => {
  const movies = fetchData(event.target.value);

  for (let movie of movies) {
    const div = document.createElement('div');

    div.innerHTML = `
      <img src="${movie.Poster}"/>
      <h1>${movie.Titel}</h1>
    `;
  }
});

input.addEventListener('input', debounce(onInput, 500));
