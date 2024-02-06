# Prueba tecnica react
## Jorge Borrero

## Ojetivos

Revisar el codigo en el archivo App.jsx, y realizar las mejoras que considere pertinente de acuerdo a buenas practicas en React y Js.
Se pueden utilizar librerias externas si asi lo desean para mejorar el proceso o actividades a realizar.

### Notas:
Version actual React 17.2.0
Version final esperada React 18.2.0

## Migrar react 17 a 18
1. Actualizar paquetes: npm i react@latest react-dom@latest
2. Modificar el archivo de render de cliente index usando react-dom/client

##  Agregar Vite a proyecto CRA
1. Eliminar los script de react con comando: npm uninstall react-scripts
2. Agregar vite al proyecto: npm install vite @vitejs/plugin-react
3. Mover index.html a la raiz y agregarle type="module"
4. crear archivo en raiz vite.config.js (configuracion de vite como plugins y servidor)
5. Modificar package.json con los script de vite

   Ejecutar con: npm run start 

## Eliminacion de errores de consola
* Se cambio la forma de el cargue de render en el cliente  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

* En los label se cambio la propiedad for por htmlFor
* Se agregaron thead y tbody a las tablas
