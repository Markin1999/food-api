import { useEffect, useState } from "react";

function Dashboard() {
  const PORT = import.meta.env.VITE_PORT;

  const [data, setData] = useState();
  const [categoria, setCategoria] = useState();

  const fetchRicette = async () => {
    try {
      const response = await fetch(`http://localhost:${PORT}`);
      if (response.ok) {
        const dataFetched = await response.json();
        setData(dataFetched);

        const categorie = [];
        dataFetched.forEach((element) => {
          categorie.push(element.categoria);
        });
        setCategoria(categorie);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRicette();
  }, []);

  return (
    <>
      <div>
        {data.map((ricetta) => (
          <div key={ricetta.id}>
            <img src={ricetta.img} />
            <h2>{ricetta.titolo}</h2>
            <h4>{ricetta.categoria}</h4>
            <h5>{ricetta.durata}</h5>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dashboard;
