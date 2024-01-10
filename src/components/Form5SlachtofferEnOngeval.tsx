import { useState } from "react";
import { Form, Row, Col} from "react-bootstrap";

const Form5SlachtofferEnOngeval = () => {
  const [beroepsCategorie, setBeroepsCategorie] = useState<string>("");
  return (
    <Form>
      <legend>V. Gegevens over het slachtoffer en over het ongeval</legend>

      <Row>
        <Form.Label>
          Datum van indiensttreding van het slachtoffer{" "}
          <span className="hoger">(2)</span>:
        </Form.Label>
        <Form.Control
          style={{ width: "20%", marginLeft: "1%" }}
          type="date"
          required
        />
      </Row>

      <Row>
        <Form.Label>Duurtijd van de tewerkstelling:</Form.Label>
        <div>
          <Form.Check
            inline
            label="voor onbepaalde duur"
            type={"radio"}
            name="duurtijd"
            required
          />
          <Form.Check
            inline
            label="voor bepaalde duur"
            type={"radio"}
            name="duurtijd"
            required
          />
        </div>
      </Row>

      <Row>
        <Form.Label>
          Zo ja, datum uitdiensttreding <span className="hoger">(2)</span>:
        </Form.Label>
        <Form.Control
          style={{ width: "20%", marginLeft: "1%" }}
          type="date"
          required
        />
      </Row>

      <Row>
        <Form.Label>Aard van de tewerkstelling:</Form.Label>
        <div>
          <Form.Check
            inline
            label="voltijds"
            type={"radio"}
            name="aardTewerkstelling"
            required
          />
          <Form.Check
            inline
            label="deeltijds"
            type={"radio"}
            name="aardTewerkstelling"
            required
          />
        </div>
      </Row>

      <Row>
        <Form.Label>
          Beroepscategorie <span className="hoger">(3)</span>:
        </Form.Label>
        <div>
          <Form.Check
            inline
            label="vast benoemd"
            type={"radio"}
            name="beroepsCategorie"
            required
            onChange={(e) => setBeroepsCategorie(e.target.value)}
          />
          <Form.Check
            inline
            label="contractueel"
            type={"radio"}
            name="beroepsCategorie"
            required
            onChange={(e) => setBeroepsCategorie(e.target.value)}
          />
          <Form.Check
            inline
            label="stagiair"
            type={"radio"}
            name="beroepsCategorie"
            required
            onChange={(e) => setBeroepsCategorie(e.target.value)}
          />
          <Form.Check
            inline
            label="opleiding tot betaalde arbeid"
            type={"radio"}
            name="beroepsCategorie"
            required
            onChange={(e) => setBeroepsCategorie(e.target.value)}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Form.Check
              inline
              label="andere (welke?)"
              value={"andere"}
              type={"radio"}
              name="beroepsCategorie"
              required
              onChange={(e) => setBeroepsCategorie(e.target.value)}
            />
            <Form.Control
              style={{ width: "20%" }}
              required={beroepsCategorie === "andere"}
            />
          </div>
        </div>
      </Row>

      <Row>
        <Col xs={9}>
          <Form.Label>Gewone functie in de administratie:</Form.Label>
          <Form.Control
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
            required
          />
        </Col>
        <Col>
          <Form.Label>ISCO-code:</Form.Label>
          <Form.Control
            pattern="[0-9]+"
            title="Alleen cijfers zijn toegestaan"
            required
          />
        </Col>
      </Row>

      <Row>
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <Form.Label>
            Hoelang oefende de getroffene dit beroep in de administratie, dienst
            of inrichting uit?
          </Form.Label>

          <Form.Check
            inline
            label="minder dan één week"
            type={"radio"}
            name="hoelang"
            required
          />
          <Form.Check
            inline
            label="één week tot één maand"
            type={"radio"}
            name="hoelang"
            required
          />
          <Form.Check
            inline
            label="één maand tot één jaar"
            type={"radio"}
            name="hoelang"
            required
          />
          <Form.Check
            inline
            label="langer dan één jaar"
            type={"radio"}
            name="hoelang"
            required
          />
        </Col>
      </Row>

      <Row>
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <Form.Label>
            Aan welk soort werkplek stond het slachtoffer op het moment van het
            ongeval? <span className="hoger">(5)</span>
          </Form.Label>

          <Form.Check
            inline
            label="gebruikelijke werkplek of lokale eenheid"
            type={"radio"}
          />

          <Form.Check
            inline
            label="occasionele of mobiele werkplek of onderweg voor rekening van de werkgever"
            type={"radio"}
          />

          <Form.Check inline label="andere werkplek" type={"radio"} />
        </Col>
      </Row>

      <Row>
        <Form.Label>
          Datum van kennisgeving aan de werkgever{" "}
          <span className="hoger">(2)</span>:
        </Form.Label>
        <Form.Control
          style={{ width: "20%", marginLeft: "1%" }}
          type="date"
          required
        />
      </Row>

      <Row>
        <Col>
          <Form.Label>
            {" "}
            Door het slachtoffer te presteren uren op de dag van het ongeval:
            van
          </Form.Label>
          <Form.Control type="time" required />
        </Col>
        <Col>
          <Form.Label>tot:</Form.Label>
          <Form.Control type="time" required />
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Label>en van:</Form.Label>
          <Form.Control type="time" />
        </Col>
        <Col>
          <Form.Label>tot:</Form.Label>
          <Form.Control type="time" />
        </Col>
      </Row>

      <Row>
        <Form.Label style={{ textAlign: "justify", marginTop: "1%" }}>
          Opmerkingen betreffende de omstandigheden en materiële oorzaken van
          het ongeval (gegevens die aan de verklaringen van het slachtoffer
          moeten worden toegevoegd):
        </Form.Label>
        <Form.Control
          as="textarea"
          style={{ width: "98%", marginLeft: "1%", marginBottom: "1%" }}
        />
      </Row>
    </Form>
  );
};

export default Form5SlachtofferEnOngeval;
