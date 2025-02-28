/* eslint-disable react/prop-types */
import { useState } from "react";

function Ricerca({categoria}) {
const [select, setSelect] = useState()

const handleChange = (e)=>{
const {value} = e.target
setSelect(value)
}
  return (
    <>
      <label>Seleziona Categoria:</label>
      <select onChange={handleChange} value={select}>
        {categoria.map((element, index)=>(
          <option value={element} key={index}>{element}</option>
        ))}
      </select>
    </>
  );
}

export default Ricerca;
