import React from 'react'

const Nota = ({ nota, removeNota, vizualizarNota }) => {
    return (
        <>
         <div className="nota" style={{textDecoration: nota.isVizualizar ? "line-through" : " "}}> 
        <div className="content">
          <p>{nota.text}</p>
          <p className="category">
            {nota.category}
          </p>
        </div>
        <div>
          <button className="vizualizar" onClick={() => vizualizarNota(nota.id)}>Vizualizar</button>
          <button className="remove" onClick={() => removeNota(nota.id)}>Deletar</button>
        </div>
     </div>
        </>
    )
}

export default Nota