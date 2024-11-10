import React, { useEffect, useState } from "react";
import Forums from "./Forum";
import { getForums } from "../../Service/forum";

export default function Index() {
  const [forums, setforums] = useState([]);

  async function getProductsApi() {
    try {
      setforums(await getForums());
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductsApi();
  }, []);

  return <Forums forums={forums} />;
}
