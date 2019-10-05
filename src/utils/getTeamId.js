const getTeamId = name => {
  switch (name) {
    //italy
    case "inter" || "inter milan" || "intermilan":
      return 8636;
    case "juventus":
      return 9885;
    case "atalanta":
      return 9885;
    case "napoli":
      return 8524;
    case "roma":
      return 8686;
    case "lazio":
      return 8543;
    case "cagliari":
      return 8529;
    case "torino":
      return 9804;
    case "parma":
      return 674792;
    case "fiorentina":
      return 8535;
    case "bologna":
      return 9857;
    case "udinese":
      return 8600;
    case "sassuolo":
      return 7943;
    case "hellas verona" || "verona":
      return 9876;
    case "brescia":
      return 9858;
    case "milan" || "ac milan":
      return 8564;
    case "lecce":
      return 9888;
    case "genoa":
      return 10233;
    case "spal":
      return 8547;
    case "sampdoria":
      return 9882;
    //spain
    case "real madrid" || "real":
      return 8633;
    case "granada cf":
      return 7878;
    case "atletico madrid" || "atletico":
      return 9906;
    case "barcelona" || "fc barcelona":
      return 8634;
    case "real sociedad" || "sociedad":
      return 8560;
    case "sevilla":
      return 8302;
    case "athletic club":
      return 8315;
    case "villarreal":
      return 10205;
    case "eibar":
      return 8372;
    case "valencia":
      return 10267;
    case "real valladolid" || "valladolid":
      return 10281;
    case "real betis" || "betis":
      return 8603;
    case "levante":
      return 8581;
    case "osasuna":
      return 8371;
    case "deportivo alavés" || "deportivo alaves" || "deportivo":
      return 9866;
    case "getafe":
      return 8305;
    case "celta de vigo" || "celta" || "celta vigo":
      return 9910;
    case "espanyol":
      return 8558;
    case "mallorca":
      return 8661;
    case "leganes":
      return 7854;
    //England
    case "liverpool":
      return 8650;
    case "manchester city" || "city":
      return 8456;
    case "leicester city" || "leicester":
      return 8197;
    case "arsenal":
      return 9825;
    case "west ham united" || "west ham":
      return 8654;
    case "tottenham hotspur" || "tottenham":
      return 8586;
    case "chelsea":
      return 8455;
    case "afc bournemouth" || "bournemouth":
      return 8678;
    case "crystal palace":
      return 9826;
    case "manchester united" || "manchester":
      return 10260;
    case "burnley":
      return 8191;
    case "sheffield united":
      return 8657;
    case "wolverhampton" || "wolves":
      return 8602;
    case "southampton":
      return 8466;
    case "everton fc":
      return 8668;
    case "brighton & hove albion" || "brighton" || "brighton & hove albion fc":
      return 10204;
    case "norwich city":
      return 9850;
    case "aston villa":
      return 10252;
    case "newcastle united":
      return 10261;
    case "watford":
      return 9817;
    //Germany
    case "fc bayern munich" || "bayern" || "bayern munchen":
      return 9823;
    case "rb leipzig" || "leipzig":
      return 178475;
    case "freiburg":
      return 8358;
    case "schalke 04" || "schalke":
      return 10189;
    case "borussia vfl monchengladbach" || "borussia vfl mönchengladbach":
      return 9788;
    case "bayer leverkusen" || "leverkusen":
      return 8178;
    case "wolfsburg":
      return 8721;
    case "borussia dortmund" || "dortmund":
      return 9789;
    case "eintracht frankfurt":
      return 9810;
    case "hertha bsc" || "hertha":
      return 8177;
    case "werder bremen":
      return 8697;
    case "hoffenheim":
      return 8226;
    case "augsburg":
      return 8406;
    case "fortuna düsseldorf":
      return 8194;
    case "union berlin":
      return 8149;
    case "fsv mainz" || "mainz":
      return 9905;
    case "köln" || "koln":
      return 8722;
    case "paderborn":
      return 8460;
    default:
      return null;
  }
};
export default getTeamId;
