import axios from "axios";

const API_URL = "http://localhost:8090/offer/getAll";

export let token =
  "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJoeWRQSVNNQjdqZkhaYzMtNWRDSE52bkFIWUJNblVJRkJjRTJXcm9DdGQ0In0.eyJleHAiOjE2OTgzNjUzMDksImlhdCI6MTY5ODM2NTAwOSwianRpIjoiNjVmZTQ2ZDMtNzc0ZC00NWU5LTljNDMtN2RiYTA0NGI3MzdkIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrOjgwODAvcmVhbG1zL01pY3JvU2VydmljZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI0OWFmMjAzNS1iYjY4LTRkYmYtYTk3Ny03ZmNlMWFhOWU5NzEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJPZmZlck1pY3JvU2VydmljZSIsInNlc3Npb25fc3RhdGUiOiI3ZTI5NDQ3YS1kZTA4LTRlNDktOWEyNy00MDRjMTM1ZTJhMzQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MSJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW1pY3Jvc2VydmljZSIsInVtYV9hdXRob3JpemF0aW9uIiwidXNlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiI3ZTI5NDQ3YS1kZTA4LTRlNDktOWEyNy00MDRjMTM1ZTJhMzQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.XCZ3f2p4ZpWAyt0lObzBrZ1Sy7KQSi3USQ2dEWuuVZuFXdAjx3EaFfe1H32OjaWFsqA2Ol_qumMkRGopan5i5qkbk1IAGQU_DyzVTmDgzh7DTTsjiwwYFG40m_LuC_-JF6YBV8U76aj9wTIaa9VGcul3S0Wwb3pdvx7OFMw9XWVmJ_OXf01tFzqwAh4Kcc2NkSuDz7IJ_RXT26HE4M3sGbpnIQF87uo_Ut8YjOMbMdKxsBHIFQ1fK-TLbcKAKwwxMOht-3Mm-v8a0jSCXUYpv_g3kRnRr68a0_M5Y1XoqWYTepbMCUoS-ASkD5nThtCtBDP9ePk__Z7bcYEP1sGlvw";
export const getOffers = async () => {
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
export const DeleteOffre = async (id) => {
  try {
    const headers = {
      Authorization: `Bearer ${token} `, // Assuming it's a Bearer token
    };
    const response = await axios.delete("http://localhost:8090/offer/" + id, {
      headers,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const createoffer = async (provider) => {
  try {
    const headers = {
      Authorization: `Bearer ${token} `, // Assuming it's a Bearer token
    };
    console.log(provider);
    let response = await axios.post(
      "http://localhost:8090/offer/create/",
      provider,
      { headers }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
export const updateoffer = async (provider, id) => {
  try {
    console.log(provider);
    const headers = {
      Authorization: `Bearer ${token} `, // Assuming it's a Bearer token
    };
    let response = await axios.put(
      "http://localhost:8090/offer/" + id,
      provider,
      { headers }
    );

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
