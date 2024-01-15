interface ArbeidsOngevalDataProps {
  // Form 1: Gegevens over de werkgever (10)

  form1Naam: string;
  form1Tel: string;
  form1Fax: string;
  form1Straat: string;
  form1Postcode: string;
  form1Gemeente: string;
  form1Aard: string;
  form1BELCode: string;
  form1OndernemingsNr: string;
  form1VestigingsNr: string;

  // Form 2: Gegevens over het slachtoffer (13)

  form2NaamVoornaam: string;
  form2NaamEchtgenoot: string;
  form2Geslacht: string;
  form2Geboortedatum: string;
  form2Taalrol: string;
  form2RijksregisterNr: string;
  form2Nationaliteit: string;
  form2MedischDosierNr: string;
  form2BankrekeningNr: string;
  form2BIC: string;
  form2HoofdVerblijfPlaats: string;
  form2Postcode: string;
  form2Gemeente: string;

  // Form 3: Gegevens over het ongeval (39)

  form3DagOngeval: string;
  form3DatumOngeval: string;
  form3TijdstipOngeval: string;
  form3PlaatsOngevalOptie: string;
  form3VerkeersOngevalJaNee: string;
  form3Straat: string;
  form3Postcode: string;
  form3Gemeente: string;
  form3Land: string;
  form3WerfNr: string;
  form3GewoneFunctieJaNee: string;
  form3WelkeBezigheid: string;
  form3OngevalArt2JaNee: string;
  form3OmgevingText: string;
  form3AlgemeneActiviteitText: string;
  form3SpecifiekeActiviteitText: string;
  form3GebeurtenissenText: string;
  form3ContactenEnVoorwerpenText: string;
  form3EersteZorgenDatum: string;
  form3EersteZorgenTijdstip: string;
  form3GeneesheerNaam: string;
  form3GeneesheerStraat: string;
  form3GeneesheerPostcode: string;
  form3GeneesheerGemeente: string;
  form3ProcesVerbaalPlaats: string;
  form3ProcesVerbaalDatum: string;
  form3ProcesVerbaalDoor: string;
  form3NaamAdresAansprakelijke: string;
  form3NaamAdresVerzekeraar: string;
  form3PolisNr: string;
  form3Getuige1Naam: string;
  form3Getuige1Straat: string;
  form3Getuige1Postcode: string;
  form3Getuige1Gemeente: string;
  form3Getuige2Naam: string;
  form3Getuige2Straat: string;
  form3Getuige2Postcode: string;
  form3Getuige2Gemeente: string;
  form3AardOngeval: string;

  // Form 4: Gegevens over de werkgever (9)

  form4AdresOfDienstSlachtoffer: string;
  form4Postcode: string;
  form4Gemeente: string;
  form4DienstMedischToezichtNaam: string;
  form4DienstMedischToezichtStraat: string;
  form4DienstMedischToezichtPostcode: string;
  form4DienstMedischToezichtGemeente: string;
  form4PersoneelsLeden: string;
  form4ArbeidsDagen: string;

  // Form 5: Gegevens over het slachtoffer en over het ongeval (17)

  form5DatumIndienstTreding: string;
  form5DuurtijdTewerkstellingOptie: string;
  form5UitdienstTredingGekendJaNee: string;
  form5DatumUitdienstTreding: string;
  form5AardTewerkstellingOptie: string;
  form5BeroepsCategorieOptie: string;
  form5AndereBeroepsCategorie: string;
  form5GewoneFunctieAdministratie: string;
  form5IscoCode: string;
  form5HoelangBeroepOptie: string;
  form5SoortWerkplekOptie: string;
  form5DatumKennisgevingWerkgever: string;
  form5PresterenUrenVan: string;
  form5PresterenUrenTot: string;
  form5PresterenUrenEnVan: string;
  form5PresterenUrenEnTot: string;
  form5OpmerkingenOmstandigheden: string;

  // Form 6: Gegevens over de preventie (31)

  form6ActiviteitAfdelingOfDienst: string;
  form6BezigheidGewoneFunctieJaNee: string;
  form6WelkeBezigheid: string;
  form6Ongeval3juliWetJaNee: string;
  form6SoortWerk: string;
  form6SoortWerkCode: string;
  form6AfwijkendeGebeurtenis: string;
  form6AfwijkendeGebeurtenisCode: string;
  form6BetrokkenVoorwerp: string;
  form6BetrokkenVoorwerpCode: string;
  form6WijzeVerwonding: string;
  form6WijzeVerwondingCode: string;
  form6SoortLetsel: string;
  form6SoortLetselCode: string;
  form6VerwondDeel: string;
  form6VerwondDeelCode: string;
  form6GevolgenOngevalOptie: string;
  form6BlijvendeOngeschiktheid: string;
  form6DatumOverlijden: string;
  form6DatumStopzettingBeroepsActiviteit: string;
  form6TijdstipStopzettingBeroepsActiviteit: string;
  form6DatumWerkHervatting: string;
  form6DuurArbeidsOngeschiktheid: string;
  form6BeschermingsMiddelenOpties: string[];
  form6AndereBeschermingIsChecked: boolean;
  form6AndereBescherming: string;
  form6AndereBeschermingLijst: string[];
  form6Maatregel1Text: string;
  form6Maatregel1Code: string;
  form6Maatregel2Text: string;
  form6Maatregel2Code: string;
  form6Maatregel3Text: string;
  form6Maatregel3Code: string;
}
