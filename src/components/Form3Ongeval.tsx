import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

const Form3Ongeval = () => {
  const [plaatsOngeval, setPlaatsOngeval] = useState<string>("");
  const [bezigheid, setBezigheid] = useState<string>("");
  return (
    <Form>
      <legend>III. Gegevens over het ongeval</legend>
      <Row>
        <Col>
          <Form.Label>Dag van het ongeval:</Form.Label>
          <Form.Control
            required
            pattern="(maandag|Maandag|dinsdag|Dinsdag|woensdag|Woensdag|donderdag|Donderdag|vrijdag|Vrijdag|zaterdag|Zaterdag|zondag|Zondag)"
            title="Voer een geldige dag van de week in"
          />
        </Col>
        <Col>
          <Form.Label>
            Datum <span className="hoger">(2)</span>:
          </Form.Label>
          <Form.Control required type="date" />
        </Col>
        <Col>
          <Form.Label>Precieze tijdstip:</Form.Label>
          <Form.Control type="time" required />
        </Col>
      </Row>

      <Row>
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <Form.Label>Plaats van het ongeval: </Form.Label>

          <Form.Check
            inline
            label="in de administratie, dienst of inrichting op het adres vermeld in veld 2"
            value={
              "in de administratie, dienst of inrichting op het adres vermeld in veld 2"
            }
            type={"radio"}
            name="plaatsOngeval"
            onChange={(e) => setPlaatsOngeval(e.target.value)}
            required
          />
          <div>
            <Form.Check
              inline
              label="op de openbare weg. In bevestigend geval, betrof het een verkeersongeval?:"
              value={"op de openbare weg."}
              type={"radio"}
              name="plaatsOngeval"
              onChange={(e) => setPlaatsOngeval(e.target.value)}
              required
            />
            <Form.Check
              inline
              label="ja"
              type={"radio"}
              name="verkeersOngeval"
              required={plaatsOngeval === "op de openbare weg."}
            />
            <Form.Check
              inline
              label="neen"
              type={"radio"}
              name="verkeersOngeval"
              required={plaatsOngeval === "op de openbare weg."}
            />
          </div>

          <Form.Check
            inline
            label="op een andere plaats"
            value={"op een andere plaats"}
            type={"radio"}
            name="plaatsOngeval"
            onChange={(e) => setPlaatsOngeval(e.target.value)}
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
            plaatsOngeval === "op de openbare weg." ||
            plaatsOngeval === "op een andere plaats"
          }
        />
      </Row>

      <Row>
        <Col>
          <Form.Label>Postcode:</Form.Label>
          <Form.Control
            required={
              plaatsOngeval === "op de openbare weg." ||
              plaatsOngeval === "op een andere plaats"
            }
            pattern="[0-9]{4}"
            title="Voer een geldig postcode in (4 cijfers)"
          />
        </Col>
        <Col>
          <Form.Label>Gemeente:</Form.Label>
          <Form.Control
            required={
              plaatsOngeval === "op de openbare weg." ||
              plaatsOngeval === "op een andere plaats"
            }
            pattern="[A-Za-z]+"
            title="Alleen letters zijn toegestaan"
          />
        </Col>
        <Col>
          <Form.Label>Land:</Form.Label>
          <Form.Control
            required={
              plaatsOngeval === "op de openbare weg." ||
              plaatsOngeval === "op een andere plaats"
            }
            pattern="[A-Za-z]+"
            title="Alleen letters zijn toegestaan"
          />
        </Col>
      </Row>

      <Row>
        <Form.Label>Werfnummer:</Form.Label>
        <Form.Control
          style={{ width: "98%", marginLeft: "1%" }}
          required={
            plaatsOngeval === "op de openbare weg." ||
            plaatsOngeval === "op een andere plaats"
          }
          pattern="[0-9]+"
          title="Alleen cijfers zijn toegestaan"
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
            label="ja"
            type={"radio"}
            name="gewoneFunctie"
            required
            value={"ja"}
            onChange={(e) => setBezigheid(e.target.value)}
          />
          <Form.Check
            inline
            label="neen"
            type={"radio"}
            name="gewoneFunctie"
            required
            value={"nee"}
            onChange={(e) => setBezigheid(e.target.value)}
          />
        </Col>
      </Row>

      <Row>
        <Form.Label>Zo neen, welke bezigheid oefende het uit?</Form.Label>
        <Form.Control
          style={{ width: "98%", marginLeft: "1%" }}
          required={bezigheid === "nee"}
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
              label="ja"
              type={"radio"}
              name="OngevalWet"
              required
            />
            <Form.Check
              inline
              label="neen"
              type={"radio"}
              name="OngevalWet"
              required
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
        />
      </Row>

      <Row>
        <Col>
          <Form.Label>
            Eerste zorgen verstrekt op <span className="hoger">(2)</span>:
          </Form.Label>
          <Form.Control type="date" required />
        </Col>
        <Col>
          <Form.Label>Precieze tijdstrip:</Form.Label>
          <Form.Control type="time" required />
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
          pattern="[A-Za-z]+"
          title="Alleen letters zijn toegestaan"
        />
      </Row>

      <Row>
        <Col>
          <Form.Label>Straat / nr. / bus:</Form.Label>
          <Form.Control required />
        </Col>
        <Col>
          <Form.Label>Postcode:</Form.Label>
          <Form.Control
            pattern="[0-9]{4}"
            title="Voer een geldig postcode in (4 cijfers)"
            required
          />
        </Col>
        <Col>
          <Form.Label>Gemeente:</Form.Label>
          <Form.Control
            pattern="[A-Za-z]+"
            title="Alleen letters zijn toegestaan"
            required
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Label>Proces verbaal opgesteld te:</Form.Label>
          <Form.Control
            pattern="[A-Za-z]+"
            title="Alleen letters zijn toegestaan"
            required
          />
        </Col>
        <Col>
          <Form.Label>
            Op <span className="hoger">(2)</span>:
          </Form.Label>
          <Form.Control type="date" required />
        </Col>
        <Col>
          <Form.Label>Door:</Form.Label>
          <Form.Control
            pattern="[A-Za-z]+"
            title="Alleen letters zijn toegestaan"
            required
          />
        </Col>
      </Row>

      <Row>
        <Form.Label>Naam en adres van de eventuele aansprakelijke:</Form.Label>
        <Form.Control style={{ width: "98%", marginLeft: "1%" }} required />
      </Row>

      <Row>
        <Col xs={9}>
          <Form.Label>Naam en adres van de verzekeraar:</Form.Label>
          <Form.Control required />
        </Col>
        <Col>
          <Form.Label>Polisnr:</Form.Label>
          <Form.Control required />
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Label>Getuige 1 naam:</Form.Label>
          <Form.Control
            pattern="[A-Za-z]+"
            title="Alleen letters zijn toegestaan"
          />
        </Col>
        <Col>
          <Form.Label>Straat / nr. / bus:</Form.Label>
          <Form.Control />
        </Col>
        <Col xs={1}>
          <Form.Label>Postcode:</Form.Label>
          <Form.Control
            pattern="[0-9]{4}"
            title="Voer een geldig postcode in (4 cijfers)"
          />
        </Col>
        <Col>
          <Form.Label>Gemeente:</Form.Label>
          <Form.Control
            pattern="[A-Za-z]+"
            title="Alleen letters zijn toegestaan"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Label>Getuige 2 naam:</Form.Label>
          <Form.Control
            pattern="[A-Za-z]+"
            title="Alleen letters zijn toegestaan"
          />
        </Col>
        <Col>
          <Form.Label>Straat / nr. / bus:</Form.Label>
          <Form.Control />
        </Col>
        <Col xs={1}>
          <Form.Label>Postcode:</Form.Label>
          <Form.Control
            pattern="[0-9]{4}"
            title="Voer een geldig postcode in (4 cijfers)"
          />
        </Col>
        <Col>
          <Form.Label>Gemeente:</Form.Label>
          <Form.Control
            pattern="[A-Za-z]+"
            title="Alleen letters zijn toegestaan"
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
          />

          <Form.Check
            inline
            label="ongeval op de weg naar en van het werk "
            type={"radio"}
            name="aardOngeval"
            required
          />
          <Form.Check
            inline
            label="ongeval overkomen buiten de uitoefening van de dienst, maar veroorzaakt door een derde wegens het door het slachtoffer uitgeoefend ambt (art. 2, lid 3, 2°, van de wet van 3 juli 1967)"
            type={"radio"}
            name="aardOngeval"
            required
          />
        </Col>
      </Row>
    </Form>
  );
};

export default Form3Ongeval;
