import { useContext } from "react";
import { MyContext } from "../MyContext";
import { Col, Form, Row } from "react-bootstrap";

const Form3GegevensOngeval = () => {
  const contextValue = useContext(MyContext);

  if (!contextValue) {
    return <div>Geen context value!</div>;
  }

  const { arbeidsOngevalData, setArbeidsOngevalData } = contextValue;
  return (
    <>
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
    </>
  );
};

export default Form3GegevensOngeval;
