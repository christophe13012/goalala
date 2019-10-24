import axios from "axios";

// const auj = new Date();
// auj.setDate(auj.getDate() - 1);
// const aujISO = auj.toISOString().substring(0, 10);

export function getMatches() {
  return axios.get(
    "http://livescore-api.com/api-client/scores/live.json?key=g76o4OSIJMbcxvgB&secret=z1SM6JIsm48GZvRgDXFILxqvkBHR6YtG"
  );
}

export function getCompetition() {
  return axios.get(
    "https://livescore-api.com/api-client/competitions/list.json?key=g76o4OSIJMbcxvgB&secret=z1SM6JIsm48GZvRgDXFILxqvkBHR6YtG"
  );
}

export function getRecents() {
  return axios.get(
    "https://livescore-api.com/api-client/scores/history.json?key=g76o4OSIJMbcxvgB&secret=z1SM6JIsm48GZvRgDXFILxqvkBHR6YtG&from=" +
      aujISO
  );
}

export function getRecentsByPage(page, date) {
  return axios.get(
    "https://livescore-api.com/api-client/scores/history.json?key=g76o4OSIJMbcxvgB&secret=z1SM6JIsm48GZvRgDXFILxqvkBHR6YtG&from=" +
      date +
      "&page=" +
      page
  );
}

export function getDetailMatch(idMatch) {
  return axios.get(
    "http://livescore-api.com/api-client/scores/events.json?key=g76o4OSIJMbcxvgB&secret=z1SM6JIsm48GZvRgDXFILxqvkBHR6YtG&id=" +
      idMatch
  );
}

export const competitionliste = [
  {
    idcompet: "339",
    pays: "switzerland",
    urlFlag: require("../Images/flags/switzerland.png")
  },
  {
    idcompet: "125",
    pays: "iceland",
    urlFlag: require("../Images/flags/iceland.png")
  },
  {
    idcompet: "309",
    pays: "russia",
    urlFlag: require("../Images/flags/russia.png")
  },
  {
    idcompet: "327",
    pays: "south-africa",
    urlFlag: require("../Images/flags/south-africa.png")
  },
  {
    idcompet: "353",
    pays: "ukraine",
    urlFlag: require("../Images/flags/ukraine.png")
  },
  {
    idcompet: "132",
    pays: "albania",
    urlFlag: require("../Images/flags/albania.png")
  },
  {
    idcompet: "147",
    pays: "denmark",
    urlFlag: require("../Images/flags/denmark.png")
  },
  {
    idcompet: "191",
    pays: "malta",
    urlFlag: require("../Images/flags/malta.png")
  },
  {
    idcompet: "216",
    pays: "ireland",
    urlFlag: require("../Images/flags/ireland.png")
  },
  {
    idcompet: "17",
    pays: "croatia",
    urlFlag: require("../Images/flags/croatia.png")
  },
  {
    idcompet: "44",
    pays: "cyprus",
    urlFlag: require("../Images/flags/cyprus.png")
  },
  {
    idcompet: "72",
    pays: "czech-republic",
    urlFlag: require("../Images/flags/czech-republic.png")
  },
  {
    idcompet: "138",
    pays: "bosnia and herzegovina",
    urlFlag: require("../Images/flags/bosnia-and-herzegovina.png")
  },
  {
    idcompet: "187",
    pays: "lithuania",
    urlFlag: require("../Images/flags/lithuania.png")
  },
  {
    idcompet: "239",
    pays: "armenia",
    urlFlag: require("../Images/flags/armenia.png")
  },
  {
    idcompet: "344",
    pays: "turkey",
    urlFlag: require("../Images/flags/turkey.png")
  },
  {
    idcompet: "209",
    pays: "poland",
    urlFlag: require("../Images/flags/poland.png")
  },
  {
    idcompet: "93",
    pays: "germany",
    urlFlag: require("../Images/flags/germany.png")
  },
  {
    idcompet: "306",
    pays: "qatar",
    urlFlag: require("../Images/flags/qatar.png")
  },
  {
    idcompet: "310",
    pays: "russia",
    urlFlag: require("../Images/flags/russia.png")
  },
  {
    idcompet: "148",
    pays: "denmark",
    urlFlag: require("../Images/flags/denmark.png")
  },
  {
    idcompet: "207",
    pays: "norway",
    urlFlag: require("../Images/flags/norway.png")
  },
  {
    idcompet: "324",
    pays: "slovakia",
    urlFlag: require("../Images/flags/slovakia.png")
  },
  {
    idcompet: "141",
    pays: "croatia",
    urlFlag: require("../Images/flags/croatia.png")
  },
  {
    idcompet: "144",
    pays: "cyprus",
    urlFlag: require("../Images/flags/cyprus.png")
  },
  {
    idcompet: "145",
    pays: "czech-republic",
    urlFlag: require("../Images/flags/czech-republic.png")
  },
  {
    idcompet: "195",
    pays: "montenegro",
    urlFlag: require("../Images/flags/montenegro.png")
  },
  {
    idcompet: "345",
    pays: "turkey",
    urlFlag: require("../Images/flags/turkey.png")
  },
  {
    idcompet: "210",
    pays: "poland",
    urlFlag: require("../Images/flags/poland.png")
  },
  {
    idcompet: "325",
    pays: "slovenia",
    urlFlag: require("../Images/flags/slovenia.png")
  },
  {
    idcompet: "146",
    pays: "czech-republic",
    urlFlag: require("../Images/flags/czech-republic.png")
  },
  {
    idcompet: "346",
    pays: "turkey",
    urlFlag: require("../Images/flags/turkey.png")
  },
  {
    idcompet: "166",
    pays: "germany",
    urlFlag: require("../Images/flags/germany.png")
  },
  {
    idcompet: "58",
    pays: "lithuania",
    urlFlag: require("../Images/flags/lithuania.png")
  },
  {
    idcompet: "242",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "246",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "227",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "228",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "226",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "14",
    pays: "sweden",
    urlFlag: require("../Images/flags/sweden.png")
  },
  {
    idcompet: "366",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "98",
    pays: "mexico",
    urlFlag: require("../Images/flags/mexico.png")
  },
  {
    idcompet: "240",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "241",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "367",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "368",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "173",
    pays: "greece",
    urlFlag: require("../Images/flags/greece.png")
  },
  {
    idcompet: "99",
    pays: "belgium",
    urlFlag: require("../Images/flags/belgium.png")
  },
  {
    idcompet: "134",
    pays: "azerbaijan",
    urlFlag: require("../Images/flags/azerbaijan.png")
  },
  {
    idcompet: "38",
    pays: "morocco",
    urlFlag: require("../Images/flags/morocco.png")
  },
  {
    idcompet: "1",
    pays: "germany",
    urlFlag: require("../Images/flags/germany.png")
  },
  {
    idcompet: "43",
    pays: "austria",
    urlFlag: require("../Images/flags/austria.png")
  },
  {
    idcompet: "222",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "214",
    pays: "portugal",
    urlFlag: require("../Images/flags/portugal.png")
  },
  {
    idcompet: "257",
    pays: "canada",
    urlFlag: require("../Images/flags/canada.png")
  },
  {
    idcompet: "297",
    pays: "new zealand",
    urlFlag: require("../Images/flags/new-zealand.png")
  },
  {
    idcompet: "316",
    pays: "scotland",
    urlFlag: require("../Images/flags/scotland.png")
  },
  {
    idcompet: "338",
    pays: "switzerland",
    urlFlag: require("../Images/flags/switzerland.png")
  },
  {
    idcompet: "89",
    pays: "rwanda",
    urlFlag: require("../Images/flags/rwanda.png")
  },
  {
    idcompet: "369",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "268",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "300",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "223",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "243",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "244",
    pays: null,
    urlFlag: require("../Images/flags/europe.png")
  },
  {
    idcompet: "317",
    pays: "scotland",
    urlFlag: require("../Images/flags/scotland.png")
  },
  {
    idcompet: "77",
    pays: "england",
    urlFlag: require("../Images/flags/england.png")
  },
  {
    idcompet: "370",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "149",
    pays: "england",
    urlFlag: require("../Images/flags/england.png")
  },
  {
    idcompet: "267",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "269",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "224",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "271",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "230",
    pays: "argentina",
    urlFlag: require("../Images/flags/argentina.png")
  },
  {
    idcompet: "116",
    pays: "colombia",
    urlFlag: require("../Images/flags/colombia.png")
  },
  {
    idcompet: "231",
    pays: "argentina",
    urlFlag: require("../Images/flags/argentina.png")
  },
  {
    idcompet: "334",
    pays: "spain",
    urlFlag: require("../Images/flags/spain.png")
  },
  {
    idcompet: "256",
    pays: "brazil",
    urlFlag: require("../Images/flags/brazil.png")
  },
  {
    idcompet: "329",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "117",
    pays: "mexico",
    urlFlag: require("../Images/flags/mexico.png")
  },
  {
    idcompet: "330",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "179",
    pays: "italy",
    urlFlag: require("../Images/flags/italy.png")
  },
  {
    idcompet: "180",
    pays: "italy",
    urlFlag: require("../Images/flags/italy.png")
  },
  {
    idcompet: "225",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "260",
    pays: "chile",
    urlFlag: require("../Images/flags/chile.png")
  },
  {
    idcompet: "262",
    pays: "china",
    urlFlag: require("../Images/flags/china.png")
  },
  {
    idcompet: "272",
    pays: "egypt",
    urlFlag: require("../Images/flags/egypt.png")
  },
  {
    idcompet: "275",
    pays: "fiji",
    urlFlag: require("../Images/flags/fiji.png")
  },
  {
    idcompet: "276",
    pays: "georgia",
    urlFlag: require("../Images/flags/georgia.png")
  },
  {
    idcompet: "285",
    pays: "japan",
    urlFlag: require("../Images/flags/japan.png")
  },
  {
    idcompet: "295",
    pays: "malaysia",
    urlFlag: require("../Images/flags/malaysia.png")
  },
  {
    idcompet: "311",
    pays: "russia",
    urlFlag: require("../Images/flags/russia.png")
  },
  {
    idcompet: "315",
    pays: "saudi-arabia",
    urlFlag: require("../Images/flags/saudi-arabia.png")
  },
  {
    idcompet: "323",
    pays: "singapore",
    urlFlag: require("../Images/flags/singapore.png")
  },
  {
    idcompet: "326",
    pays: "slovenia",
    urlFlag: require("../Images/flags/slovenia.png")
  },
  {
    idcompet: "335",
    pays: "sweden",
    urlFlag: require("../Images/flags/sweden.png")
  },
  {
    idcompet: "340",
    pays: "switzerland",
    urlFlag: require("../Images/flags/switzerland.png")
  },
  {
    idcompet: "342",
    pays: "thailand",
    urlFlag: require("../Images/flags/thailand.png")
  },
  {
    idcompet: "347",
    pays: "turkey",
    urlFlag: require("../Images/flags/turkey.png")
  },
  {
    idcompet: "351",
    pays: "uganda",
    urlFlag: require("../Images/flags/uganda.png")
  },
  {
    idcompet: "356",
    pays: "united arab emirates",
    urlFlag: require("../Images/flags/united-arab-emirates.png")
  },
  {
    idcompet: "106",
    pays: "bosnia and herzegovina",
    urlFlag: require("../Images/flags/bosnia-and-herzegovina.png")
  },
  {
    idcompet: "107",
    pays: "bulgaria",
    urlFlag: require("../Images/flags/bulgaria.png")
  },
  {
    idcompet: "108",
    pays: "czech-republic",
    urlFlag: require("../Images/flags/czech-republic.png")
  },
  {
    idcompet: "109",
    pays: "israel",
    urlFlag: require("../Images/flags/israel.png")
  },
  {
    idcompet: "110",
    pays: "lithuania",
    urlFlag: require("../Images/flags/lithuania.png")
  },
  {
    idcompet: "111",
    pays: "poland",
    urlFlag: require("../Images/flags/poland.png")
  },
  {
    idcompet: "112",
    pays: "romania",
    urlFlag: require("../Images/flags/romania.png")
  },
  {
    idcompet: "113",
    pays: "serbia",
    urlFlag: require("../Images/flags/serbia.png")
  },
  {
    idcompet: "114",
    pays: "slovakia",
    urlFlag: require("../Images/flags/slovakia.png")
  },
  {
    idcompet: "115",
    pays: "ukraine",
    urlFlag: require("../Images/flags/ukraine.png")
  },
  {
    idcompet: "119",
    pays: "salvador",
    urlFlag: require("../Images/flags/salvador.png")
  },
  {
    idcompet: "120",
    pays: "guatemala",
    urlFlag: require("../Images/flags/guatemala.png")
  },
  {
    idcompet: "379",
    pays: "venezuela",
    urlFlag: require("../Images/flags/venezuela.png")
  },
  {
    idcompet: "126",
    pays: "iceland",
    urlFlag: require("../Images/flags/iceland.png")
  },
  {
    idcompet: "128",
    pays: "belarus",
    urlFlag: require("../Images/flags/belarus.png")
  },
  {
    idcompet: "131",
    pays: "albania",
    urlFlag: require("../Images/flags/albania.png")
  },
  {
    idcompet: "388",
    pays: "paraguay",
    urlFlag: require("../Images/flags/paraguay.png")
  },
  {
    idcompet: "135",
    pays: "azerbaijan",
    urlFlag: require("../Images/flags/azerbaijan.png")
  },
  {
    idcompet: "142",
    pays: "croatia",
    urlFlag: require("../Images/flags/croatia.png")
  },
  {
    idcompet: "157",
    pays: "estonia",
    urlFlag: require("../Images/flags/estonia.png")
  },
  {
    idcompet: "159",
    pays: "finland",
    urlFlag: require("../Images/flags/finland.png")
  },
  {
    idcompet: "162",
    pays: "france",
    urlFlag: require("../Images/flags/france.png")
  },
  {
    idcompet: "171",
    pays: "greece",
    urlFlag: require("../Images/flags/greece.png")
  },
  {
    idcompet: "175",
    pays: "hungary",
    urlFlag: require("../Images/flags/hungary.png")
  },
  {
    idcompet: "185",
    pays: "latvia",
    urlFlag: require("../Images/flags/latvia.png")
  },
  {
    idcompet: "188",
    pays: "luxembourg",
    urlFlag: require("../Images/flags/luxembourg.png")
  },
  {
    idcompet: "190",
    pays: "malta",
    urlFlag: require("../Images/flags/malta.png")
  },
  {
    idcompet: "193",
    pays: "moldova",
    urlFlag: require("../Images/flags/moldova.png")
  },
  {
    idcompet: "194",
    pays: "montenegro",
    urlFlag: require("../Images/flags/montenegro.png")
  },
  {
    idcompet: "202",
    pays: "republic-of-macedonia",
    urlFlag: require("../Images/flags/republic-of-macedonia.png")
  },
  {
    idcompet: "206",
    pays: "norway",
    urlFlag: require("../Images/flags/norway.png")
  },
  {
    idcompet: "212",
    pays: "portugal",
    urlFlag: require("../Images/flags/portugal.png")
  },
  {
    idcompet: "101",
    pays: "cyprus",
    urlFlag: require("../Images/flags/cyprus.png")
  },
  {
    idcompet: "102",
    pays: "denmark",
    urlFlag: require("../Images/flags/denmark.png")
  },
  {
    idcompet: "167",
    pays: "germany",
    urlFlag: require("../Images/flags/germany.png")
  },
  {
    idcompet: "288",
    pays: "jordan",
    urlFlag: require("../Images/flags/jordan.png")
  },
  {
    idcompet: "314",
    pays: "saudi-arabia",
    urlFlag: require("../Images/flags/saudi-arabia.png")
  },
  {
    idcompet: "337",
    pays: "sweden",
    urlFlag: require("../Images/flags/sweden.png")
  },
  {
    idcompet: "355",
    pays: "united arab emirates",
    urlFlag: require("../Images/flags/united-arab-emirates.png")
  },
  {
    idcompet: "49",
    pays: "paraguay",
    urlFlag: require("../Images/flags/paraguay.png")
  },
  {
    idcompet: "199",
    pays: "netherlands",
    urlFlag: require("../Images/flags/netherlands.png")
  },
  {
    idcompet: "150",
    pays: "england",
    urlFlag: require("../Images/flags/england.png")
  },
  {
    idcompet: "151",
    pays: "england",
    urlFlag: require("../Images/flags/england.png")
  },
  {
    idcompet: "60",
    pays: "poland",
    urlFlag: require("../Images/flags/poland.png")
  },
  {
    idcompet: "13",
    pays: "norway",
    urlFlag: require("../Images/flags/norway.png")
  },
  {
    idcompet: "196",
    pays: "netherlands",
    urlFlag: require("../Images/flags/netherlands.png")
  },
  {
    idcompet: "32",
    pays: "georgia",
    urlFlag: require("../Images/flags/georgia.png")
  },
  {
    idcompet: "165",
    pays: "georgia",
    urlFlag: require("../Images/flags/georgia.png")
  },
  {
    idcompet: "133",
    pays: "austria",
    urlFlag: require("../Images/flags/austria.png")
  },
  {
    idcompet: "245",
    pays: null,
    urlFlag: require("../Images/flags/europe.png")
  },
  {
    idcompet: "152",
    pays: "england",
    urlFlag: require("../Images/flags/england.png")
  },
  {
    idcompet: "153",
    pays: "england",
    urlFlag: require("../Images/flags/england.png")
  },
  {
    idcompet: "217",
    pays: "ireland",
    urlFlag: require("../Images/flags/ireland.png")
  },
  {
    idcompet: "122",
    pays: "australia",
    urlFlag: require("../Images/flags/australia.png")
  },
  {
    idcompet: "372",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "270",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "362",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "68",
    pays: "belgium",
    urlFlag: require("../Images/flags/belgium.png")
  },
  {
    idcompet: "136",
    pays: "belgium",
    urlFlag: require("../Images/flags/belgium.png")
  },
  {
    idcompet: "71",
    pays: "bulgaria",
    urlFlag: require("../Images/flags/bulgaria.png")
  },
  {
    idcompet: "63",
    pays: "slovakia",
    urlFlag: require("../Images/flags/slovakia.png")
  },
  {
    idcompet: "371",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "172",
    pays: "greece",
    urlFlag: require("../Images/flags/greece.png")
  },
  {
    idcompet: "27",
    pays: "indonesia",
    urlFlag: require("../Images/flags/indonesia.png")
  },
  {
    idcompet: "266",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "291",
    pays: "kenya",
    urlFlag: require("../Images/flags/kenya.png")
  },
  {
    idcompet: "280",
    pays: "iran",
    urlFlag: require("../Images/flags/iran.png")
  },
  {
    idcompet: "67",
    pays: "australia",
    urlFlag: require("../Images/flags/australia.png")
  },
  {
    idcompet: "279",
    pays: "india",
    urlFlag: require("../Images/flags/india.png")
  },
  {
    idcompet: "65",
    pays: "india",
    urlFlag: require("../Images/flags/india.png")
  },
  {
    idcompet: "103",
    pays: "northern ireland",
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "28",
    pays: "japan",
    urlFlag: require("../Images/flags/japan.png")
  },
  {
    idcompet: "283",
    pays: "japan",
    urlFlag: require("../Images/flags/japan.png")
  },
  {
    idcompet: "66",
    pays: "republic of korea",
    urlFlag: require("../Images/flags/south-korea.png")
  },
  {
    idcompet: "308",
    pays: "republic of korea",
    urlFlag: require("../Images/flags/south-korea.png")
  },
  {
    idcompet: "386",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "164",
    pays: "finland",
    urlFlag: require("../Images/flags/finland.png")
  },
  {
    idcompet: "130",
    pays: "albania",
    urlFlag: require("../Images/flags/albania.png")
  },
  {
    idcompet: "373",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "374",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "198",
    pays: "netherlands",
    urlFlag: require("../Images/flags/netherlands.png")
  },
  {
    idcompet: "121",
    pays: "republic of korea",
    urlFlag: require("../Images/flags/south-korea.png")
  },
  {
    idcompet: "3",
    pays: "spain",
    urlFlag: require("../Images/flags/spain.png")
  },
  {
    idcompet: "263",
    pays: "china",
    urlFlag: require("../Images/flags/china.png")
  },
  {
    idcompet: "318",
    pays: "scotland",
    urlFlag: require("../Images/flags/scotland.png")
  },
  {
    idcompet: "82",
    pays: "england",
    urlFlag: require("../Images/flags/england.png")
  },
  {
    idcompet: "319",
    pays: "scotland",
    urlFlag: require("../Images/flags/scotland.png")
  },
  {
    idcompet: "83",
    pays: "england",
    urlFlag: require("../Images/flags/england.png")
  },
  {
    idcompet: "284",
    pays: "japan",
    urlFlag: require("../Images/flags/japan.png")
  },
  {
    idcompet: "320",
    pays: "scotland",
    urlFlag: require("../Images/flags/scotland.png")
  },
  {
    idcompet: "322",
    pays: "singapore",
    urlFlag: require("../Images/flags/singapore.png")
  },
  {
    idcompet: "357",
    pays: "united arab emirates",
    urlFlag: require("../Images/flags/united-arab-emirates.png")
  },
  {
    idcompet: "124",
    pays: "south-africa",
    urlFlag: require("../Images/flags/south-africa.png")
  },
  {
    idcompet: "381",
    pays: "wales",
    urlFlag: require("../Images/flags/wales.png")
  },
  {
    idcompet: "163",
    pays: "france",
    urlFlag: require("../Images/flags/france.png")
  },
  {
    idcompet: "203",
    pays: "northern ireland",
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "213",
    pays: "portugal",
    urlFlag: require("../Images/flags/portugal.png")
  },
  {
    idcompet: "218",
    pays: "ireland",
    urlFlag: require("../Images/flags/ireland.png")
  },
  {
    idcompet: "221",
    pays: "romania",
    urlFlag: require("../Images/flags/romania.png")
  },
  {
    idcompet: "177",
    pays: "israel",
    urlFlag: require("../Images/flags/israel.png")
  },
  {
    idcompet: "61",
    pays: "romania",
    urlFlag: require("../Images/flags/romania.png")
  },
  {
    idcompet: "220",
    pays: "romania",
    urlFlag: require("../Images/flags/romania.png")
  },
  {
    idcompet: "45",
    pays: "mexico",
    urlFlag: require("../Images/flags/mexico.png")
  },
  {
    idcompet: "55",
    pays: "guatemala",
    urlFlag: require("../Images/flags/guatemala.png")
  },
  {
    idcompet: "56",
    pays: "honduras",
    urlFlag: require("../Images/flags/honduras.png")
  },
  {
    idcompet: "73",
    pays: "israel",
    urlFlag: require("../Images/flags/israel.png")
  },
  {
    idcompet: "5",
    pays: "france",
    urlFlag: require("../Images/flags/france.png")
  },
  {
    idcompet: "35",
    pays: "algeria",
    urlFlag: require("../Images/flags/algeria.png")
  },
  {
    idcompet: "84",
    pays: "senegal",
    urlFlag: require("../Images/flags/senegal.png")
  },
  {
    idcompet: "343",
    pays: "tunisia",
    urlFlag: require("../Images/flags/tunisia.png")
  },
  {
    idcompet: "97",
    pays: "france",
    urlFlag: require("../Images/flags/france.png")
  },
  {
    idcompet: "229",
    pays: "algeria",
    urlFlag: require("../Images/flags/algeria.png")
  },
  {
    idcompet: "42",
    pays: "tunisia",
    urlFlag: require("../Images/flags/tunisia.png")
  },
  {
    idcompet: "304",
    pays: "panama",
    urlFlag: require("../Images/flags/panama.png")
  },
  {
    idcompet: "298",
    pays: "new zealand",
    urlFlag: require("../Images/flags/new-zealand.png")
  },
  {
    idcompet: "76",
    pays: "usa",
    urlFlag: require("../Images/flags/united-states-of-america.png")
  },
  {
    idcompet: "382",
    pays: "usa",
    urlFlag: require("../Images/flags/united-states-of-america.png")
  },
  {
    idcompet: "161",
    pays: "france",
    urlFlag: require("../Images/flags/france.png")
  },
  {
    idcompet: "12",
    pays: "luxembourg",
    urlFlag: require("../Images/flags/luxembourg.png")
  },
  {
    idcompet: "59",
    pays: "moldova",
    urlFlag: require("../Images/flags/moldova.png")
  },
  {
    idcompet: "154",
    pays: "england",
    urlFlag: require("../Images/flags/england.png")
  },
  {
    idcompet: "155",
    pays: "england",
    urlFlag: require("../Images/flags/england.png")
  },
  {
    idcompet: "249",
    pays: "australia",
    urlFlag: require("../Images/flags/australia.png")
  },
  {
    idcompet: "174",
    pays: "hungary",
    urlFlag: require("../Images/flags/hungary.png")
  },
  {
    idcompet: "250",
    pays: "australia",
    urlFlag: require("../Images/flags/australia.png")
  },
  {
    idcompet: "78",
    pays: "nigeria",
    urlFlag: require("../Images/flags/nigeria.png")
  },
  {
    idcompet: "204",
    pays: "norway",
    urlFlag: require("../Images/flags/norway.png")
  },
  {
    idcompet: "100",
    pays: "austria",
    urlFlag: require("../Images/flags/austria.png")
  },
  {
    idcompet: "385",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "19",
    pays: "hungary",
    urlFlag: require("../Images/flags/hungary.png")
  },
  {
    idcompet: "255",
    pays: "brazil",
    urlFlag: require("../Images/flags/brazil.png")
  },
  {
    idcompet: "302",
    pays: "pakistan",
    urlFlag: require("../Images/flags/pakistan.png")
  },
  {
    idcompet: "16",
    pays: "belarus",
    urlFlag: require("../Images/flags/belarus.png")
  },
  {
    idcompet: "11",
    pays: "ireland",
    urlFlag: require("../Images/flags/ireland.png")
  },
  {
    idcompet: "2",
    pays: "england",
    urlFlag: require("../Images/flags/england.png")
  },
  {
    idcompet: "258",
    pays: "canada",
    urlFlag: require("../Images/flags/canada.png")
  },
  {
    idcompet: "7",
    pays: "russia",
    urlFlag: require("../Images/flags/russia.png")
  },
  {
    idcompet: "273",
    pays: "ethiopia",
    urlFlag: require("../Images/flags/ethiopia.png")
  },
  {
    idcompet: "278",
    pays: "hong kong",
    urlFlag: require("../Images/flags/hong-kong.png")
  },
  {
    idcompet: "281",
    pays: "iraq",
    urlFlag: require("../Images/flags/iraq.png")
  },
  {
    idcompet: "282",
    pays: "jamaica",
    urlFlag: require("../Images/flags/jamaica.png")
  },
  {
    idcompet: "30",
    pays: "thailand",
    urlFlag: require("../Images/flags/thailand.png")
  },
  {
    idcompet: "31",
    pays: "azerbaijan",
    urlFlag: require("../Images/flags/azerbaijan.png")
  },
  {
    idcompet: "287",
    pays: "jordan",
    urlFlag: require("../Images/flags/jordan.png")
  },
  {
    idcompet: "33",
    pays: "kuwait",
    urlFlag: require("../Images/flags/kuwait.png")
  },
  {
    idcompet: "36",
    pays: "egypt",
    urlFlag: require("../Images/flags/egypt.png")
  },
  {
    idcompet: "292",
    pays: "lebanon",
    urlFlag: require("../Images/flags/lebanon.png")
  },
  {
    idcompet: "37",
    pays: "kenya",
    urlFlag: require("../Images/flags/kenya.png")
  },
  {
    idcompet: "294",
    pays: "malaysia",
    urlFlag: require("../Images/flags/malaysia.png")
  },
  {
    idcompet: "41",
    pays: "south-africa",
    urlFlag: require("../Images/flags/south-africa.png")
  },
  {
    idcompet: "313",
    pays: "saudi-arabia",
    urlFlag: require("../Images/flags/saudi-arabia.png")
  },
  {
    idcompet: "64",
    pays: "ukraine",
    urlFlag: require("../Images/flags/ukraine.png")
  },
  {
    idcompet: "74",
    pays: "wales",
    urlFlag: require("../Images/flags/wales.png")
  },
  {
    idcompet: "80",
    pays: "tanzania",
    urlFlag: require("../Images/flags/tanzania.png")
  },
  {
    idcompet: "341",
    pays: "syria",
    urlFlag: require("../Images/flags/syria.png")
  },
  {
    idcompet: "86",
    pays: "ghana",
    urlFlag: require("../Images/flags/ghana.png")
  },
  {
    idcompet: "88",
    pays: "sudan",
    urlFlag: require("../Images/flags/sudan.png")
  },
  {
    idcompet: "90",
    pays: "namibia",
    urlFlag: require("../Images/flags/namibia.png")
  },
  {
    idcompet: "91",
    pays: "zambia",
    urlFlag: require("../Images/flags/zambia.png")
  },
  {
    idcompet: "183",
    pays: "kazakhstan",
    urlFlag: require("../Images/flags/kazakhstan.png")
  },
  {
    idcompet: "189",
    pays: "malta",
    urlFlag: require("../Images/flags/malta.png")
  },
  {
    idcompet: "238",
    pays: "armenia",
    urlFlag: require("../Images/flags/armenia.png")
  },
  {
    idcompet: "375",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "85",
    pays: "zimbabwe",
    urlFlag: require("../Images/flags/zimbabwe.png")
  },
  {
    idcompet: "252",
    pays: "bahrain",
    urlFlag: require("../Images/flags/bahrain.png")
  },
  {
    idcompet: "69",
    pays: "northern ireland",
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "75",
    pays: "scotland",
    urlFlag: require("../Images/flags/scotland.png")
  },
  {
    idcompet: "70",
    pays: "bosnia and herzegovina",
    urlFlag: require("../Images/flags/bosnia-and-herzegovina.png")
  },
  {
    idcompet: "18",
    pays: "estonia",
    urlFlag: require("../Images/flags/estonia.png")
  },
  {
    idcompet: "8",
    pays: "portugal",
    urlFlag: require("../Images/flags/portugal.png")
  },
  {
    idcompet: "51",
    pays: "colombia",
    urlFlag: require("../Images/flags/colombia.png")
  },
  {
    idcompet: "259",
    pays: "chile",
    urlFlag: require("../Images/flags/chile.png")
  },
  {
    idcompet: "265",
    pays: "colombia",
    urlFlag: require("../Images/flags/colombia.png")
  },
  {
    idcompet: "233",
    pays: "argentina",
    urlFlag: require("../Images/flags/argentina.png")
  },
  {
    idcompet: "96",
    pays: "argentina",
    urlFlag: require("../Images/flags/argentina.png")
  },
  {
    idcompet: "234",
    pays: "argentina",
    urlFlag: require("../Images/flags/argentina.png")
  },
  {
    idcompet: "235",
    pays: "argentina",
    urlFlag: require("../Images/flags/argentina.png")
  },
  {
    idcompet: "277",
    pays: "guatemala",
    urlFlag: require("../Images/flags/guatemala.png")
  },
  {
    idcompet: "23",
    pays: "argentina",
    urlFlag: require("../Images/flags/argentina.png")
  },
  {
    idcompet: "25",
    pays: "chile",
    urlFlag: require("../Images/flags/chile.png")
  },
  {
    idcompet: "299",
    pays: "nicaragua",
    urlFlag: require("../Images/flags/nicaragua.png")
  },
  {
    idcompet: "46",
    pays: "venezuela",
    urlFlag: require("../Images/flags/venezuela.png")
  },
  {
    idcompet: "47",
    pays: "peru",
    urlFlag: require("../Images/flags/peru.png")
  },
  {
    idcompet: "48",
    pays: "uruguay",
    urlFlag: require("../Images/flags/uruguay.png")
  },
  {
    idcompet: "52",
    pays: "bolivia",
    urlFlag: require("../Images/flags/bolivia.png")
  },
  {
    idcompet: "53",
    pays: "costa rica",
    urlFlag: require("../Images/flags/costa-rica.png")
  },
  {
    idcompet: "54",
    pays: "salvador",
    urlFlag: require("../Images/flags/salvador.png")
  },
  {
    idcompet: "34",
    pays: "iran",
    urlFlag: require("../Images/flags/iran.png")
  },
  {
    idcompet: "301",
    pays: "oman",
    urlFlag: require("../Images/flags/oman.png")
  },
  {
    idcompet: "22",
    pays: "slovenia",
    urlFlag: require("../Images/flags/slovenia.png")
  },
  {
    idcompet: "321",
    pays: "serbia",
    urlFlag: require("../Images/flags/serbia.png")
  },
  {
    idcompet: "200",
    pays: "republic-of-macedonia",
    urlFlag: require("../Images/flags/republic-of-macedonia.png")
  },
  {
    idcompet: "305",
    pays: "qatar",
    urlFlag: require("../Images/flags/qatar.png")
  },
  {
    idcompet: "331",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "168",
    pays: "germany",
    urlFlag: require("../Images/flags/germany.png")
  },
  {
    idcompet: "247",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "105",
    pays: "scotland",
    urlFlag: require("../Images/flags/scotland.png")
  },
  {
    idcompet: "140",
    pays: "bulgaria",
    urlFlag: require("../Images/flags/bulgaria.png")
  },
  {
    idcompet: "332",
    pays: "spain",
    urlFlag: require("../Images/flags/spain.png")
  },
  {
    idcompet: "79",
    pays: "spain",
    urlFlag: require("../Images/flags/spain.png")
  },
  {
    idcompet: "92",
    pays: "portugal",
    urlFlag: require("../Images/flags/portugal.png")
  },
  {
    idcompet: "4",
    pays: "italy",
    urlFlag: require("../Images/flags/italy.png")
  },
  {
    idcompet: "24",
    pays: "brazil",
    urlFlag: require("../Images/flags/brazil.png")
  },
  {
    idcompet: "50",
    pays: "ecuador",
    urlFlag: require("../Images/flags/ecuador.png")
  },
  {
    idcompet: "87",
    pays: "italy",
    urlFlag: require("../Images/flags/italy.png")
  },
  {
    idcompet: "95",
    pays: "brazil",
    urlFlag: require("../Images/flags/brazil.png")
  },
  {
    idcompet: "181",
    pays: "italy",
    urlFlag: require("../Images/flags/italy.png")
  },
  {
    idcompet: "253",
    pays: "brazil",
    urlFlag: require("../Images/flags/brazil.png")
  },
  {
    idcompet: "182",
    pays: "italy",
    urlFlag: require("../Images/flags/italy.png")
  },
  {
    idcompet: "254",
    pays: "brazil",
    urlFlag: require("../Images/flags/brazil.png")
  },
  {
    idcompet: "29",
    pays: "singapore",
    urlFlag: require("../Images/flags/singapore.png")
  },
  {
    idcompet: "123",
    pays: "south-africa",
    urlFlag: require("../Images/flags/south-africa.png")
  },
  {
    idcompet: "248",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "307",
    pays: "qatar",
    urlFlag: require("../Images/flags/qatar.png")
  },
  {
    idcompet: "261",
    pays: "chile",
    urlFlag: require("../Images/flags/chile.png")
  },
  {
    idcompet: "264",
    pays: "china",
    urlFlag: require("../Images/flags/china.png")
  },
  {
    idcompet: "286",
    pays: "japan",
    urlFlag: require("../Images/flags/japan.png")
  },
  {
    idcompet: "289",
    pays: "kenya",
    urlFlag: require("../Images/flags/kenya.png")
  },
  {
    idcompet: "312",
    pays: "russia",
    urlFlag: require("../Images/flags/russia.png")
  },
  {
    idcompet: "333",
    pays: "spain",
    urlFlag: require("../Images/flags/spain.png")
  },
  {
    idcompet: "348",
    pays: "turkey",
    urlFlag: require("../Images/flags/turkey.png")
  },
  {
    idcompet: "349",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "352",
    pays: "ukraine",
    urlFlag: require("../Images/flags/ukraine.png")
  },
  {
    idcompet: "127",
    pays: "iceland",
    urlFlag: require("../Images/flags/iceland.png")
  },
  {
    idcompet: "129",
    pays: "belarus",
    urlFlag: require("../Images/flags/belarus.png")
  },
  {
    idcompet: "137",
    pays: "belgium",
    urlFlag: require("../Images/flags/belgium.png")
  },
  {
    idcompet: "139",
    pays: "bulgaria",
    urlFlag: require("../Images/flags/bulgaria.png")
  },
  {
    idcompet: "143",
    pays: "cyprus",
    urlFlag: require("../Images/flags/cyprus.png")
  },
  {
    idcompet: "156",
    pays: "estonia",
    urlFlag: require("../Images/flags/estonia.png")
  },
  {
    idcompet: "160",
    pays: "france",
    urlFlag: require("../Images/flags/france.png")
  },
  {
    idcompet: "169",
    pays: "germany",
    urlFlag: require("../Images/flags/germany.png")
  },
  {
    idcompet: "176",
    pays: "hungary",
    urlFlag: require("../Images/flags/hungary.png")
  },
  {
    idcompet: "178",
    pays: "italy",
    urlFlag: require("../Images/flags/italy.png")
  },
  {
    idcompet: "186",
    pays: "lithuania",
    urlFlag: require("../Images/flags/lithuania.png")
  },
  {
    idcompet: "192",
    pays: "moldova",
    urlFlag: require("../Images/flags/moldova.png")
  },
  {
    idcompet: "197",
    pays: "netherlands",
    urlFlag: require("../Images/flags/netherlands.png")
  },
  {
    idcompet: "205",
    pays: "norway",
    urlFlag: require("../Images/flags/norway.png")
  },
  {
    idcompet: "208",
    pays: "poland",
    urlFlag: require("../Images/flags/poland.png")
  },
  {
    idcompet: "211",
    pays: "portugal",
    urlFlag: require("../Images/flags/portugal.png")
  },
  {
    idcompet: "215",
    pays: "ireland",
    urlFlag: require("../Images/flags/ireland.png")
  },
  {
    idcompet: "219",
    pays: "romania",
    urlFlag: require("../Images/flags/romania.png")
  },
  {
    idcompet: "236",
    pays: "argentina",
    urlFlag: require("../Images/flags/argentina.png")
  },
  {
    idcompet: "328",
    pays: "south-africa",
    urlFlag: require("../Images/flags/south-africa.png")
  },
  {
    idcompet: "9",
    pays: "greece",
    urlFlag: require("../Images/flags/greece.png")
  },
  {
    idcompet: "15",
    pays: "switzerland",
    urlFlag: require("../Images/flags/switzerland.png")
  },
  {
    idcompet: "26",
    pays: "china",
    urlFlag: require("../Images/flags/china.png")
  },
  {
    idcompet: "290",
    pays: "kenya",
    urlFlag: require("../Images/flags/kenya.png")
  },
  {
    idcompet: "293",
    pays: "malaysia",
    urlFlag: require("../Images/flags/malaysia.png")
  },
  {
    idcompet: "81",
    pays: "uganda",
    urlFlag: require("../Images/flags/uganda.png")
  },
  {
    idcompet: "94",
    pays: "malawi",
    urlFlag: require("../Images/flags/malawi.png")
  },
  {
    idcompet: "6",
    pays: "turkey",
    urlFlag: require("../Images/flags/turkey.png")
  },
  {
    idcompet: "62",
    pays: "serbia",
    urlFlag: require("../Images/flags/serbia.png")
  },
  {
    idcompet: "296",
    pays: "mexico",
    urlFlag: require("../Images/flags/mexico.png")
  },
  {
    idcompet: "336",
    pays: "sweden",
    urlFlag: require("../Images/flags/sweden.png")
  },
  {
    idcompet: "40",
    pays: "denmark",
    urlFlag: require("../Images/flags/denmark.png")
  },
  {
    idcompet: "184",
    pays: "kosovo",
    urlFlag: require("../Images/flags/kosovo.png")
  },
  {
    idcompet: "376",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "21",
    pays: "montenegro",
    urlFlag: require("../Images/flags/montenegro.png")
  },
  {
    idcompet: "170",
    pays: "germany",
    urlFlag: require("../Images/flags/germany.png")
  },
  {
    idcompet: "232",
    pays: "argentina",
    urlFlag: require("../Images/flags/argentina.png")
  },
  {
    idcompet: "237",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "377",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "354",
    pays: "united arab emirates",
    urlFlag: require("../Images/flags/united-arab-emirates.png")
  },
  {
    idcompet: "387",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "274",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "350",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "378",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "383",
    pays: "usa",
    urlFlag: require("../Images/flags/united-states-of-america.png")
  },
  {
    idcompet: "10",
    pays: "iceland",
    urlFlag: require("../Images/flags/iceland.png")
  },
  {
    idcompet: "118",
    pays: "usa",
    urlFlag: require("../Images/flags/united-states-of-america.png")
  },
  {
    idcompet: "384",
    pays: "usa",
    urlFlag: require("../Images/flags/united-states-of-america.png")
  },
  {
    idcompet: "39",
    pays: "vietnam",
    urlFlag: require("../Images/flags/vietnam.png")
  },
  {
    idcompet: "380",
    pays: "vietnam",
    urlFlag: require("../Images/flags/vietnam.png")
  },
  {
    idcompet: "57",
    pays: "finland",
    urlFlag: require("../Images/flags/finland.png")
  },
  {
    idcompet: "251",
    pays: "australia",
    urlFlag: require("../Images/flags/australia.png")
  },
  {
    idcompet: "20",
    pays: "latvia",
    urlFlag: require("../Images/flags/latvia.png")
  },
  {
    idcompet: "201",
    pays: "republic-of-macedonia",
    urlFlag: require("../Images/flags/republic-of-macedonia.png")
  },
  {
    idcompet: "104",
    pays: "wales",
    urlFlag: require("../Images/flags/wales.png")
  },
  {
    idcompet: "303",
    pays: "palestine",
    urlFlag: require("../Images/flags/palestine.png")
  },
  {
    idcompet: "358",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "359",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "360",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "361",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "365",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "364",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "363",
    pays: null,
    urlFlag: require("../Images/flags/null.png")
  },
  {
    idcompet: "158",
    pays: "finland",
    urlFlag: require("../Images/flags/finland.png")
  }
];
