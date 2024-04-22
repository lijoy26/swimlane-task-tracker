import Image from "next/image";
import styles from "./page.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Login from "./components/Login";

export default function Home() {
  return (
    <Container>
    <Row className="justify-content-center">
      <Col md={6}>
        <Login />
      </Col>
    </Row>
  </Container>
  );
}
