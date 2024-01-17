import { useContext } from "react";
import { MyContext } from "../MyContext";
import { Col, Form, Row } from "react-bootstrap";

const Form4GegevensWerkgever = () => {
  const contextValue = useContext(MyContext);

  if (!contextValue) {
    return <div>Geen context value!</div>;
  }

  const { arbeidsOngevalData, setArbeidsOngevalData } = contextValue;
  return (
    <>
      <legend>IV. Gegevens over de werkgever</legend>

      <Row>
        <Form.Label>
          {" "}
          Adres van de afdeling of dienst waarvan het slachtoffer afhangt:
          Straat / nr. / bus:
        </Form.Label>
        <Form.Control
          style={{ width: "98%", marginLeft: "1%" }}
          required
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form4AdresOfDienstSlachtoffer: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form4AdresOfDienstSlachtoffer}
        />
      </Row>

      <Row>
        <Col>
          <Form.Label>Postcode:</Form.Label>
          <Form.Control
            required
            pattern="[0-9]{4}"
            title="Voer een geldig postcode in (4 cijfers)"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form4Postcode: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form4Postcode}
          />
        </Col>

        <Col>
          <Form.Label>Gemeente:</Form.Label>
          <Form.Control
            required
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form4Gemeente: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form4Gemeente}
          />
        </Col>
      </Row>

      <Row>
        <Form.Label>
          Externe dienst belast met het medisch toezicht - Naam:
        </Form.Label>
        <Form.Control
          style={{ width: "98%", marginLeft: "1%" }}
          required
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form4DienstMedischToezichtNaam: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form4DienstMedischToezichtNaam}
        />
      </Row>

      <Row>
        <Col>
          <Form.Label>Straat / nr. / bus:</Form.Label>
          <Form.Control
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form4DienstMedischToezichtStraat: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form4DienstMedischToezichtStraat}
          />
        </Col>
        <Col xs={1}>
          <Form.Label>Postcode:</Form.Label>
          <Form.Control
            required
            pattern="[0-9]{4}"
            title="Voer een geldig postcode in (4 cijfers)"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form4DienstMedischToezichtPostcode: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form4DienstMedischToezichtPostcode}
          />
        </Col>
        <Col>
          <Form.Label>Gemeente:</Form.Label>
          <Form.Control
            required
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form4DienstMedischToezichtGemeente: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form4DienstMedischToezichtGemeente}
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
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form4PersoneelsLeden: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form4PersoneelsLeden}
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
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form4ArbeidsDagen: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form4ArbeidsDagen}
        />
      </Row>
    </>
  );
};

export default Form4GegevensWerkgever;
