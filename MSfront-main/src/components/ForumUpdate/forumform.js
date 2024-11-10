import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addForum, updateforum } from "../../Service/forum";
import { useParams } from "react-router-dom";

export default function OfferForum() {
  const [name, setname] = useState("");
  const [description, setDescription] = useState("");
  const [status, setstatus] = useState("");
  const { forumId } = useParams();

  const handleSubmit = (e) => {
    e?.preventDefault();
    let Provider = {
      name: name,
      description: description,
      status: status,
    };
    console.log(Provider);
    updateforum(Provider, forumId);
    setname("");
    setDescription("");
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
            <Form.Label>Title</Form.Label>
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
            <Form.Label>Comment</Form.Label>
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
