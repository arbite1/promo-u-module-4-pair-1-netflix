//importar
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");


//crear el servidor
const app = express();

//configurar el servidor
app.use(cors());
app.use(express.json({ limit: "25mb" }));

//conexión a la bases de datos
async function getConnection() {
  //creary configurar la conexion
  const connection = await mysql.createConnection({
    host: "localhost:3306",
    user: "root",
    password: "arbite",
    database: "Netflix",
  });

  connection.connect();
  return connection;
}

//iniciar el servidor
const port = 4002;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

//endpoint para todas las alumnas
app.get("/api/movies", async (req, res) => {
  //require para cuando envien datos
  //response para enviar desde el server datos al front

  //Obtener los datos de la bases de datos
  // 1. Obtener la conexion
  const conn = await getConnection();

 //. 2. Consulta que quiero a la bd: obtener todas las 
 const queryMovies = "SELECT * FROM Netflix.movies";
   //3. Ejecutar la consulta
   const [results, fields] = await conn.query(queryMovies);

   console.log(fields);
   console.log(results);
 
   //4. Cerra la conexión
   conn.end();
   res.json(results);
 });

// login

const getMoviesFromApi = () => {

  
  console.log('Se están pidiendo las películas de la app');
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  return fetch('//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json')
    .then(response => response.json())
    .then(data => {
      return data;
   });
  };
    
export default objToExport;
