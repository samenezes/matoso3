import { useState } from 'react'

function NotaForm({ addNota }) {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value ) return
        addNota(value)
        setValue("");
    
    }
  return <div className="nota-form">
<h2>Crie uma nota:</h2>
<form onSubmit={handleSubmit}>
    <input type="text" placeholder='Digite o título' onChange={(e) => setValue(e.target.value)}/>
    <button className="btnConfirmar" type="submit">Adicionar Nota</button>
</form>
  </div>
} completar

export default NotaForm