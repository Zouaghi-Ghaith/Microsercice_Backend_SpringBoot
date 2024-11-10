import axios from "axios";
import { token } from "./offre";
const API_URL = "http://localhost:8090/product/addProduct";

export const addProvider = async (provider) => {
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

export const updateproduct = async (provider,id) => {
  try {
    console.log(provider);
    const headers = {
      Authorization: `Bearer ${token} `, // Assuming it's a Bearer token
    };
    let response = await axios.put("http://localhost:8090/product/modifyProduct/" + id , provider, { headers });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};