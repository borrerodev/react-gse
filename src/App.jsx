import "./App.css";
import MovieList from "./components/movieList";
import TableRow from "./components/tableRow";
import { infoLibros } from "./data/info";
import { useEffect, useState, version } from "react";

const App = () =>{
  const [libros, setLibros] = useState(infoLibros);
  const [people, setPeople] = useState();

  // Documentacion API https://swapi.dev/
  // Obtener personajes o consumir algun otro API de acuerdo a la documentacion, mostar almenos 3 propiedades en una lista
  useEffect(() => {
     fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results)
        setPeople(data.results);
      }); 
  }, []);
  
  // Realizar metodo para eliminar personajes
  const eliminar = (name) => {
    const nuevoLibros = libros.filter(lib => lib.name !== name);
    setLibros(nuevoLibros);
  };

  // Realizar metodo para agregar personajes
  const agregar = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const author = e.target.author.value;
    const year = e.target.year.value;

    setLibros([
      ...libros,
      {
        name,
        author,
        year, 
      },
    ]);
    
  };




  return (
    <div className="App App-header">
      <div style={{ margin: 5, border: "1px solid white", padding: 5 }}>
        {/* formulario para agregar informacion*/}
        <form onSubmit={agregar} style={{ textAlign: "center" }}>
          <div>
            <label htmlFor="name">Nombre</label>
            <input id="name" type="text" placeholder="name" />
          </div>
          <div>
            <label htmlFor="author">Autor</label>
            <input id="author" type="text" placeholder="author" />
          </div>
          <div>
            <label htmlFor="year">Año</label>
            <input id="year" type="number" placeholder="year" />
          </div>
          <button type="submit">Agregar</button>
        </form>
      </div>

      {/* Ejemplo de datos que se desean mostrar en una tabla */}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Autor</th>
            <th>Año</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
        {libros?.map((element, index) => (
            <TableRow key={index} libro={element} eliminarHandler={eliminar} />
        ))}
        </tbody>
      </table>      
      <h3>Datos de API</h3>
      {/* Punto 4.Obtener datos de un API */}
      {people 
        ? <MovieList movies={people} />
        : 'no hay datos'
      } 
    </div>
  );
}

export default App;
