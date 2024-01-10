import { Col, Form, Row } from "react-bootstrap";
import "../App.css";

const Form1Werkgever = () => {
  return (
    <Form>
      <legend>I. Gegevens over de werkgever</legend>
      <Row>
        <Form.Label>
          Naam van de administratie, dienst of inrichting:
        </Form.Label>
        <Form.Control style={{ width: "98%", marginLeft: "1%" }} required />
      </Row>
      <Row>
        <Col>
          <Form.Label>Tel:</Form.Label>
          <Form.Control
            required
            pattern="[0-9]{9}"
            title="Voer een geldig telefoonnummer in (9 cijfers)"
          />
        </Col>
        <Col>
          <Form.Label>Fax:</Form.Label>
          <Form.Control
            required
            pattern="[0-9]{9}"
            title="Voer een geldig faxnummer in (9 cijfers)"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Straat / nr. / bus:</Form.Label>
          <Form.Control required />
        </Col>
        <Col>
          <Form.Label>Postcode:</Form.Label>
          <Form.Control
            required
            pattern="[0-9]{4}"
            title="Voer een geldig postcode in (4 cijfers)"
          />
        </Col>
        <Col>
          <Form.Label>Gemeente:</Form.Label>
          <Form.Control
            required
            pattern="[A-Za-z]+"
            title="Alleen letters zijn toegestaan"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={9}>
          <Form.Label>Aard van de administratie:</Form.Label>
          <Form.Control required />
        </Col>
        <Col>
          <Form.Label>NACE BEL-code:</Form.Label>
          <Form.Control
            required
            pattern="\d{2}\.\d{3}"
            title="Voer een geldige NACE BEL-code in (bijv., 58.110)"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Ondernemingsnummer:</Form.Label>
          <Form.Control
            required
            pattern="\d{4}-\d{3}-\d{3}"
            title="Voer een geldig ondernemingsnummer in (bijv., 0449-188-489)"
          />
        </Col>
        <Col>
          <Form.Label>en desgevallend,vestigingseenheidsnummer:</Form.Label>
          <Form.Control
            pattern="\d{4}-\d{3}-\d{3}"
            title="Voer een geldig vestigingseenheidsnummer in (bijv., 0449-188-489)"
          />
        </Col>
      </Row>
    </Form>
  );
};

export default Form1Werkgever;
