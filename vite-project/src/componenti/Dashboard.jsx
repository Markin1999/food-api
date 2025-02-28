import { useEffect, useState } from "react";
import Ricerca from "./Ricerca";

function Dashboard() {
  // const PORT = import.meta.env.VITE_PORT;
  const PORT = 5001;

  const [categoria, setCategoria] = useState([]);

  const fetchRicette = async () => {
    try {
      const response = await fetch(`http://localhost:${PORT}/ricette`);
      if (response.ok) {
        const dataFetched = await response.json();

        const categorie = [];
        dataFetched.forEach((element) => {
          categorie.push(element.categoria);
        });
        const reduceArr = categorie.reduce((acc, item) => {
          if (!acc.includes(item)) {
            acc.push(item);
          }
          return acc;
        }, []);
        setCategoria(reduceArr);
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
        <Ricerca categoria={categoria} />
      </div>
    </>
  );
}

export default Dashboard;
