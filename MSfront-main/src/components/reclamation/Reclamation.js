import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { DeleteReclamtion } from "../../Service/reclamation";



export default function Reclamations(props) {
    console.log(props)
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          //add space between cards
          gap: "1rem",
          alignItems: "center",
          alignContent: "center",
          marginTop: "5vh",
        }}
      >
        {props.reclamations.map((product) => (
          <Card
            key={product.id}
            style={{ width: "16rem", boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}
          >
         
            <Card.Body>
              <Card.Title>{product.titre}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>{product.statut}</Card.Text>
              <Button variant="danger" onClick={()=>DeleteReclamtion(product.id)}>Delete</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
