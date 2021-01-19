const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '',
      s: 'avengers',
    },
  });
  console.log(response.data);
};

fetchData();
