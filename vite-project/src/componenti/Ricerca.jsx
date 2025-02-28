/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function Ricerca({ categoria }) {
  const [select, setSelect] = useState("all");

  const [dataCategorie, setDataCategorie] = useState([]);

  const PORT = 5001;

  const handleCategorie = async () => {
    try {
      const response = await fetch(
        `http://localhost:${PORT}/categoria/${select}`
      );
      if (response.ok) {
        const dataFetched = await response.json();
        setDataCategorie(dataFetched);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleCategorie();
  }, [select]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelect(value);
  };

  return (
    <>
      <div>
        <label>Seleziona Categoria:</label>
        <select onChange={handleChange} value={select}>
          <option value="all">Mostra tutto</option>

          {categoria.map((element, index) => (
            <option value={element} key={index}>
              {element}
            </option>
          ))}
        </select>
        <hr />
        <div>
          {dataCategorie.map((ricetta) => (
            <div key={ricetta.id}>
              <img src={ricetta.img} />
              <h2>{ricetta.titolo}</h2>
              <h4>{ricetta.categoria}</h4>
              <h5>durata: {ricetta.durata}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Ricerca;
