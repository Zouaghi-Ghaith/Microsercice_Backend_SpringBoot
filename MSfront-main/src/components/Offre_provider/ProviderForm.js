import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createoffer } from "../../Service/offre";
export default function OffreForm() {
  const [name, setname] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [status, setstatus] = useState("");
  const handleSubmit = (e) => {
    e?.preventDefault();
    let Provider = {
      name: name,
      description: description,
      image: image,
      status: status,
    };
    console.log(Provider);
    createoffer(Provider);
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
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={image}
              onChange={(e) => setImage(e.target.value)}
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
