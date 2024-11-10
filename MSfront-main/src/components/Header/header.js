import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="store">products</Nav.Link>
            <Nav.Link href="provider">Ajouter Produit</Nav.Link>
            <Nav.Link href="reclamation">reclamation</Nav.Link>
            <Nav.Link href="addReclamation">ajouter reclamation</Nav.Link>
            <Nav.Link href="offres">offres</Nav.Link>
            <Nav.Link href="createoffer">Ajouter offre</Nav.Link>
            <Nav.Link href="Forum">forums</Nav.Link>
            <Nav.Link href="addForum">ajouter forum</Nav.Link>

            <Nav.Link href="404">404</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
