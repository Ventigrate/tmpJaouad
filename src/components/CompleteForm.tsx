import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { MyContext } from "./MyContext";
import Form1GegevensWerkgever from "./Formulieren/Form1GegevensWerkgever";
import Form2GegevensSlachtoffer from "./Formulieren/Form2GegevensSlachtoffer";
import Form3GegevensOngeval from "./Formulieren/Form3GegevensOngeval";
import Form4GegevensWerkgever from "./Formulieren/Form4GegevensWerkgever";
import Form5GegevensSlachtofferEnOngeval from "./Formulieren/Form5GegevensSlachtofferEnOngeval";
import Form6GegevensPreventie from "./Formulieren/Form6GegevensPreventie";
import Login from "./Login";
import Verduidelijking from "./Verduidelijking";
import ExtraFilesUpload from "./Formulieren/ExtraFilesUpload";
import FormulierData from "./FormulierData";

const CompleteForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [rol, setRol] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);

  const contextValue = useContext(MyContext);

  if (!contextValue) {
    return <div>Geen context value!</div>;
  }

  const { arbeidsOngevalData, setArbeidsOngevalData } = contextValue;

  var FORMDATA: string = "";

  const setFormData = () => {
    FORMDATA = FormulierData(arbeidsOngevalData);
  };

  const postDataToApi = async () => {
    setFormData();
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

  const handleUpload = async () => {
    try {
      if (!files || files.length === 0) {
        console.error("No files selected.");
        return;
      }

      const apiUrl = "https://localhost:7143/api/Arbeidsongevallen/uploadFiles";

      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }

      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.text();
        console.log(result);
      } else {
        console.error(`Failed to upload files. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    postDataToApi();
    handleUpload();
    setFiles([])
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

  return (
    <>
      <Login rol={rol} setRol={setRol} />
      <Form onSubmit={handleSubmit}>
        {(rol === "User1@hotmail.com" || rol === "User4@hotmail.com") && (
          <>
            <Form1GegevensWerkgever />
            <Form2GegevensSlachtoffer />
            <Form3GegevensOngeval />
            <Form4GegevensWerkgever />
            <Form5GegevensSlachtofferEnOngeval />
            <Form6GegevensPreventie />
            <ExtraFilesUpload files={files} setFiles={setFiles} />
          </>
        )}

        {rol === "User2@hotmail.com" && (
          <>
            <Form2GegevensSlachtoffer />
            <Form3GegevensOngeval />
            <ExtraFilesUpload files={files} setFiles={setFiles} />
          </>
        )}

        {rol === "User3@hotmail.com" && (
          <>
            <Form4GegevensWerkgever />
            <Form6GegevensPreventie />
            <ExtraFilesUpload files={files} setFiles={setFiles} />
          </>
        )}

        {(rol === "User1@hotmail.com" || rol === "User4@hotmail.com") && (
          <Button type="submit" className="verzendButton">
            Verzenden
          </Button>
        )}

        {(rol === "User2@hotmail.com" || rol === "User3@hotmail.com") && (
          <Button
            className="verzendButton"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              const form = e.currentTarget.form;
              form?.reportValidity();
            }}
          >
            Verzenden
          </Button>
        )}
      </Form>
      {(rol === "User1@hotmail.com" ||
        rol === "User2@hotmail.com" ||
        rol === "User3@hotmail.com" ||
        rol === "User4@hotmail.com") && <Verduidelijking />}
    </>
  );
};

export default CompleteForm;
