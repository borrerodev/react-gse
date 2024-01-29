import "./App.css";
import { infoLibros } from "./data/info";

function App() {
  // Realizar metodo para eliminar personajes
  const eliminar = () => {};

  // Realizar metodo para agregar personajes
  const agregar = () => {};

  // Documentacion API https://swapi.dev/
  // Obtener personajes o consumir algun otro API de acuerdo a la documentacion, mostar almenos 3 propiedades en una lista
  const getPeople = () => {
    fetch("https://swapi.dev/api/people/1", {}).then((x) => {
      return x;
    });
  };

  getPeople();

  return (
    <div className="App App-header">
      <div style={{ margin: 5, border: "1px solid white", padding: 5 }}>
        {/* formulario para agregar informacion*/}
        <form onSubmit={agregar} style={{ textAlign: "center" }}>
          <div>
            <label for="name">Nombre</label>
            <input type="text" placeholder="name" />
          </div>
          <div>
            <label for="author">Autor</label>
            <input type="text" placeholder="author" />
          </div>
          <div>
            <label for="year">Año</label>
            <input type="number" placeholder="year" />
          </div>
          <button type="submit">Agregar</button>
        </form>
      </div>

      {/* Ejemplo de datos que se desean mostrar en una tabla */}
      <table>
        <tr>
          <th>Nombre</th>
          <th>Autor</th>
          <th>Año</th>
          <th>Eliminar</th>
        </tr>
        {infoLibros.forEach((element) => (
          <tr>
            <td>{element.name}</td>
            <td>{element.author}</td>
            <td>{element.year}</td>
            <button
              onClick={() => {
                eliminar();
              }}
            >
              Eliminar
            </button>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
