import axios from "axios";
import { token } from "./offre";
const API_URL = "http://localhost:8090/forum/getAll";
export const getForums = async () => {
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
export const DeleteForum = async (id) => {
  try {
    const headers = {
      Authorization: `Bearer ${token} `, // Assuming it's a Bearer token
    };
    const response = await axios.delete(
      "http://localhost:8090/forum/" + id,
      { headers }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addForum = async (provider) => {
 try {
   const headers = {
     Authorization: `Bearer ${token} `, // Assuming it's a Bearer token
   };
   console.log(provider);
   let response = await axios.post(
     "http://localhost:8090/forum/create",
     provider,
     { headers }
   );
   console.log(response);
 } catch (error) {
   console.log(error);
 }
};

export const updateforum = async (provider, id) => {
  try {
    console.log(provider);
    const headers = {
      Authorization: `Bearer ${token} `, // Assuming it's a Bearer token
    };
    let response = await axios.put(
      "http://localhost:8090/forum/" + id,
      provider,
      { headers }
    );

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

