import { Form, Row, Col } from "react-bootstrap";

const Form4Werkgever = () => {
  return (
    <Form>
      <legend>IV. Gegevens over de werkgever</legend>

      <Row>
        <Form.Label>
          {" "}
          Adres van de afdeling of dienst waarvan het slachtoffer afhangt:
          Straat / nr. / bus:
        </Form.Label>
        <Form.Control style={{ width: "98%", marginLeft: "1%" }} required />
      </Row>

      <Row>
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
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
          />
        </Col>
      </Row>

      <Row>
        <Form.Label>
          Externe dienst belast met het medisch toezicht - Naam:
        </Form.Label>
        <Form.Control style={{ width: "98%", marginLeft: "1%" }} required />
      </Row>

      <Row>
        <Col>
          <Form.Label>Straat / nr. / bus:</Form.Label>
          <Form.Control required />
        </Col>
        <Col xs={1}>
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
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
          />
        </Col>
      </Row>

      <Row>
        <Form.Label>
          Totaal aantal personeelsleden tewerkgesteld in het departement, de
          instelling, de gemeente, het OCMW, de inrichting, enz. op het einde
          van de maand vóór het ongeval:
        </Form.Label>
        <Form.Control
          style={{ width: "10%", marginLeft: "1%" }}
          required
          pattern="[0-9]+"
          title="Alleen cijfers zijn toegestaan"
        />
      </Row>

      <Row>
        <Form.Label>
          Totaal aantal arbeidsdagen gepresteerd vanaf het begin van het jaar
          tot het einde van de maand vóór het ongeval:
        </Form.Label>
        <Form.Control
          style={{ width: "10%", marginLeft: "1%" }}
          required
          pattern="[0-9]+"
          title="Alleen cijfers zijn toegestaan"
        />
      </Row>
    </Form>
  );
};

export default Form4Werkgever;
