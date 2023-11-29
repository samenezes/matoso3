const filter = ({filter, setFilter}) => {
    return (
      <div className="filter">
          <h2>Filtrar:</h2>
          <div className="filter-options">
              <div>
                  <p>Status:</p>    
                  <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                      <option value="All"> Notas Adionadas </option>
                      <option value="Incomplete"> Notas excluídas </option>
                  </select>
              </div>    
                     </div>
      </div>
    )
  }
  
  export default filter