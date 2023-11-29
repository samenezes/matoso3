import { useState } from 'react';
import './App.css';
import Nota from './components/Nota';
import NotaForm from './components/NotaForm';
import Search from './components/Search';
import Filter from './components/filter';

function App() {
  const [notas, setNotas] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState("All")
  
  const addNota = (text, category) => {
    const newNotas = [
      ...notas,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isVizualizar: false,
      },
    ];
    setNotas(newNotas);
    setText('');
   
  }

  const removeNota = (id) => {
    const newNotas = [...notas];
    const filteredNotas = newNotas.filter(nota => nota.id !== id);
    setNotas(filteredNotas);
  }

  const vizualizarNotas = (id) => {
    const newNotas = [...notas];
    newNotas.map((nota) => {
      if (nota.id === id) {
        nota.isVizualizar = !nota.isVizualizar;
      }
      return nota;
    });
    setNotas(newNotas);
  }

  

  return (
    <div className="app">
      <h1>Lista de Notas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} />
      <div className="nota-list">
        {notas
          .filter((nota)=>filter === "All" ? true : filter === "Vizualizar" ? nota.isVizualizar : !nota.isVizualizar)
          .filter((nota) =>
            nota.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((nota) => (
            <Nota
              key={nota.id}
              nota={nota}
              removeNota={removeNota}
              vizualizarNota={vizualizarNota}
            />
          ))}
      </div>
      <NotaForm addNota={addNota} />
    </div>
  ); 
}

export default App;