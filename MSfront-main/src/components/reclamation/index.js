import React, { useEffect, useState } from "react";
import Reclamations from "./Reclamation";
import { getReclamations } from "../../Service/reclamation";

export default function Index() {
  const [reclamations, setreclamations] = useState([]);

  async function getProductsApi() {
    try {
        setreclamations(await getReclamations());
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductsApi();
  }, []);

  return <Reclamations reclamations={reclamations} />;
}
