import { useContext } from "react";
import { Form, Col, Row, Button, Table } from "react-bootstrap";
import { MyContext } from "./MyContext";
import FormData from "./FormData";

const CompleteForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const contextValue = useContext(MyContext);

  if (!contextValue) {
    return <div>Geen context value!</div>;
  }

  const { arbeidsOngevalData, setArbeidsOngevalData } = contextValue;

  var FORMDATA: string = "";

  const setFormData = () => {
    FORMDATA = FormData(arbeidsOngevalData);
  };

  const postDataToApi = async () => {
    setFormData();
    console.log(arbeidsOngevalData.form6BeschermingsMiddelenOpties)
    console.log(FORMDATA)
    try {
      const response = await fetch(
        "https://localhost:7143/api/Arbeidsongevallen",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: FORMDATA,
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! Status: ${response.status}. Response: ${errorText}`
        );
      }

      const result = await response.json();
      console.log("API Response:", result);
    } catch (error) {
      console.error("Opgetreden Error tijdens API call:", error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    postDataToApi();
    setArbeidsOngevalData({
      // Form 1: Gegevens over de werkgever (10)

      form1Naam: "",
      form1Tel: "",
      form1Fax: "",
      form1Straat: "",
      form1Postcode: "",
      form1Gemeente: "",
      form1Aard: "",
      form1BELCode: "",
      form1OndernemingsNr: "",
      form1VestigingsNr: "",

      // Form 2: Gegevens over het slachtoffer (13)

      form2NaamVoornaam: "",
      form2NaamEchtgenoot: "",
      form2Geslacht: "",
      form2Geboortedatum: "",
      form2Taalrol: "",
      form2RijksregisterNr: "",
      form2Nationaliteit: "",
      form2MedischDosierNr: "",
      form2BankrekeningNr: "",
      form2BIC: "",
      form2HoofdVerblijfPlaats: "",
      form2Postcode: "",
      form2Gemeente: "",

      // Form 3: Gegevens over het ongeval (39)

      form3DagOngeval: "",
      form3DatumOngeval: "",
      form3TijdstipOngeval: "",
      form3PlaatsOngevalOptie: "",
      form3VerkeersOngevalJaNee: "",
      form3Straat: "",
      form3Postcode: "",
      form3Gemeente: "",
      form3Land: "",
      form3WerfNr: "",
      form3GewoneFunctieJaNee: "",
      form3WelkeBezigheid: "",
      form3OngevalArt2JaNee: "",
      form3OmgevingText: "",
      form3AlgemeneActiviteitText: "",
      form3SpecifiekeActiviteitText: "",
      form3GebeurtenissenText: "",
      form3ContactenEnVoorwerpenText: "",
      form3EersteZorgenDatum: "",
      form3EersteZorgenTijdstip: "",
      form3GeneesheerNaam: "",
      form3GeneesheerStraat: "",
      form3GeneesheerPostcode: "",
      form3GeneesheerGemeente: "",
      form3ProcesVerbaalPlaats: "",
      form3ProcesVerbaalDatum: "",
      form3ProcesVerbaalDoor: "",
      form3NaamAdresAansprakelijke: "",
      form3NaamAdresVerzekeraar: "",
      form3PolisNr: "",
      form3Getuige1Naam: "",
      form3Getuige1Straat: "",
      form3Getuige1Postcode: "",
      form3Getuige1Gemeente: "",
      form3Getuige2Naam: "",
      form3Getuige2Straat: "",
      form3Getuige2Postcode: "",
      form3Getuige2Gemeente: "",
      form3AardOngeval: "",

      // Form 4: Gegevens over de werkgever (9)

      form4AdresOfDienstSlachtoffer: "",
      form4Postcode: "",
      form4Gemeente: "",
      form4DienstMedischToezichtNaam: "",
      form4DienstMedischToezichtStraat: "",
      form4DienstMedischToezichtPostcode: "",
      form4DienstMedischToezichtGemeente: "",
      form4PersoneelsLeden: "",
      form4ArbeidsDagen: "",

      // Form 5: Gegevens over het slachtoffer en over het ongeval (17)

      form5DatumIndienstTreding: "",
      form5DuurtijdTewerkstellingOptie: "",
      form5UitdienstTredingGekendJaNee: "",
      form5DatumUitdienstTreding: "",
      form5AardTewerkstellingOptie: "",
      form5BeroepsCategorieOptie: "",
      form5AndereBeroepsCategorie: "",
      form5GewoneFunctieAdministratie: "",
      form5IscoCode: "",
      form5HoelangBeroepOptie: "",
      form5SoortWerkplekOptie: "",
      form5DatumKennisgevingWerkgever: "",
      form5PresterenUrenVan: "",
      form5PresterenUrenTot: "",
      form5PresterenUrenEnVan: "",
      form5PresterenUrenEnTot: "",
      form5OpmerkingenOmstandigheden: "",

      // Form 6: Gegevens over de preventie (31)

      form6ActiviteitAfdelingOfDienst: "",
      form6BezigheidGewoneFunctieJaNee: "",
      form6WelkeBezigheid: "",
      form6Ongeval3juliWetJaNee: "",
      form6SoortWerk: "",
      form6SoortWerkCode: "",
      form6AfwijkendeGebeurtenis: "",
      form6AfwijkendeGebeurtenisCode: "",
      form6BetrokkenVoorwerp: "",
      form6BetrokkenVoorwerpCode: "",
      form6WijzeVerwonding: "",
      form6WijzeVerwondingCode: "",
      form6SoortLetsel: "",
      form6SoortLetselCode: "",
      form6VerwondDeel: "",
      form6VerwondDeelCode: "",
      form6GevolgenOngevalOptie: "",
      form6BlijvendeOngeschiktheid: "",
      form6DatumOverlijden: "",
      form6DatumStopzettingBeroepsActiviteit: "",
      form6TijdstipStopzettingBeroepsActiviteit: "",
      form6DatumWerkHervatting: "",
      form6DuurArbeidsOngeschiktheid: "",
      form6BeschermingsMiddelenOpties: [],
      form6AndereBeschermingIsChecked: false,
      form6AndereBescherming: "",
      form6AndereBeschermingLijst: [],
      form6Maatregel1Text: "",
      form6Maatregel1Code: "",
      form6Maatregel2Text: "",
      form6Maatregel2Code: "",
      form6Maatregel3Text: "",
      form6Maatregel3Code: "",
    });
    onSuccess();
  };

  const handleCheckboxBescherming = (optie: string) => {
    setArbeidsOngevalData((prevState) => {
      const isSelected =
        prevState.form6BeschermingsMiddelenOpties.includes(optie);

      return {
        ...prevState,
        form6BeschermingsMiddelenOpties: isSelected
          ? prevState.form6BeschermingsMiddelenOpties.filter(
              (item) => item !== optie
            )
          : [...prevState.form6BeschermingsMiddelenOpties, optie],
      };
    });
  };

  const handleAndereBeschermingAddBtn = () => {
    handleCheckboxBescherming(arbeidsOngevalData.form6AndereBescherming);

    setArbeidsOngevalData((prev) => ({
      ...prev,
      form6AndereBeschermingLijst: [
        ...prev.form6AndereBeschermingLijst,
        prev.form6AndereBescherming,
      ],
      form6AndereBescherming: "",
    }));
  };

  const handleAndereBeschermingDeleteBtn = (extraItem: string) => {
    setArbeidsOngevalData((prev) => ({
      ...prev,
      form6AndereBeschermingLijst: prev.form6AndereBeschermingLijst.filter(
        (item) => item !== extraItem
      ),
      form6BeschermingsMiddelenOpties:
        prev.form6BeschermingsMiddelenOpties.filter(
          (item) => item !== extraItem
        ),
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
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

      <legend>III. Gegevens over het ongeval</legend>

      <Row>
        <Col>
          <Form.Label>Dag van het ongeval:</Form.Label>
          <Form.Control
            required
            pattern="(maandag|Maandag|dinsdag|Dinsdag|woensdag|Woensdag|donderdag|Donderdag|vrijdag|Vrijdag|zaterdag|Zaterdag|zondag|Zondag)"
            title="Voer een geldige dag van de week in"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3DagOngeval: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3DagOngeval}
          />
        </Col>
        <Col>
          <Form.Label>
            Datum <span className="hoger">(2)</span>:
          </Form.Label>
          <Form.Control
            required
            type="date"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3DatumOngeval: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3DatumOngeval}
          />
        </Col>
        <Col>
          <Form.Label>Precieze tijdstip:</Form.Label>
          <Form.Control
            type="time"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3TijdstipOngeval: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3TijdstipOngeval}
          />
        </Col>
      </Row>

      <Row>
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <Form.Label>Plaats van het ongeval: </Form.Label>

          <Form.Check
            inline
            label="in de administratie, dienst of inrichting op het adres vermeld in veld 2"
            type={"radio"}
            name="plaatsOngeval"
            checked={
              arbeidsOngevalData.form3PlaatsOngevalOptie ===
              "in de administratie, dienst of inrichting op het adres vermeld in veld 2"
            }
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3PlaatsOngevalOptie:
                  "in de administratie, dienst of inrichting op het adres vermeld in veld 2",
              }))
            }
            required
          />
          <div>
            <Form.Check
              inline
              label="op de openbare weg. In bevestigend geval, betrof het een verkeersongeval?:"
              type={"radio"}
              name="plaatsOngeval"
              checked={
                arbeidsOngevalData.form3PlaatsOngevalOptie ===
                "op de openbare weg"
              }
              onChange={() =>
                setArbeidsOngevalData((prev) => ({
                  ...prev,
                  form3PlaatsOngevalOptie: "op de openbare weg",
                }))
              }
              required
            />
            <Form.Check
              inline
              label="Ja"
              type={"radio"}
              name="verkeersOngeval"
              checked={arbeidsOngevalData.form3VerkeersOngevalJaNee === "Ja"}
              required={
                arbeidsOngevalData.form3PlaatsOngevalOptie ===
                "op de openbare weg"
              }
              onChange={() =>
                setArbeidsOngevalData((prev) => ({
                  ...prev,
                  form3VerkeersOngevalJaNee: "Ja",
                }))
              }
            />
            <Form.Check
              inline
              label="Neen"
              type={"radio"}
              name="verkeersOngeval"
              checked={arbeidsOngevalData.form3VerkeersOngevalJaNee === "Neen"}
              required={
                arbeidsOngevalData.form3PlaatsOngevalOptie ===
                "op de openbare weg"
              }
              onChange={() =>
                setArbeidsOngevalData((prev) => ({
                  ...prev,
                  form3VerkeersOngevalJaNee: "Neen",
                }))
              }
            />
          </div>

          <Form.Check
            inline
            label="op een andere plaats"
            type={"radio"}
            name="plaatsOngeval"
            checked={
              arbeidsOngevalData.form3PlaatsOngevalOptie ===
              "op een andere plaats"
            }
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3PlaatsOngevalOptie: "op een andere plaats",
              }))
            }
            required
          />
        </Col>
      </Row>

      <p style={{ marginTop: "1%" }}>
        Indien u één van de twee laatste keuzes hebt aangekruist, vermeldt het
        adres (in geval van een tijdelijke of mobiele werkplaats kan u het
        beperken tot de postcode en het werfnummer)
      </p>

      <Row>
        <Form.Label>Straat, nummer:</Form.Label>
        <Form.Control
          style={{ width: "98%", marginLeft: "1%" }}
          required={
            arbeidsOngevalData.form3PlaatsOngevalOptie ===
              "op de openbare weg" ||
            arbeidsOngevalData.form3PlaatsOngevalOptie ===
              "op een andere plaats"
          }
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form3Straat: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form3Straat}
        />
      </Row>

      <Row>
        <Col>
          <Form.Label>Postcode:</Form.Label>
          <Form.Control
            required={
              arbeidsOngevalData.form3PlaatsOngevalOptie ===
                "op de openbare weg" ||
              arbeidsOngevalData.form3PlaatsOngevalOptie ===
                "op een andere plaats"
            }
            pattern="[0-9]{4}"
            title="Voer een geldig postcode in (4 cijfers)"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3Postcode: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3Postcode}
          />
        </Col>
        <Col>
          <Form.Label>Gemeente:</Form.Label>
          <Form.Control
            required={
              arbeidsOngevalData.form3PlaatsOngevalOptie ===
                "op de openbare weg" ||
              arbeidsOngevalData.form3PlaatsOngevalOptie ===
                "op een andere plaats"
            }
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3Gemeente: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3Gemeente}
          />
        </Col>
        <Col>
          <Form.Label>Land:</Form.Label>
          <Form.Control
            required={
              arbeidsOngevalData.form3PlaatsOngevalOptie ===
                "op de openbare weg" ||
              arbeidsOngevalData.form3PlaatsOngevalOptie ===
                "op een andere plaats"
            }
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3Land: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3Land}
          />
        </Col>
      </Row>

      <Row>
        <Form.Label>Werfnummer:</Form.Label>
        <Form.Control
          style={{ width: "98%", marginLeft: "1%" }}
          required={
            arbeidsOngevalData.form3PlaatsOngevalOptie ===
              "op de openbare weg" ||
            arbeidsOngevalData.form3PlaatsOngevalOptie ===
              "op een andere plaats"
          }
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form3WerfNr: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form3WerfNr}
        />
      </Row>

      <Row>
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <Form.Label>
            Oefende het slachtoffer op het ogenblik van het ongeval een
            bezigheid uit in het kader van zijn gewone functie?{" "}
            <span className="hoger">(3)</span>
          </Form.Label>

          <Form.Check
            inline
            label="Ja"
            type={"radio"}
            name="gewoneFunctie"
            checked={arbeidsOngevalData.form3GewoneFunctieJaNee === "Ja"}
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3GewoneFunctieJaNee: "Ja",
              }))
            }
          />
          <Form.Check
            inline
            label="Neen"
            type={"radio"}
            name="gewoneFunctie"
            checked={arbeidsOngevalData.form3GewoneFunctieJaNee === "Neen"}
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3GewoneFunctieJaNee: "Neen",
              }))
            }
          />
        </Col>
      </Row>

      <Row>
        <Form.Label>Zo neen, welke bezigheid oefende het uit?</Form.Label>
        <Form.Control
          style={{ width: "98%", marginLeft: "1%" }}
          required={arbeidsOngevalData.form3GewoneFunctieJaNee === "Neen"}
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form3WelkeBezigheid: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form3WelkeBezigheid}
        />
      </Row>

      <Row>
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <Form.Label>
            Gaat het om een ongeval bedoeld in art. 2, lid 3, 2°, van de wet van
            3 juli 1967 (ongeval overkomen buiten de uitoefening van de dienst,
            maar veroorzaakt door een derde wegens het door het slachtoffer
            uitgeoefend ambt)? <span className="hoger">(3)</span>
          </Form.Label>
          <div>
            <Form.Check
              inline
              label="Ja"
              type={"radio"}
              name="OngevalWet"
              checked={arbeidsOngevalData.form3OngevalArt2JaNee === "Ja"}
              required
              onChange={() =>
                setArbeidsOngevalData((prev) => ({
                  ...prev,
                  form3OngevalArt2JaNee: "Ja",
                }))
              }
            />
            <Form.Check
              inline
              label="Neen"
              type={"radio"}
              name="OngevalWet"
              checked={arbeidsOngevalData.form3OngevalArt2JaNee === "Neen"}
              required
              onChange={() =>
                setArbeidsOngevalData((prev) => ({
                  ...prev,
                  form3OngevalArt2JaNee: "Neen",
                }))
              }
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Form.Label style={{ textAlign: "justify", marginTop: "1%" }}>
          In welke omgeving (<span className="bold">soort plaats</span>) bevond
          het slachtoffer zich toen het ongeval zich voordeed? (bijvoorbeeld:{" "}
          <span className="cursief">
            onderhoudsruimte; locatie voor veeteelt; kantoor; school; warenhuis;
            ziekenhuis; parkeerplaats; sporthal; op het dak van een hotel;
            particuliere woning; riool; tuin; autoweg; aan boord van een
            aangemeerd schip; onder water; enz.) ?
          </span>
        </Form.Label>
        <Form.Control
          as="textarea"
          style={{ width: "98%", marginLeft: "1%" }}
          required
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form3OmgevingText: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form3OmgevingText}
        />
      </Row>

      <Row>
        <Form.Label style={{ textAlign: "justify", marginTop: "1%" }}>
          Bepaal de algemene activiteit (
          <span className="bold">soort werk</span>) of de taak (in de ruime zin)
          die het slachtoffer aan het verrichten was toen het ongeval zich
          voordeed: (bijvoorbeeld:{" "}
          <span className="cursief">
            verwerking van producten, opslag, werk in de landbouw of bosbouw,
            werk met levende dieren, verzorging, bijstand aan een persoon of aan
            personen, opleiding, kantoorwerk, inkoop, verkoop, enz. OF de
            nevenactiviteiten van deze verschillende werkzaamheden, zoals
            installatie, losmaken, onderhoud, reparatie of schoonmaken).
          </span>
        </Form.Label>
        <Form.Control
          as="textarea"
          style={{ width: "98%", marginLeft: "1%" }}
          required
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form3AlgemeneActiviteitText: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form3AlgemeneActiviteitText}
        />
      </Row>

      <Row>
        <Form.Label style={{ textAlign: "justify", marginTop: "1%" }}>
          Bepaal de <span className="bold">specifieke activiteit</span> die de
          getroffene aan het verrichten was toen het ongeval zich voordeed
          (bijvoorbeeld:{" "}
          <span className="cursief">
            vullen van de machine, werken met handgereedschap, besturen van een
            transportmiddel, grijpen, optillen, een voorwerp rollen, een last
            dragen, een doos sluiten, een ladder opgaan, lopen, gaan zitten,
            enz.)
          </span>{" "}
          EN het daarbij <span className="bold">betrokken voorwerp</span>{" "}
          (bijvoorbeeld:{" "}
          <span className="cursief">
            gereedschap, machine, uitrusting, materialen, voorwerpen,
            instrumenten, stoffen, enz.).
          </span>
        </Form.Label>
        <Form.Control
          as="textarea"
          style={{ width: "98%", marginLeft: "1%" }}
          required
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form3SpecifiekeActiviteitText: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form3SpecifiekeActiviteitText}
        />
      </Row>

      <Row>
        <Form.Label style={{ textAlign: "justify", marginTop: "1%" }}>
          Welke <span className="bold">gebeurtenissen</span> die{" "}
          <span className="bold">afwijken</span> van de normale gang van het
          werk, hebben tot het ongeval geleid? (bijvoorbeeld:{" "}
          <span className="cursief">
            elektrische storing; explosie; vuur; overlopen, kantelen, lekken,
            gasvorming, barsten, vallen of instorten van voorwerp; abnormaal
            starten of functioneren van een machine; verlies van controle over
            een transportmiddel of voorwerp; uitglijden of val van persoon;
            ongepaste handeling; verkeerde beweging; verrassing; schrik;
            geweldpleging; aangevallen worden; enz.).
          </span>{" "}
          Vermeld alle gebeurtenissen EN de daarbij{" "}
          <span className="bold">betrokken voorwerpen</span> (bijvoorbeeld:{" "}
          <span className="cursief">
            gereedschap, machine, uitrusting, materialen, voorwerpen,
            instrumenten, stoffen, enz.).
          </span>
        </Form.Label>
        <Form.Control
          as="textarea"
          style={{ width: "98%", marginLeft: "1%" }}
          required
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form3GebeurtenissenText: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form3GebeurtenissenText}
        />
      </Row>

      <Row>
        <Form.Label style={{ textAlign: "justify", marginTop: "1%" }}>
          Hoe is het slachtoffer (fysieke of psychische letsel) gewond geraakt?
          Beschrijf in dalende volgorde van belangrijkheid alle verschillende{" "}
          <span className="bold">contacten</span> die de verwonding(en) hebben
          veroorzaakt (bijvoorbeeld:{" "}
          <span className="cursief">
            contact met elektrische stroom, een warmtebron of gevaarlijke
            stoffen; verdrinking; bedolven worden; door iets ingesloten worden
            (gas, vloeistof, vaste materie); verplettering tegen een voorwerp of
            stoot door een voorwerp; botsing; contact met snijdende of puntige
            voorwerpen; beknelling of verplettering in, onder of tussen iets;
            problemen met het bewegingsapparaat; psychische shock; verwonding
            door dier of mens; enz.)
          </span>{" "}
          EN de daarbij <span className="bold">betrokken voorwerpen</span>{" "}
          (bijvoorbeeld:{" "}
          <span className="cursief">
            {" "}
            gereedschap, machine, uitrusting, materialen, voorwerpen,
            instrumenten, stoffen, enz.).
          </span>
        </Form.Label>
        <Form.Control
          as="textarea"
          style={{ width: "98%", marginLeft: "1%", marginBottom: "1%" }}
          required
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form3ContactenEnVoorwerpenText: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form3ContactenEnVoorwerpenText}
        />
      </Row>

      <Row>
        <Col>
          <Form.Label>
            Eerste zorgen verstrekt op <span className="hoger">(2)</span>:
          </Form.Label>
          <Form.Control
            type="date"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3EersteZorgenDatum: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3EersteZorgenDatum}
          />
        </Col>
        <Col>
          <Form.Label>Precieze tijdstrip:</Form.Label>
          <Form.Control
            type="time"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3EersteZorgenTijdstip: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3EersteZorgenTijdstip}
          />
        </Col>
      </Row>

      <p style={{ marginTop: "1%" }}>
        Door de geneesheer of in het ziekenhuis:
      </p>

      <Row>
        <Form.Label>Naam:</Form.Label>
        <Form.Control
          style={{ width: "98%", marginLeft: "1%" }}
          required
          pattern="[A-Za-z\s]+"
          title="Alleen letters zijn toegestaan"
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form3GeneesheerNaam: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form3GeneesheerNaam}
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
                form3GeneesheerStraat: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3GeneesheerStraat}
          />
        </Col>
        <Col>
          <Form.Label>Postcode:</Form.Label>
          <Form.Control
            pattern="[0-9]{4}"
            title="Voer een geldig postcode in (4 cijfers)"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3GeneesheerPostcode: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3GeneesheerPostcode}
          />
        </Col>
        <Col>
          <Form.Label>Gemeente:</Form.Label>
          <Form.Control
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3GeneesheerGemeente: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3GeneesheerGemeente}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Label>Proces verbaal opgesteld te:</Form.Label>
          <Form.Control
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3ProcesVerbaalPlaats: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3ProcesVerbaalPlaats}
          />
        </Col>
        <Col>
          <Form.Label>
            Op <span className="hoger">(2)</span>:
          </Form.Label>
          <Form.Control
            type="date"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3ProcesVerbaalDatum: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3ProcesVerbaalDatum}
          />
        </Col>
        <Col>
          <Form.Label>Door:</Form.Label>
          <Form.Control
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3ProcesVerbaalDoor: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3ProcesVerbaalDoor}
          />
        </Col>
      </Row>

      <Row>
        <Form.Label>Naam en adres van de eventuele aansprakelijke:</Form.Label>
        <Form.Control
          style={{ width: "98%", marginLeft: "1%" }}
          required
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form3NaamAdresAansprakelijke: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form3NaamAdresAansprakelijke}
        />
      </Row>

      <Row>
        <Col xs={9}>
          <Form.Label>Naam en adres van de verzekeraar:</Form.Label>
          <Form.Control
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3NaamAdresVerzekeraar: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3NaamAdresVerzekeraar}
          />
        </Col>
        <Col>
          <Form.Label>Polisnr:</Form.Label>
          <Form.Control
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3PolisNr: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3PolisNr}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Label>Getuige 1 naam:</Form.Label>
          <Form.Control
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3Getuige1Naam: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3Getuige1Naam}
          />
        </Col>
        <Col>
          <Form.Label>Straat / nr. / bus:</Form.Label>
          <Form.Control
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3Getuige1Straat: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3Getuige1Straat}
          />
        </Col>
        <Col xs={1}>
          <Form.Label>Postcode:</Form.Label>
          <Form.Control
            pattern="[0-9]{4}"
            title="Voer een geldig postcode in (4 cijfers)"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3Getuige1Postcode: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3Getuige1Postcode}
          />
        </Col>
        <Col>
          <Form.Label>Gemeente:</Form.Label>
          <Form.Control
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3Getuige1Gemeente: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3Getuige1Gemeente}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Label>Getuige 2 naam:</Form.Label>
          <Form.Control
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3Getuige2Naam: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3Getuige2Naam}
          />
        </Col>
        <Col>
          <Form.Label>Straat / nr. / bus:</Form.Label>
          <Form.Control
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3Getuige2Straat: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3Getuige2Straat}
          />
        </Col>
        <Col xs={1}>
          <Form.Label>Postcode:</Form.Label>
          <Form.Control
            pattern="[0-9]{4}"
            title="Voer een geldig postcode in (4 cijfers)"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3Getuige2Postcode: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3Getuige2Postcode}
          />
        </Col>
        <Col>
          <Form.Label>Gemeente:</Form.Label>
          <Form.Control
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3Getuige2Gemeente: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form3Getuige2Gemeente}
          />
        </Col>
      </Row>

      <Row>
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <Form.Label>
            Aard van het ongeval <span className="hoger">(3)</span>:{" "}
          </Form.Label>

          <Form.Check
            inline
            label="arbeidsongeval"
            type={"radio"}
            name="aardOngeval"
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3AardOngeval: "arbeidsongeval",
              }))
            }
            checked={arbeidsOngevalData.form3AardOngeval === "arbeidsongeval"}
          />

          <Form.Check
            inline
            label="ongeval op de weg naar en van het werk"
            type={"radio"}
            name="aardOngeval"
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3AardOngeval: "ongeval op de weg naar en van het werk",
              }))
            }
            checked={
              arbeidsOngevalData.form3AardOngeval ===
              "ongeval op de weg naar en van het werk"
            }
          />
          <Form.Check
            inline
            label="ongeval overkomen buiten de uitoefening van de dienst, maar veroorzaakt door een derde wegens het door het slachtoffer uitgeoefend ambt (art. 2, lid 3, 2°, van de wet van 3 juli 1967)"
            type={"radio"}
            name="aardOngeval"
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form3AardOngeval:
                  "ongeval overkomen buiten de uitoefening van de dienst, maar veroorzaakt door een derde wegens het door het slachtoffer uitgeoefend ambt (art. 2, lid 3, 2°, van de wet van 3 juli 1967)",
              }))
            }
            checked={
              arbeidsOngevalData.form3AardOngeval ===
              "ongeval overkomen buiten de uitoefening van de dienst, maar veroorzaakt door een derde wegens het door het slachtoffer uitgeoefend ambt (art. 2, lid 3, 2°, van de wet van 3 juli 1967)"
            }
          />
        </Col>
      </Row>

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

      <legend>VI. Gegevens over de preventie</legend>

      <Row>
        <Form.Label>
          Activiteit van de afdeling of dienst waar het slachtoffer gewoonlijk
          zijn functie uitoefent:
        </Form.Label>
        <Form.Control
          style={{ width: "98%", marginLeft: "1%" }}
          required
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form6ActiviteitAfdelingOfDienst: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form6ActiviteitAfdelingOfDienst}
        />
      </Row>

      <Row>
        <Form.Label>
          Oefende het slachtoffer op het ogenblik van het ongeval een bezigheid
          uit in het kader van zijn gewone functie?{" "}
          <span className="hoger">(3)</span>:
        </Form.Label>
        <div>
          <Form.Check
            inline
            label="Ja"
            type={"radio"}
            name="bezigheidOngeval"
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6BezigheidGewoneFunctieJaNee: "Ja",
              }))
            }
            checked={
              arbeidsOngevalData.form6BezigheidGewoneFunctieJaNee === "Ja"
            }
          />
          <Form.Check
            inline
            label="Neen"
            type={"radio"}
            name="bezigheidOngeval"
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6BezigheidGewoneFunctieJaNee: "Neen",
              }))
            }
            checked={
              arbeidsOngevalData.form6BezigheidGewoneFunctieJaNee === "Neen"
            }
          />
        </div>
      </Row>

      <Row>
        <Form.Label>Zo neen, welke bezigheid oefende het uit? :</Form.Label>
        <Form.Control
          style={{ width: "98%", marginLeft: "1%" }}
          required={
            arbeidsOngevalData.form6BezigheidGewoneFunctieJaNee === "Neen"
          }
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form6WelkeBezigheid: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form6WelkeBezigheid}
        />
      </Row>

      <Row>
        <Form.Label>
          Gaat het om een ongeval bedoeld bij art. 2, lid 3, 2°, van de wet van
          3 juli 1967? <span className="hoger">(3)</span>
        </Form.Label>
        <div>
          <Form.Check
            inline
            label="Ja"
            type={"radio"}
            name="3juliWet"
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6Ongeval3juliWetJaNee: "Ja",
              }))
            }
            checked={arbeidsOngevalData.form6Ongeval3juliWetJaNee === "Ja"}
          />
          <Form.Check
            inline
            label="Neen"
            type={"radio"}
            name="3juliWet"
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6Ongeval3juliWetJaNee: "Neen",
              }))
            }
            checked={arbeidsOngevalData.form6Ongeval3juliWetJaNee === "Neen"}
          />
        </div>
      </Row>

      <Row>
        <Col xs={9}>
          <Form.Label>Soort werk:</Form.Label>
          <Form.Control
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6SoortWerk: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form6SoortWerk}
          />
        </Col>
        <Col>
          <Form.Label>
            Code <span className="hoger">(8)</span>:
          </Form.Label>
          <Form.Control
            pattern="[0-9]+"
            title="Alleen cijfers zijn toegestaan"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6SoortWerkCode: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form6SoortWerkCode}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={9}>
          <Form.Label>
            Laatst afwijkende gebeurtenis die tot het ongeval heeft geleid:
          </Form.Label>
          <Form.Control
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6AfwijkendeGebeurtenis: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form6AfwijkendeGebeurtenis}
          />
        </Col>
        <Col>
          <Form.Label>
            Code <span className="hoger">(6)</span>:
          </Form.Label>
          <Form.Control
            pattern="[0-9]+"
            title="Alleen cijfers zijn toegestaan"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6AfwijkendeGebeurtenisCode: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form6AfwijkendeGebeurtenisCode}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={9}>
          <Form.Label>Voorwerp betrokken bij deze gebeurtenis:</Form.Label>
          <Form.Control
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6BetrokkenVoorwerp: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form6BetrokkenVoorwerp}
          />
        </Col>
        <Col>
          <Form.Label>
            Code <span className="hoger">(6)</span>:
          </Form.Label>
          <Form.Control
            pattern="[0-9]+"
            title="Alleen cijfers zijn toegestaan"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6BetrokkenVoorwerpCode: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form6BetrokkenVoorwerpCode}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={9}>
          <Form.Label>Contact – wijze van verwonding:</Form.Label>
          <Form.Control
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6WijzeVerwonding: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form6WijzeVerwonding}
          />
        </Col>
        <Col>
          <Form.Label>
            Code <span className="hoger">(8)</span>:
          </Form.Label>
          <Form.Control
            pattern="[0-9]+"
            title="Alleen cijfers zijn toegestaan"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6WijzeVerwondingCode: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form6WijzeVerwondingCode}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={4}>
          <Form.Label>
            Letsel - Soort <span className="hoger">(7)(6)</span>:
          </Form.Label>
          <Form.Control
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6SoortLetsel: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form6SoortLetsel}
          />
        </Col>
        <Col>
          <Form.Label>
            Code <span className="hoger">(6):</span>:
          </Form.Label>
          <Form.Control
            pattern="[0-9]+"
            title="Alleen cijfers zijn toegestaan"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6SoortLetselCode: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form6SoortLetselCode}
          />
        </Col>
        <Col xs={4}>
          <Form.Label>
            Verwond deel <span className="hoger">(7)(6)</span>:
          </Form.Label>
          <Form.Control
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6VerwondDeel: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form6VerwondDeel}
          />
        </Col>
        <Col>
          <Form.Label>
            Code <span className="hoger">(6)</span>:
          </Form.Label>
          <Form.Control
            pattern="[0-9]+"
            title="Alleen cijfers zijn toegestaan"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6VerwondDeelCode: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form6VerwondDeelCode}
          />
        </Col>
      </Row>

      <Row>
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <Form.Label>
            Gevolgen van het ongeval <span className="hoger">(7)(6)</span>:
          </Form.Label>

          <Form.Check
            inline
            label="geen tijdelijke arbeidsongeschiktheid en geen prothesen te voorzien"
            type={"radio"}
            name="gevolgen"
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6GevolgenOngevalOptie:
                  "geen tijdelijke arbeidsongeschiktheid en geen prothesen te voorzien",
              }))
            }
            checked={
              arbeidsOngevalData.form6GevolgenOngevalOptie ===
              "geen tijdelijke arbeidsongeschiktheid en geen prothesen te voorzien"
            }
          />

          <Form.Check
            inline
            label="tijdelijke arbeidsongeschiktheid"
            type={"radio"}
            name="gevolgen"
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6GevolgenOngevalOptie: "tijdelijke arbeidsongeschiktheid",
              }))
            }
            checked={
              arbeidsOngevalData.form6GevolgenOngevalOptie ===
              "tijdelijke arbeidsongeschiktheid"
            }
          />

          <div style={{ display: "flex" }}>
            <Form.Check
              inline
              label="blijvende arbeidsongeschiktheid te voorzien:"
              type={"radio"}
              name="gevolgen"
              required
              onChange={() =>
                setArbeidsOngevalData((prev) => ({
                  ...prev,
                  form6GevolgenOngevalOptie:
                    "blijvende arbeidsongeschiktheid te voorzien",
                }))
              }
              checked={
                arbeidsOngevalData.form6GevolgenOngevalOptie ===
                "blijvende arbeidsongeschiktheid te voorzien"
              }
            />
            <Form.Label>de voorziene blijvende ongeschiktheid is:</Form.Label>
            <Form.Control
              style={{ width: "5%", margin: "0% 1%" }}
              required={
                arbeidsOngevalData.form6GevolgenOngevalOptie ===
                "blijvende arbeidsongeschiktheid te voorzien"
              }
              onChange={(e) =>
                setArbeidsOngevalData((prev) => ({
                  ...prev,
                  form6BlijvendeOngeschiktheid: e.target.value,
                }))
              }
              value={arbeidsOngevalData.form6BlijvendeOngeschiktheid}
            />
            <Form.Label>%</Form.Label>
          </div>

          <Form.Check
            inline
            label="overlijden"
            type={"radio"}
            name="gevolgen"
            required
            onChange={() =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6GevolgenOngevalOptie: "overlijden",
              }))
            }
            checked={
              arbeidsOngevalData.form6GevolgenOngevalOptie === "overlijden"
            }
          />
        </Col>
      </Row>

      <Row>
        <Form.Label>
          In geval overlijden datum van overlijden{" "}
          <span className="hoger">(2)</span>:
        </Form.Label>
        <Form.Control
          style={{ width: "20%", marginLeft: "1%" }}
          type="date"
          required={
            arbeidsOngevalData.form6GevolgenOngevalOptie === "overlijden"
          }
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form6DatumOverlijden: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form6DatumOverlijden}
        />
      </Row>

      <Row>
        <Form.Label>
          Stopzetting van de beroepsactiviteit – datum{" "}
          <span className="hoger">(2)</span>:
        </Form.Label>
        <Form.Control
          style={{ width: "20%", marginLeft: "1%" }}
          type="date"
          required
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form6DatumStopzettingBeroepsActiviteit: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form6DatumStopzettingBeroepsActiviteit}
        />
      </Row>

      <Row>
        <Form.Label>
          Stopzetting van de beroepsactiviteit – precieze tijdstrip:
        </Form.Label>
        <Form.Control
          style={{ width: "20%", marginLeft: "1%" }}
          type="time"
          required
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form6TijdstipStopzettingBeroepsActiviteit: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form6TijdstipStopzettingBeroepsActiviteit}
        />
      </Row>

      <Row>
        <Form.Label>
          Datum van de effectieve werkhervatting{" "}
          <span className="hoger">(2)</span>:
        </Form.Label>
        <Form.Control
          style={{ width: "20%", marginLeft: "1%" }}
          type="date"
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form6DatumWerkHervatting: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form6DatumWerkHervatting}
        />
      </Row>

      <Row>
        <Form.Label>
          Indien het werk nog niet is hervat, de waarschijnlijke duur van de
          tijdelijke arbeidsongeschiktheid in dagen:
        </Form.Label>
        <Form.Control
          style={{ width: "10%", marginLeft: "1%" }}
          required={arbeidsOngevalData.form6DatumWerkHervatting === ""}
          onChange={(e) =>
            setArbeidsOngevalData((prev) => ({
              ...prev,
              form6DuurArbeidsOngeschiktheid: e.target.value,
            }))
          }
          value={arbeidsOngevalData.form6DuurArbeidsOngeschiktheid}
        />
      </Row>

      <Row>
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <Form.Label>
            Welke beschermingsmiddelen droeg de getroffene op het ogenblik van
            het ongeval?:
          </Form.Label>

          <Form.Check
            inline
            label="geen"
            value={"geen"}
            type={"checkbox"}
            onChange={(e) => handleCheckboxBescherming(e.target.value)}
            checked={arbeidsOngevalData.form6BeschermingsMiddelenOpties.includes(
              "geen"
            )}
          />

          <Form.Check
            inline
            label="helm"
            value={"helm"}
            type={"checkbox"}
            onChange={(e) => handleCheckboxBescherming(e.target.value)}
            checked={arbeidsOngevalData.form6BeschermingsMiddelenOpties.includes(
              "helm"
            )}
          />

          <Form.Check
            inline
            label="handschoenen"
            type={"checkbox"}
            value={"handschoenen"}
            onChange={(e) => handleCheckboxBescherming(e.target.value)}
            checked={arbeidsOngevalData.form6BeschermingsMiddelenOpties.includes(
              "handschoenen"
            )}
          />

          <Form.Check
            inline
            label="veiligheidsbril"
            type={"checkbox"}
            value={"veiligheidsbril"}
            onChange={(e) => handleCheckboxBescherming(e.target.value)}
            checked={arbeidsOngevalData.form6BeschermingsMiddelenOpties.includes(
              "veiligheidsbril"
            )}
          />

          <Form.Check
            inline
            label="aangezichtsscherm"
            type={"checkbox"}
            value={"aangezichtsscherm"}
            onChange={(e) => handleCheckboxBescherming(e.target.value)}
            checked={arbeidsOngevalData.form6BeschermingsMiddelenOpties.includes(
              "aangezichtsscherm"
            )}
          />

          <Form.Check
            inline
            label="beschermingsvest"
            type={"checkbox"}
            value={"beschermingsvest"}
            onChange={(e) => handleCheckboxBescherming(e.target.value)}
            checked={arbeidsOngevalData.form6BeschermingsMiddelenOpties.includes(
              "beschermingsvest"
            )}
          />

          <Form.Check
            inline
            label="signalisatiekledij"
            type={"checkbox"}
            value={"signalisatiekledij"}
            onChange={(e) => handleCheckboxBescherming(e.target.value)}
            checked={arbeidsOngevalData.form6BeschermingsMiddelenOpties.includes(
              "signalisatiekledij"
            )}
          />

          <Form.Check
            inline
            label="gehoorbescherming"
            type={"checkbox"}
            value={"gehoorbescherming"}
            onChange={(e) => handleCheckboxBescherming(e.target.value)}
            checked={arbeidsOngevalData.form6BeschermingsMiddelenOpties.includes(
              "gehoorbescherming"
            )}
          />

          <Form.Check
            inline
            label="veiligheidsschoeisel"
            type={"checkbox"}
            value={"veiligheidsschoeisel"}
            onChange={(e) => handleCheckboxBescherming(e.target.value)}
            checked={arbeidsOngevalData.form6BeschermingsMiddelenOpties.includes(
              "veiligheidsschoeisel"
            )}
          />

          <Form.Check
            inline
            label="ademhalingsmasker met verse luchttoevoer"
            type={"checkbox"}
            value={"ademhalingsmasker met verse luchttoevoer"}
            onChange={(e) => handleCheckboxBescherming(e.target.value)}
            checked={arbeidsOngevalData.form6BeschermingsMiddelenOpties.includes(
              "ademhalingsmasker met verse luchttoevoer"
            )}
          />

          <Form.Check
            inline
            label="ademhalingsmasker met filter"
            type={"checkbox"}
            value={"ademhalingsmasker met filter"}
            onChange={(e) => handleCheckboxBescherming(e.target.value)}
            checked={arbeidsOngevalData.form6BeschermingsMiddelenOpties.includes(
              "ademhalingsmasker met filter"
            )}
          />

          <Form.Check
            inline
            label="gewoon mondmasker"
            type={"checkbox"}
            value={"gewoon mondmasker"}
            onChange={(e) => handleCheckboxBescherming(e.target.value)}
            checked={arbeidsOngevalData.form6BeschermingsMiddelenOpties.includes(
              "gewoon mondmasker"
            )}
          />

          <Form.Check
            inline
            label="valbeveiliging"
            type={"checkbox"}
            value={"valbeveiliging"}
            onChange={(e) => handleCheckboxBescherming(e.target.value)}
            checked={arbeidsOngevalData.form6BeschermingsMiddelenOpties.includes(
              "valbeveiliging"
            )}
          />

          <div style={{ display: "flex", flexDirection: "row" }}>
            <Form.Check
              inline
              label="andere"
              type={"checkbox"}
              onChange={() =>
                setArbeidsOngevalData((prev) => ({
                  ...prev,
                  form6AndereBeschermingIsChecked:
                    !arbeidsOngevalData.form6AndereBeschermingIsChecked,
                }))
              }
              checked={
                arbeidsOngevalData.form6AndereBeschermingIsChecked === true
              }
            />
            <Form.Control
              style={{ width: "20%" }}
              required={
                arbeidsOngevalData.form6AndereBeschermingIsChecked === true
              }
              onChange={(e) =>
                setArbeidsOngevalData((prev) => ({
                  ...prev,
                  form6AndereBescherming: e.target.value,
                }))
              }
              value={arbeidsOngevalData.form6AndereBescherming}
            ></Form.Control>
            <Button
              type="button"
              onClick={() => handleAndereBeschermingAddBtn()}
            >
              Voeg toe
            </Button>
          </div>

          <Table
            striped
            bordered
            hover
            variant="dark"
            style={{ width: "50%", margin: "2% 0%" }}
          >
            <thead>
              <tr>
                <th>toegevoegde andere beschermingsmiddelen</th>
                <th>verwijder</th>
              </tr>
            </thead>
            <tbody>
              {arbeidsOngevalData.form6AndereBeschermingLijst.map(
                (extraItem) => (
                  <tr>
                    <td>{extraItem}</td>
                    <td>
                      <Button
                        type="button"
                        onClick={() =>
                          handleAndereBeschermingDeleteBtn(extraItem)
                        }
                      >
                        delete
                      </Button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Row>
        <Form.Label>
          {" "}
          Getroffen of te treffen maatregelen om gelijkaardige ongevallen te
          vermijden:
        </Form.Label>
      </Row>

      <Row>
        <Col xs={9}>
          <Form.Control
            as={"textarea"}
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6Maatregel1Text: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form6Maatregel1Text}
          ></Form.Control>
        </Col>

        <Col xs={1}>
          <Form.Label>
            Code <span className="hoger">(6)</span>:
          </Form.Label>
        </Col>

        <Col>
          <Form.Control
            pattern="[0-9]+"
            title="Alleen cijfers zijn toegestaan"
            required
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6Maatregel1Code: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form6Maatregel1Code}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={9}>
          <Form.Control
            as={"textarea"}
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6Maatregel2Text: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form6Maatregel2Text}
          ></Form.Control>
        </Col>

        <Col xs={1}>
          <Form.Label>
            Code <span className="hoger">(6)</span>:
          </Form.Label>
        </Col>

        <Col>
          <Form.Control
            pattern="[0-9]+"
            title="Alleen cijfers zijn toegestaan"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6Maatregel2Code: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form6Maatregel2Code}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={9}>
          <Form.Control
            as={"textarea"}
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6Maatregel3Text: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form6Maatregel3Text}
          ></Form.Control>
        </Col>

        <Col xs={1}>
          <Form.Label>
            Code <span className="hoger">(6)</span>:
          </Form.Label>
        </Col>

        <Col>
          <Form.Control
            pattern="[0-9]+"
            title="Alleen cijfers zijn toegestaan"
            onChange={(e) =>
              setArbeidsOngevalData((prev) => ({
                ...prev,
                form6Maatregel3Code: e.target.value,
              }))
            }
            value={arbeidsOngevalData.form6Maatregel3Code}
          />
        </Col>
      </Row>
      <Button type="submit" className="verzendButton">
        Verzenden
      </Button>
    </Form>
  );
};

export default CompleteForm;
