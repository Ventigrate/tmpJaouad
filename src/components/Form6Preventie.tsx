import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const Form6Preventie = () => {
  const [bezigheidOngeval, setBezigheidOngeval] = useState<string>("");
  const [gevolgenOngeval, setGevolgenOngeval] = useState<string>("");
  const [andereBescherming, setAndereBescherming] = useState<boolean>(false);
  return (
    <Form>
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

    </Form>
  );
};

export default Form6Preventie;
