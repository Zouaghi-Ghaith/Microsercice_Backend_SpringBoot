import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addProvider, updateproduct } from "../../Service/providers";
import  {useParams} from "react-router-dom";
export default function Productedit() {
    console.log("Productupdate");
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
    const {userId} = useParams();
  const handleSubmit = (e) => {
    e?.preventDefault();
    let Provider = {
      label: label,
      description: description,
      image: image,
    };
    console.log(Provider);
    updateproduct(Provider,userId);

    setLabel("");
    setDescription("");
    setImage("");
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
            <Form.Label>Label</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
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

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update Product
          </Button>
        </Form>
      </div>
    </>
  );
}
