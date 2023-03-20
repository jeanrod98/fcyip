import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Imagen from "./assets/Yip.png"
import Spinner from './Components/Spinner';

function App() {

  const [ spinner, setSpinner ] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false)
    }, 3000);

  }, [])

  return (
    <>
    <div className="App">
      <header>
        <h1>¡FELIZ CUMPLEAÑOS YIPSY!&#127881;</h1>
      </header>
      <main>
        <div className="imagen">
          <img src={Imagen} alt=""/>
        </div>

        <div className="texto">
          <p>"No hay nada tan lindo en la vida, como encontrar personas como tú, que saben hacer de pequeños instantes, grandes momentos. Gracias por aparecerte en el camino de mi hermano y de mi familia."</p>
        </div>

      </main>
      
    </div>
    {spinner &&
      <Spinner/>
    }
    </>
  );
}

export default App;
