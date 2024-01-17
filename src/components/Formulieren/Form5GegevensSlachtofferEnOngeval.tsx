import { useContext } from "react";
import { MyContext } from "../MyContext";
import { Col, Form, Row } from "react-bootstrap";

const Form5GegevensSlachtofferEnOngeval = () => {
  const contextValue = useContext(MyContext);

  if (!contextValue) {
    return <div>Geen context value!</div>;
  }

  const { arbeidsOngevalData, setArbeidsOngevalData } = contextValue;
  return (
    <>
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
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form5DatumIndienstTreding: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form5DatumIndienstTreding}
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
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5DuurtijdTewerkstellingOptie: "voor onbepaalde duur",
              }))
            }
            checked={
              arbeidsOngevalData.form5DuurtijdTewerkstellingOptie ===
              "voor onbepaalde duur"
            }
          />
          <Form.Check
            inline
            label="voor bepaalde duur"
            type={"radio"}
            name="duurtijd"
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5DuurtijdTewerkstellingOptie: "voor bepaalde duur",
              }))
            }
            checked={
              arbeidsOngevalData.form5DuurtijdTewerkstellingOptie ===
              "voor bepaalde duur"
            }
          />
        </div>
      </Row>

      <Row>
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <Form.Label>
            Is de datum van uitdiensttreding gekend?{" "}
            <span className="hoger">(3)</span>:
          </Form.Label>

          <Form.Check
            inline
            label="Ja"
            type={"radio"}
            name="uitdiensttreding"
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5UitdienstTredingGekendJaNee: "Ja",
              }))
            }
            checked={
              arbeidsOngevalData.form5UitdienstTredingGekendJaNee === "Ja"
            }
          />
          <Form.Check
            inline
            label="Neen"
            type={"radio"}
            name="uitdiensttreding"
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5UitdienstTredingGekendJaNee: "Neen",
              }))
            }
            checked={
              arbeidsOngevalData.form5UitdienstTredingGekendJaNee === "Neen"
            }
          />
        </Col>
      </Row>

      <Row>
        <Form.Label>
          Zo ja, datum uitdiensttreding <span className="hoger">(2)</span>:
        </Form.Label>
        <Form.Control
          style={{ width: "20%", marginLeft: "1%" }}
          type="date"
          required={
            arbeidsOngevalData.form5UitdienstTredingGekendJaNee === "Ja"
          }
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form5DatumUitdienstTreding: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form5DatumUitdienstTreding}
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
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5AardTewerkstellingOptie: "voltijds",
              }))
            }
            checked={
              arbeidsOngevalData.form5AardTewerkstellingOptie === "voltijds"
            }
          />
          <Form.Check
            inline
            label="deeltijds"
            type={"radio"}
            name="aardTewerkstelling"
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5AardTewerkstellingOptie: "deeltijds",
              }))
            }
            checked={
              arbeidsOngevalData.form5AardTewerkstellingOptie === "deeltijds"
            }
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
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5BeroepsCategorieOptie: "vast benoemd",
              }))
            }
            checked={
              arbeidsOngevalData.form5BeroepsCategorieOptie === "vast benoemd"
            }
          />
          <Form.Check
            inline
            label="contractueel"
            type={"radio"}
            name="beroepsCategorie"
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5BeroepsCategorieOptie: "contractueel",
              }))
            }
            checked={
              arbeidsOngevalData.form5BeroepsCategorieOptie === "contractueel"
            }
          />
          <Form.Check
            inline
            label="stagiair"
            type={"radio"}
            name="beroepsCategorie"
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5BeroepsCategorieOptie: "stagiair",
              }))
            }
            checked={
              arbeidsOngevalData.form5BeroepsCategorieOptie === "stagiair"
            }
          />
          <Form.Check
            inline
            label="opleiding tot betaalde arbeid"
            type={"radio"}
            name="beroepsCategorie"
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5BeroepsCategorieOptie: "opleiding tot betaalde arbeid",
              }))
            }
            checked={
              arbeidsOngevalData.form5BeroepsCategorieOptie ===
              "opleiding tot betaalde arbeid"
            }
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Form.Check
              inline
              label="andere (welke?)"
              type={"radio"}
              name="beroepsCategorie"
              required
              onChange={() =>
                setArbeidsOngevalData((prev) => ({
                  ...prev,
                  form5BeroepsCategorieOptie: "andere",
                }))
              }
              checked={
                arbeidsOngevalData.form5BeroepsCategorieOptie === "andere"
              }
            />
            <Form.Control
              style={{ width: "20%" }}
              pattern="[A-Za-z\s]+"
              title="Alleen letters zijn toegestaan"
              required={
                arbeidsOngevalData.form5BeroepsCategorieOptie === "andere"
              }
              onChange={(e) =>
                setArbeidsOngevalData((prev) => ({
                  ...prev,
                  form5AndereBeroepsCategorie: e.target.value,
                }))
              }
              value={arbeidsOngevalData.form5AndereBeroepsCategorie}
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
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5GewoneFunctieAdministratie: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form5GewoneFunctieAdministratie}
          />
        </Col>
        <Col>
          <Form.Label>ISCO-code:</Form.Label>
          <Form.Control
            pattern="[0-9]+"
            title="Alleen cijfers zijn toegestaan"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5IscoCode: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form5IscoCode}
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
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5HoelangBeroepOptie: "minder dan één week",
              }))
            }
            checked={
              arbeidsOngevalData.form5HoelangBeroepOptie ===
              "minder dan één week"
            }
          />
          <Form.Check
            inline
            label="één week tot één maand"
            type={"radio"}
            name="hoelang"
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5HoelangBeroepOptie: "één week tot één maand",
              }))
            }
            checked={
              arbeidsOngevalData.form5HoelangBeroepOptie ===
              "één week tot één maand"
            }
          />
          <Form.Check
            inline
            label="één maand tot één jaar"
            type={"radio"}
            name="hoelang"
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5HoelangBeroepOptie: "één maand tot één jaar",
              }))
            }
            checked={
              arbeidsOngevalData.form5HoelangBeroepOptie ===
              "één maand tot één jaar"
            }
          />
          <Form.Check
            inline
            label="langer dan één jaar"
            type={"radio"}
            name="hoelang"
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5HoelangBeroepOptie: "langer dan één jaar",
              }))
            }
            checked={
              arbeidsOngevalData.form5HoelangBeroepOptie ===
              "langer dan één jaar"
            }
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
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5SoortWerkplekOptie:
                  "gebruikelijke werkplek of lokale eenheid",
              }))
            }
            checked={
              arbeidsOngevalData.form5SoortWerkplekOptie ===
              "gebruikelijke werkplek of lokale eenheid"
            }
          />

          <Form.Check
            inline
            label="occasionele of mobiele werkplek of onderweg voor rekening van de werkgever"
            type={"radio"}
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5SoortWerkplekOptie:
                  "occasionele of mobiele werkplek of onderweg voor rekening van de werkgever",
              }))
            }
            checked={
              arbeidsOngevalData.form5SoortWerkplekOptie ===
              "occasionele of mobiele werkplek of onderweg voor rekening van de werkgever"
            }
          />

          <Form.Check
            inline
            label="andere werkplek"
            type={"radio"}
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5SoortWerkplekOptie: "andere werkplek",
              }))
            }
            checked={
              arbeidsOngevalData.form5SoortWerkplekOptie === "andere werkplek"
            }
          />
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
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form5DatumKennisgevingWerkgever: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form5DatumKennisgevingWerkgever}
        />
      </Row>

      <Row>
        <Col>
          <Form.Label>
            {" "}
            Door het slachtoffer te presteren uren op de dag van het ongeval:
            van
          </Form.Label>
          <Form.Control
            type="time"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5PresterenUrenVan: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form5PresterenUrenVan}
          />
        </Col>
        <Col>
          <Form.Label>tot:</Form.Label>
          <Form.Control
            type="time"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5PresterenUrenTot: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form5PresterenUrenTot}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Label>en van:</Form.Label>
          <Form.Control
            type="time"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5PresterenUrenEnVan: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form5PresterenUrenEnVan}
          />
        </Col>
        <Col>
          <Form.Label>tot:</Form.Label>
          <Form.Control
            type="time"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form5PresterenUrenEnTot: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form5PresterenUrenEnTot}
          />
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
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form5OpmerkingenOmstandigheden: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form5OpmerkingenOmstandigheden}
        />
      </Row>
    </>
  );
};

export default Form5GegevensSlachtofferEnOngeval;
