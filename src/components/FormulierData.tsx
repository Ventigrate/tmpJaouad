const FormulierData = (arbeidsOngevalData: ArbeidsOngevalDataProps) => {
  return `{
        "id": 0,
        "form1Naam": "${arbeidsOngevalData.form1Naam}",
        "form1Tel": "${arbeidsOngevalData.form1Tel}",
        "form1Fax": "${arbeidsOngevalData.form1Fax}",
        "form1Straat": "${arbeidsOngevalData.form1Straat}",
        "form1Postcode": "${arbeidsOngevalData.form1Postcode}",
        "form1Gemeente": "${arbeidsOngevalData.form1Gemeente}",
        "form1AardAdministratie": "${arbeidsOngevalData.form1Aard}",
        "form1BELCode": "${arbeidsOngevalData.form1BELCode}",
        "form1OndernemingsNr": "${arbeidsOngevalData.form1OndernemingsNr}",
        "form1VestigingsEenheidsNr": "${arbeidsOngevalData.form1VestigingsNr}",
        "form2NaamEnVoornaam": "${arbeidsOngevalData.form2NaamVoornaam}",
        "form2NaamEchtgenoot": "${arbeidsOngevalData.form2NaamEchtgenoot}",
        "form2Geslacht": "${arbeidsOngevalData.form2Geslacht}",
        "form2Geboortedatum": "${arbeidsOngevalData.form2Geboortedatum}",
        "form2Taalrol": "${arbeidsOngevalData.form2Taalrol}",
        "form2RijksregisterNr": "${arbeidsOngevalData.form2RijksregisterNr}",
        "form2Nationaliteit": "${arbeidsOngevalData.form2Nationaliteit}",
        "form2MedischDosierNr": "${arbeidsOngevalData.form2MedischDosierNr}",
        "form2BankrekeningNr": "${arbeidsOngevalData.form2BankrekeningNr}",
        "form2BIC": "${arbeidsOngevalData.form2BIC}",
        "form2HoofdVerblijfPlaats": "${
          arbeidsOngevalData.form2HoofdVerblijfPlaats
        }",
        "form2Postcode": "${arbeidsOngevalData.form2Postcode}",
        "form2Gemeente": "${arbeidsOngevalData.form2Gemeente}",
        "form3DagOngeval": "${arbeidsOngevalData.form3DagOngeval}",
        "form3DatumOngeval": "${arbeidsOngevalData.form3DatumOngeval}",
        "form3TijdstipOngeval": "${arbeidsOngevalData.form3TijdstipOngeval}",
        "form3PlaatsOngevalOptie": "${
          arbeidsOngevalData.form3PlaatsOngevalOptie
        }",
        "form3VerkeersOngevalJaNee": "${
          arbeidsOngevalData.form3VerkeersOngevalJaNee
        }",
        "form3Straat": "${arbeidsOngevalData.form3Straat}",
        "form3Postcode": "${arbeidsOngevalData.form3Postcode}",
        "form3Gemeente": "${arbeidsOngevalData.form3Gemeente}",
        "form3Land": "${arbeidsOngevalData.form3Land}",
        "form3WerfNr": "${arbeidsOngevalData.form3WerfNr}",
        "form3GewoneFunctieJaNee": "${
          arbeidsOngevalData.form3GewoneFunctieJaNee
        }",
        "form3WelkeBezigheid": "${arbeidsOngevalData.form3WelkeBezigheid}",
        "form3OngevalArt2JaNee": "${arbeidsOngevalData.form3OngevalArt2JaNee}",
        "form3OmgevingText": "${arbeidsOngevalData.form3OmgevingText}",
        "form3AlgemeneActiviteitText": "${
          arbeidsOngevalData.form3AlgemeneActiviteitText
        }",
        "form3SpecifiekeActiviteitText": "${
          arbeidsOngevalData.form3SpecifiekeActiviteitText
        }",
        "form3GebeurtenissenText": "${
          arbeidsOngevalData.form3GebeurtenissenText
        }",
        "form3ContactenEnVoorwerpenText": "${
          arbeidsOngevalData.form3ContactenEnVoorwerpenText
        }",
        "form3EersteZorgenDatum": "${
          arbeidsOngevalData.form3EersteZorgenDatum
        }",
        "form3EersteZorgenTijdstip": "${
          arbeidsOngevalData.form3EersteZorgenTijdstip
        }",
        "form3GeneesheerNaam": "${arbeidsOngevalData.form3GeneesheerNaam}",
        "form3GeneesheerStraat": "${arbeidsOngevalData.form3GeneesheerStraat}",
        "form3GeneesheerPostcode": "${
          arbeidsOngevalData.form3GeneesheerPostcode
        }",
        "form3GeneesheerGemeente": "${
          arbeidsOngevalData.form3GeneesheerPostcode
        }",
        "form3ProcesVerbaalPlaats": "${
          arbeidsOngevalData.form3ProcesVerbaalPlaats
        }",
        "form3ProcesVerbaalDatum": "${
          arbeidsOngevalData.form3ProcesVerbaalDatum
        }",
        "form3ProcesVerbaalDoor": "${
          arbeidsOngevalData.form3ProcesVerbaalDoor
        }",
        "form3NaamAdresAansprakelijke": "${
          arbeidsOngevalData.form3NaamAdresAansprakelijke
        }",
        "form3NaamAdresVerzekeraar": "${
          arbeidsOngevalData.form3NaamAdresAansprakelijke
        }",
        "form3PolisNr": "${arbeidsOngevalData.form3PolisNr}",
        "form3Getuige1Naam": "${arbeidsOngevalData.form3Getuige1Naam}",
        "form3Getuige1Straat": "${arbeidsOngevalData.form3Getuige1Straat}",
        "form3Getuige1Postcode": "${arbeidsOngevalData.form3Getuige1Postcode}",
        "form3Getuige1Gemeente": "${arbeidsOngevalData.form3Getuige1Gemeente}",
        "form3Getuige2Naam": "${arbeidsOngevalData.form3Getuige2Naam}",
        "form3Getuige2Straat": "${arbeidsOngevalData.form3Getuige2Straat}",
        "form3Getuige2Postcode": "${arbeidsOngevalData.form3Getuige2Postcode}",
        "form3Getuige2Gemeente": "${arbeidsOngevalData.form3Getuige2Gemeente}",
        "form3AardOngeval": "${arbeidsOngevalData.form3AardOngeval}",
        "form4AdresOfDienstSlachtoffer": "${
          arbeidsOngevalData.form4AdresOfDienstSlachtoffer
        }",
        "form4Postcode": "${arbeidsOngevalData.form4Postcode}",
        "form4Gemeente": "${arbeidsOngevalData.form4Gemeente}",
        "form4DienstMedischToezichtNaam": "${
          arbeidsOngevalData.form4DienstMedischToezichtNaam
        }",
        "form4DienstMedischToezichtStraat": "${
          arbeidsOngevalData.form4DienstMedischToezichtStraat
        }",
        "form4DienstMedischToezichtPostcode": "${
          arbeidsOngevalData.form4DienstMedischToezichtPostcode
        }",
        "form4DienstMedischToezichtGemeente": "${
          arbeidsOngevalData.form4DienstMedischToezichtGemeente
        }",
        "form4PersoneelsLeden": "${arbeidsOngevalData.form4PersoneelsLeden}",
        "form4ArbeidsDagen": "${arbeidsOngevalData.form4ArbeidsDagen}",
        "form5DatumIndienstTreding": "${
          arbeidsOngevalData.form5DatumIndienstTreding
        }",
        "form5DuurtijdTewerkstellingOptie": "${
          arbeidsOngevalData.form5DuurtijdTewerkstellingOptie
        }",
        "form5UitdienstTredingGekendJaNee": "${
          arbeidsOngevalData.form5UitdienstTredingGekendJaNee
        }",
        "form5DatumUitdienstTreding": "${
          arbeidsOngevalData.form5DatumUitdienstTreding
        }",
        "form5AardTewerkstellingOptie": "${
          arbeidsOngevalData.form5AardTewerkstellingOptie
        }",
        "form5BeroepsCategorieOptie": "${
          arbeidsOngevalData.form5BeroepsCategorieOptie
        }",
        "form5AndereBeroepsCategorie": "${
          arbeidsOngevalData.form5AndereBeroepsCategorie
        }",
        "form5GewoneFunctieAdministratie": "${
          arbeidsOngevalData.form5GewoneFunctieAdministratie
        }",
        "form5IscoCode": "${arbeidsOngevalData.form5IscoCode}",
        "form5HoelangBeroepOptie": "${
          arbeidsOngevalData.form5HoelangBeroepOptie
        }",
        "form5SoortWerkplekOptie": "${
          arbeidsOngevalData.form5SoortWerkplekOptie
        }",
        "form5DatumKennisgevingWerkgever": "${
          arbeidsOngevalData.form5DatumKennisgevingWerkgever
        }",
        "form5PresterenUrenVan": "${arbeidsOngevalData.form5PresterenUrenVan}",
        "form5PresterenUrenTot": "${arbeidsOngevalData.form5PresterenUrenTot}",
        "form5PresterenUrenEnVan": "${
          arbeidsOngevalData.form5PresterenUrenEnVan
        }",
        "form5PresterenUrenEnTot": "${
          arbeidsOngevalData.form5PresterenUrenEnTot
        }",
        "form5OpmerkingenOmstandigheden": "${
          arbeidsOngevalData.form5OpmerkingenOmstandigheden
        }",
        "form6ActiviteitAfdelingOfDienst": "${
          arbeidsOngevalData.form6ActiviteitAfdelingOfDienst
        }",
        "form6BezigheidGewoneFunctieJaNee": "${
          arbeidsOngevalData.form6BezigheidGewoneFunctieJaNee
        }",
        "form6WelkeBezigheid": "${arbeidsOngevalData.form6WelkeBezigheid}",
        "form6Ongeval3juliWetJaNee": "${
          arbeidsOngevalData.form6Ongeval3juliWetJaNee
        }",
        "form6SoortWerk": "${arbeidsOngevalData.form6SoortWerk}",
        "form6SoortWerkCode": "${arbeidsOngevalData.form6SoortWerkCode}",
        "form6AfwijkendeGebeurtenis": "${
          arbeidsOngevalData.form6AfwijkendeGebeurtenis
        }",
        "form6AfwijkendeGebeurtenisCode": "${
          arbeidsOngevalData.form6AfwijkendeGebeurtenisCode
        }",
        "form6BetrokkenVoorwerp": "${
          arbeidsOngevalData.form6BetrokkenVoorwerp
        }",
        "form6BetrokkenVoorwerpCode": "${
          arbeidsOngevalData.form6BetrokkenVoorwerpCode
        }",
        "form6WijzeVerwonding": "${arbeidsOngevalData.form6WijzeVerwonding}",
        "form6WijzeVerwondingCode": "${
          arbeidsOngevalData.form6WijzeVerwondingCode
        }",
        "form6SoortLetsel": "${arbeidsOngevalData.form6SoortLetsel}",
        "form6SoortLetselCode": "${arbeidsOngevalData.form6SoortLetselCode}",
        "form6VerwondDeel": "${arbeidsOngevalData.form6VerwondDeel}",
        "form6VerwondDeelCode": "${arbeidsOngevalData.form6VerwondDeelCode}",
        "form6GevolgenOngevalOptie": "${
          arbeidsOngevalData.form6GevolgenOngevalOptie
        }",
        "form6BlijvendeOngeschiktheid": "${
          arbeidsOngevalData.form6BlijvendeOngeschiktheid
        }",
        "form6DatumOverlijden": "${arbeidsOngevalData.form6DatumOverlijden}",
        "form6DatumStopzettingBeroepsActiviteit": "${
          arbeidsOngevalData.form6DatumStopzettingBeroepsActiviteit
        }",
        "form6TijdstipStopzettingBeroepsActiviteit": "${
          arbeidsOngevalData.form6TijdstipStopzettingBeroepsActiviteit
        }",
        "form6DatumWerkHervatting": "${
          arbeidsOngevalData.form6DatumWerkHervatting
        }",
        "form6DuurArbeidsOngeschiktheid": "${
          arbeidsOngevalData.form6DuurArbeidsOngeschiktheid
        }",
        "form6BeschermingsMiddelenOpties": [
          ${arbeidsOngevalData.form6BeschermingsMiddelenOpties
            .map(
              (item) => `{
              "id": 0,
              "naam": "${item}"
            }`
            )
            .join(",\n")}
        ],
        "form6Maatregel1Text": "${arbeidsOngevalData.form6Maatregel1Text}",
        "form6Maatregel1Code": "${arbeidsOngevalData.form6Maatregel1Code}",
        "form6Maatregel2Text": "${arbeidsOngevalData.form6Maatregel2Text}",
        "form6Maatregel2Code": "${arbeidsOngevalData.form6Maatregel2Code}",
        "form6Maatregel3Text": "${arbeidsOngevalData.form6Maatregel3Text}",
        "form6Maatregel3Code": "${arbeidsOngevalData.form6Maatregel3Code}"
      }`;
};

export default FormulierData;
