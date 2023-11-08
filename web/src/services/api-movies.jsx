// login

const getMoviesFromApi = () => {
  console.log('http://localhost:4002/api/movies');
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  return fetch('localhost:4002/api/movies')
  .then(response => response.json())
  .then(data => {
     return data;
  });
}
const objToExport = {
  getMoviesFromApi: getMoviesFromApi
};

export default objToExport;