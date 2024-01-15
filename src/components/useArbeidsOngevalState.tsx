import { useState } from "react";

const useArbeidsOngevalState = () => {
  const [arbeidsOngevalData, setArbeidsOngevalData] =
    useState<ArbeidsOngevalDataProps>({
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

  return { arbeidsOngevalData, setArbeidsOngevalData };
};

export default useArbeidsOngevalState;