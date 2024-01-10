import { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

const CompleteForm = () => {
  const [plaatsOngeval, setPlaatsOngeval] = useState<string>("");
  const [bezigheid, setBezigheid] = useState<string>("");
  const [beroepsCategorie, setBeroepsCategorie] = useState<string>("");
  const [bezigheidOngeval, setBezigheidOngeval] = useState<string>("");
  const [gevolgenOngeval, setGevolgenOngeval] = useState<string>("");
  const [andereBescherming, setAndereBescherming] = useState<boolean>(false);
  const [uitdiensttreding, setUitdiensttreding] = useState<boolean>(false);

  return (
    <Form>
      <legend>I. Gegevens over de werkgever</legend>
      <Row>
        <Form.Label>
          Naam van de administratie, dienst of inrichting:
        </Form.Label>
        <Form.Control style={{ width: "98%", marginLeft: "1%" }} required />
      </Row>
      <Row>
        <Col>
          <Form.Label>Tel:</Form.Label>
          <Form.Control
            required
            pattern="[0-9]{9}"
            title="Voer een geldig telefoonnummer in (9 cijfers)"
          />
        </Col>
        <Col>
          <Form.Label>Fax:</Form.Label>
          <Form.Control
            required
            pattern="[0-9]{9}"
            title="Voer een geldig faxnummer in (9 cijfers)"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Straat / nr. / bus:</Form.Label>
          <Form.Control required />
        </Col>
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
        <Col xs={9}>
          <Form.Label>Aard van de administratie:</Form.Label>
          <Form.Control required />
        </Col>
        <Col>
          <Form.Label>NACE BEL-code:</Form.Label>
          <Form.Control
            required
            pattern="\d{2}\.\d{3}"
            title="Voer een geldige NACE BEL-code in (bijv., 58.110)"
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
          />
        </Col>
        <Col>
          <Form.Label>en desgevallend,vestigingseenheidsnummer:</Form.Label>
          <Form.Control
            pattern="\d{4}-\d{3}-\d{3}"
            title="Voer een geldig vestigingseenheidsnummer in (bijv., 0449-188-489)"
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
          />
        </Col>
        <Col>
          <Form.Label>
            Naam van de echtgenoot <span className="hoger">(1)</span>:
          </Form.Label>
          <Form.Control
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
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
          <Form.Control required />
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
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
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
            pattern="[A-Za-z\s]+"
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
            pattern="[A-Za-z\s]+"
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
          pattern="[A-Za-z\s]+"
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
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
            required
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
            pattern="[A-Za-z\s]+"
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
            pattern="[A-Za-z\s]+"
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
            pattern="[A-Za-z\s]+"
            title="Alleen letters zijn toegestaan"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Label>Getuige 2 naam:</Form.Label>
          <Form.Control
            pattern="[A-Za-z\s]+"
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
            pattern="[A-Za-z\s]+"
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
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <Form.Label>
          Is de datum van uitdiensttreding gekend?:
            <span className="hoger">(3)</span>
          </Form.Label>

          <Form.Check
            inline
            label="ja"
            type={"radio"}
            name="uitdiensttreding"
            required
            value={"ja"}
            onChange={()=>setUitdiensttreding(true)}
            
          />
          <Form.Check
            inline
            label="neen"
            type={"radio"}
            name="uitdiensttreding"
            required
            value={"nee"}
            onChange={()=>setUitdiensttreding(false)}
            
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
          required={uitdiensttreding}
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

      <legend>VI. Gegevens over de preventie</legend>

      <Row>
        <Form.Label>
          Activiteit van de afdeling of dienst waar het slachtoffer gewoonlijk
          zijn functie uitoefent:
        </Form.Label>
        <Form.Control style={{ width: "98%", marginLeft: "1%" }} required />
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
            label="ja"
            type={"radio"}
            name="bezigheidOngeval"
            value={"ja"}
            required
            onChange={(e) => setBezigheidOngeval(e.target.value)}
          />
          <Form.Check
            inline
            label="neen"
            type={"radio"}
            name="bezigheidOngeval"
            value={"neen"}
            required
            onChange={(e) => setBezigheidOngeval(e.target.value)}
          />
        </div>
      </Row>

      <Row>
        <Form.Label>Zo neen, welke bezigheid oefende het uit? :</Form.Label>
        <Form.Control
          style={{ width: "98%", marginLeft: "1%" }}
          required={bezigheidOngeval === "neen"}
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
            label="ja"
            type={"radio"}
            name="3juliWet"
            required
          />
          <Form.Check
            inline
            label="neen"
            type={"radio"}
            name="3juliWet"
            required
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
          />
        </Col>
      </Row>

      <Row>
        <Col xs={9}>
          <Form.Label>
            Laatst afwijkende gebeurtenis die tot het ongeval heeft geleid:
          </Form.Label>
          <Form.Control required />
        </Col>
        <Col>
          <Form.Label>
            Code <span className="hoger">(6)</span>:
          </Form.Label>
          <Form.Control
            pattern="[0-9]+"
            title="Alleen cijfers zijn toegestaan"
            required
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
          />

          <Form.Check
            inline
            label="tijdelijke arbeidsongeschiktheid"
            type={"radio"}
            name="gevolgen"
            required
          />

          <div style={{ display: "flex" }}>
            <Form.Check
              inline
              label="blijvende arbeidsongeschiktheid te voorzien:"
              type={"radio"}
              value={"blijvende arbeidsongeschiktheid"}
              onChange={(e) => setGevolgenOngeval(e.target.value)}
              name="gevolgen"
              required
            />
            <Form.Label>de voorziene blijvende ongeschiktheid is:</Form.Label>
            <Form.Control
              style={{ width: "5%", margin: "0% 1%" }}
              required={gevolgenOngeval === "blijvende arbeidsongeschiktheid"}
            />
            <Form.Label>%</Form.Label>
          </div>

          <Form.Check
            inline
            label="overlijden"
            type={"radio"}
            value={"overlijden"}
            onChange={(e) => setGevolgenOngeval(e.target.value)}
            name="gevolgen"
            required
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
          required={gevolgenOngeval === "overlijden"}
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
        />
      </Row>

      <Row>
        <Form.Label>
          Datum van de effectieve werkhervatting{" "}
          <span className="hoger">(2)</span>:
        </Form.Label>
        <Form.Control style={{ width: "20%", marginLeft: "1%" }} type="date" />
      </Row>

      <Row>
        <Form.Label>
          Indien het werk nog niet is hervat, de waarschijnlijke duur van de
          tijdelijke arbeidsongeschiktheid in dagen:
        </Form.Label>
        <Form.Control
          style={{ width: "10%", marginLeft: "1%" }}
          type="number"
        />
      </Row>

      <Row>
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <Form.Label>
            Welke beschermingsmiddelen droeg de getroffene op het ogenblik van
            het ongeval?:
          </Form.Label>

          <Form.Check inline label="geen" type={"radio"} />

          <Form.Check inline label="helm" type={"radio"} />

          <Form.Check inline label="handschoenen" type={"radio"} />

          <Form.Check inline label="veiligheidsbril" type={"radio"} />

          <Form.Check inline label="aangezichtsscherm" type={"radio"} />

          <Form.Check inline label="beschermingsvest" type={"radio"} />

          <Form.Check inline label="signalisatiekledij" type={"radio"} />

          <Form.Check inline label="gehoorbescherming" type={"radio"} />

          <Form.Check inline label="veiligheidsschoeisel" type={"radio"} />

          <Form.Check
            inline
            label="ademhalingsmasker met verse luchttoevoer"
            type={"radio"}
          />

          <Form.Check
            inline
            label="ademhalingsmasker met filter"
            type={"radio"}
          />

          <Form.Check inline label="gewoon mondmasker" type={"radio"} />

          <Form.Check inline label="valbeveiliging" type={"radio"} />

          <div style={{ display: "flex", flexDirection: "row" }}>
            <Form.Check
              inline
              label="andere"
              type={"radio"}
              onChange={() => setAndereBescherming(true)}
            />
            <Form.Control
              style={{ width: "20%" }}
              required={andereBescherming}
            ></Form.Control>
          </div>
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
          <Form.Control as={"textarea"} required></Form.Control>
        </Col>

        <Col xs={1}>
          <Form.Label>
            Code <span className="hoger">(6)</span>:
          </Form.Label>
        </Col>

        <Col>
          <Form.Control required></Form.Control>
        </Col>
      </Row>

      <Row>
        <Col xs={9}>
          <Form.Control as={"textarea"}></Form.Control>
        </Col>

        <Col xs={1}>
          <Form.Label>
            Code <span className="hoger">(6)</span>:
          </Form.Label>
        </Col>

        <Col>
          <Form.Control></Form.Control>
        </Col>
      </Row>

      <Row>
        <Col xs={9}>
          <Form.Control as={"textarea"}></Form.Control>
        </Col>

        <Col xs={1}>
          <Form.Label>
            Code <span className="hoger">(6)</span>:
          </Form.Label>
        </Col>

        <Col>
          <Form.Control></Form.Control>
        </Col>
      </Row>
      <Button type="submit" className="verzendButton">
        Verzenden
      </Button>
    </Form>
  );
};

export default CompleteForm;
