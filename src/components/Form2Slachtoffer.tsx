import { Col, Form, Row } from "react-bootstrap";

const Form2Slachtoffer = () => {
  return (
    <Form>
      <legend>II. Gegevens over het slachtoffer</legend>

      <Row>
        <Col>
          <Form.Label>Naam en voornamen:</Form.Label>
          <Form.Control required />
        </Col>
        <Col>
          <Form.Label>
            Naam van de echtgenoot <span className="hoger">(1)</span>:
          </Form.Label>
          <Form.Control />
        </Col>
      </Row>

      <Row>
        <Col xs={2} style={{ display: "flex", flexDirection: "column" }}>
          <Form.Label>
            Geslacht <span className="hoger">(3)</span>:{" "}
          </Form.Label>
          <div>
            <Form.Check
              inline
              label="M"
              type={"radio"}
              name="geslacht"
              required
            />
            <Form.Check
              inline
              label="V"
              type={"radio"}
              name="geslacht"
              required
            />
          </div>
        </Col>

        <Col>
          <Form.Label>
            Geboortedatum <span className="hoger">(2)</span>:
          </Form.Label>
          <Form.Control type="date" required />
        </Col>

        <Col>
          <Form.Label>Taalrol:</Form.Label>
          <Form.Control
            required
            pattern="[A-Za-z]+"
            title="Alleen letters zijn toegestaan"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Label>Rijksregisternummer:</Form.Label>
          <Form.Control
            required
            pattern="^\d{2}\.\d{2}\.\d{2}-\d{3}\.\d{2}$"
            title="Voer een geldig Rijksregisternummer in (bijv., 01.02.23-065.85)"
          />
        </Col>

        <Col>
          <Form.Label>Nationaliteit:</Form.Label>
          <Form.Control
            required
            pattern="[A-Za-z]+"
            title="Alleen letters zijn toegestaan"
          />
        </Col>
      </Row>

      <Row>
        <Form.Label>Dossiernummer bij de bevoegde medische dienst:</Form.Label>
        <Form.Control style={{ width: "98%", marginLeft: "1%" }} required />
      </Row>

      <Row>
        <Col>
          <Form.Label>
            Bankrekeningnummer <span className="hoger">(4)</span>:
          </Form.Label>
          <Form.Control
            pattern="BE\d{2}[0-9]{12}"
            required
            title="Voer een geldig Belgisch IBAN in (bijv., BE68539007547034)"
          />
        </Col>

        <Col>
          <Form.Label>Financiële instelling (BIC nummer):</Form.Label>
          <Form.Control placeholder="" required />
        </Col>
      </Row>

      <Row>
        <Form.Label>Hoofdverblijfplaats: straat / nr. / bus</Form.Label>
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
            pattern="[A-Za-z]+"
            title="Alleen letters zijn toegestaan"
          />
        </Col>
      </Row>
    </Form>
  );
};

export default Form2Slachtoffer;
