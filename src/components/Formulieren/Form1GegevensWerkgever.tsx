import { useContext } from "react";
import { MyContext } from "../MyContext";
import { Col, Form, Row } from "react-bootstrap";

const Form1GegevensWerkgever = () => {
  const contextValue = useContext(MyContext);

  if (!contextValue) {
    return <div>Geen context value!</div>;
  }

  const { arbeidsOngevalData, setArbeidsOngevalData } = contextValue;
  return (
    <>
      <legend>I. Gegevens over de werkgever</legend>
      <Row>
        <Form.Label>
          Naam van de administratie, dienst of inrichting:
        </Form.Label>
        <Form.Control
          style={{ width: "98%", marginLeft: "1%" }}
          required
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form1Naam: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form1Naam}
        />
      </Row>
      <Row>
        <Col>
          <Form.Label>Tel:</Form.Label>
          <Form.Control
            required
            pattern="[0-9]{9}"
            title="Voer een geldig telefoonnummer in van 9 cijfers (bijv., 038719954)"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form1Tel: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form1Tel}
          />
        </Col>
        <Col>
          <Form.Label>Fax:</Form.Label>
          <Form.Control
            required
            pattern="[0-9]{9}"
            title="Voer een geldig faxnummer in (9 cijfers)"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form1Fax: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form1Fax}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Straat / nr. / bus:</Form.Label>
          <Form.Control
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form1Straat: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form1Straat}
          />
        </Col>
        <Col>
          <Form.Label>Postcode:</Form.Label>
          <Form.Control
            required
            pattern="[0-9]{4}"
            title="Voer een geldig postcode in (4 cijfers)"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form1Postcode: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form1Postcode}
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
                form1Gemeente: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form1Gemeente}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={9}>
          <Form.Label>Aard van de administratie:</Form.Label>
          <Form.Control
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form1Aard: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form1Aard}
          />
        </Col>
        <Col>
          <Form.Label>NACE BEL-code:</Form.Label>
          <Form.Control
            required
            pattern="\d{2}\.\d{3}"
            title="Voer een geldige NACE BEL-code in (bijv., 58.110)"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form1BELCode: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form1BELCode}
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
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form1OndernemingsNr: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form1OndernemingsNr}
          />
        </Col>
        <Col>
          <Form.Label>en desgevallend,vestigingseenheidsnummer:</Form.Label>
          <Form.Control
            pattern="\d{4}-\d{3}-\d{3}"
            title="Voer een geldig vestigingseenheidsnummer in (bijv., 0449-188-489)"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form1VestigingsNr: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form1VestigingsNr}
          />
        </Col>
      </Row>
    </>
  );
};

export default Form1GegevensWerkgever;
