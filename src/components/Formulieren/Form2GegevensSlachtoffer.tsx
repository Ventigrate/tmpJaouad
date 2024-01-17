import { useContext } from "react";
import { MyContext } from "../MyContext";
import { Col, Form, Row } from "react-bootstrap";

const Form2GegevensSlachtoffer = () => {
  const contextValue = useContext(MyContext);

  if (!contextValue) {
    return <div>Geen context value!</div>;
  }

  const { arbeidsOngevalData, setArbeidsOngevalData } = contextValue;
  return (
    <>
      <legend>II. Gegevens over het slachtoffer</legend>

      <Row>
        <Col>
          <Form.Label>Naam en voornamen:</Form.Label>
          <Form.Control
            required
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form2NaamVoornaam: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form2NaamVoornaam}
          />
        </Col>
        <Col>
          <Form.Label>
            Naam van de echtgenoot <span className="hoger">(1)</span>:
          </Form.Label>
          <Form.Control
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form2NaamEchtgenoot: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form2NaamEchtgenoot}
          />
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
              checked={arbeidsOngevalData.form2Geslacht === "M"}
              required
              onChange={() =>
                setArbeidsOngevalData((prev) => ({
                  ...prev,
                  form2Geslacht: "M",
                }))
              }
            />
            <Form.Check
              inline
              label="V"
              type={"radio"}
              name="geslacht"
              checked={arbeidsOngevalData.form2Geslacht === "V"}
              required
              onChange={() =>
                setArbeidsOngevalData((prev) => ({
                  ...prev,
                  form2Geslacht: "V",
                }))
              }
            />
          </div>
        </Col>

        <Col>
          <Form.Label>
            Geboortedatum <span className="hoger">(2)</span>:
          </Form.Label>
          <Form.Control
            type="date"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form2Geboortedatum: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form2Geboortedatum}
          />
        </Col>

        <Col>
          <Form.Label>Taalrol:</Form.Label>
          <Form.Control
            required
            pattern="[A-Za-z]+"
            title="Alleen letters zijn toegestaan"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form2Taalrol: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form2Taalrol}
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
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form2RijksregisterNr: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form2RijksregisterNr}
          />
        </Col>

        <Col>
          <Form.Label>Nationaliteit:</Form.Label>
          <Form.Control
            required
            pattern="[A-Za-z]+"
            title="Alleen letters zijn toegestaan"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form2Nationaliteit: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form2Nationaliteit}
          />
        </Col>
      </Row>

      <Row>
        <Form.Label>Dossiernummer bij de bevoegde medische dienst:</Form.Label>
        <Form.Control
          style={{ width: "98%", marginLeft: "1%" }}
          required
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form2MedischDosierNr: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form2MedischDosierNr}
        />
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
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form2BankrekeningNr: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form2BankrekeningNr}
          />
        </Col>

        <Col>
          <Form.Label>Financiële instelling (BIC nummer):</Form.Label>
          <Form.Control
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form2BIC: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form2BIC}
          />
        </Col>
      </Row>

      <Row>
        <Form.Label>Hoofdverblijfplaats: straat / nr. / bus</Form.Label>
        <Form.Control
          style={{ width: "98%", marginLeft: "1%" }}
          required
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form2HoofdVerblijfPlaats: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form2HoofdVerblijfPlaats}
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
                form2Postcode: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form2Postcode}
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
                form2Gemeente: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form2Gemeente}
          />
        </Col>
      </Row>
    </>
  );
};

export default Form2GegevensSlachtoffer;
