import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addReclamation, createoffer } from "../../Service/reclamation";
export default function ReclamationForm() {
  const [name, setname] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [status, setstatus] = useState("");
  const handleSubmit = (e) => {
    e?.preventDefault();
    let Provider = {
      titre: name,
      description: description,
      statut: status,
      "priorite": "HAUTE",
      "notesInternes": "Quelques notes internes",
      "feedbackUtilisateur": "Feedback de l'utilisateur",
      "typeReclamation": "TECHNIQUE"
    };
    console.log(Provider);
    addReclamation(Provider);
    setname("");
    setDescription("");
    setImage("");
    setstatus("");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          marginTop: "5vh",
        }}
      >
        Reclamation
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>status</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={status}
              onChange={(e) => setstatus(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Provider
          </Button>
        </Form>
      </div>
    </>
  );
}
