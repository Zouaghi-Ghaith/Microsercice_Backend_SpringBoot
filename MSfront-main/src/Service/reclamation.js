import axios from "axios";
import { token } from "./offre";
const API_URL = "http://localhost:8090/reclamation/api/reclamations";
export const getReclamations = async () => {
  try {
    const headers = {
      Authorization: `Bearer ${token} `, // Assuming it's a Bearer token
    };

    const response = await axios.get(API_URL, { headers });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const DeleteReclamtion = async (id) => {
    try {
      const headers = {
        Authorization: `Bearer ${token} `, // Assuming it's a Bearer token
      };
      const response = await axios.delete("http://localhost:8090/reclamation/api/reclamations" + id, { headers });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
}

export const addReclamation = async (provider) => {
    try {
      console.log(provider);
      const headers = {
        Authorization: `Bearer ${token} `, // Assuming it's a Bearer token
      };
      let response = await axios.post(API_URL, provider, { headers });
  
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };