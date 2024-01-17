import { useContext } from "react";
import { MyContext } from "../MyContext";
import { Button, Col, Form, Row, Table } from "react-bootstrap";

const Form6GegevensPreventie = () => {
  const contextValue = useContext(MyContext);

  if (!contextValue) {
    return <div>Geen context value!</div>;
  }

  const { arbeidsOngevalData, setArbeidsOngevalData } = contextValue;

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
    <>
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
    </>
  );
};

export default Form6GegevensPreventie;
