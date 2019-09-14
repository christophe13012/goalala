import axios from "axios";

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

export function getDetailMatch(idMatch) {
  return axios.get(
    "http://livescore-api.com/api-client/scores/events.json?key=g76o4OSIJMbcxvgB&secret=z1SM6JIsm48GZvRgDXFILxqvkBHR6YtG&id=" +
      idMatch
  );
}

let competList = [
  {
    idcompet: "339",
    idPays: "9",
    nomPays: "Switzerland",
    urlImage: "Switzerland"
  },
  {
    idcompet: "125",
    idPays: "33",
    nomPays: "Iceland",
    urlImage: "Iceland"
  },
  {
    idcompet: "309",
    idPays: "12",
    nomPays: "Russia",
    urlImage: "Russia"
  },
  {
    idcompet: "327",
    idPays: "69",
    nomPays: "south-africa",
    urlImage: "south-africa"
  },
  {
    idcompet: "353",
    idPays: "13",
    nomPays: "Ukraine",
    urlImage: "Ukraine"
  },
  {
    idcompet: "132",
    idPays: "102",
    nomPays: "Albania",
    urlImage: "Albania"
  },
  {
    idcompet: "147",
    idPays: "5",
    nomPays: "Denmark",
    urlImage: "Denmark"
  },
  {
    idcompet: "191",
    idPays: "120",
    nomPays: "Malta",
    urlImage: "Malta"
  },
  {
    idcompet: "216",
    idPays: "23",
    nomPays: "Ireland",
    urlImage: "Ireland"
  },
  {
    idcompet: "17",
    idPays: "54",
    nomPays: "Croatia",
    urlImage: "Croatia"
  },
  {
    idcompet: "44",
    idPays: "49",
    nomPays: "Cyprus",
    urlImage: "Cyprus"
  },
  {
    idcompet: "72",
    idPays: "11",
    nomPays: "Czech-republic",
    urlImage: "Czech-republic"
  },
  {
    idcompet: "138",
    idPays: "39",
    nomPays: "Bosnia and Herzegovina",
    urlImage: "Bosnia and Herzegovina"
  },
  {
    idcompet: "187",
    idPays: "68",
    nomPays: "Lithuania",
    urlImage: "Lithuania"
  },
  {
    idcompet: "239",
    idPays: "190",
    nomPays: "Armenia",
    urlImage: "Armenia"
  },
  {
    idcompet: "344",
    idPays: "48",
    nomPays: "Turkey",
    urlImage: "Turkey"
  },
  {
    idcompet: "209",
    idPays: "14",
    nomPays: "Poland",
    urlImage: "Poland"
  },
  {
    idcompet: "93",
    idPays: "1",
    nomPays: "Germany",
    urlImage: "Germany"
  },
  {
    idcompet: "306",
    idPays: "112",
    nomPays: "Qatar",
    urlImage: "Qatar"
  },
  {
    idcompet: "310",
    idPays: "12",
    nomPays: "Russia",
    urlImage: "Russia"
  },
  {
    idcompet: "148",
    idPays: "5",
    nomPays: "Denmark",
    urlImage: "Denmark"
  },
  {
    idcompet: "207",
    idPays: "6",
    nomPays: "Norway",
    urlImage: "Norway"
  },
  {
    idcompet: "324",
    idPays: "53",
    nomPays: "Slovakia",
    urlImage: "Slovakia"
  },
  {
    idcompet: "141",
    idPays: "54",
    nomPays: "Croatia",
    urlImage: "Croatia"
  },
  {
    idcompet: "144",
    idPays: "49",
    nomPays: "Cyprus",
    urlImage: "Cyprus"
  },
  {
    idcompet: "145",
    idPays: "11",
    nomPays: "Czech-republic",
    urlImage: "Czech-republic"
  },
  {
    idcompet: "195",
    idPays: "40",
    nomPays: "Montenegro",
    urlImage: "Montenegro"
  },
  {
    idcompet: "345",
    idPays: "48",
    nomPays: "Turkey",
    urlImage: "Turkey"
  },
  {
    idcompet: "210",
    idPays: "14",
    nomPays: "Poland",
    urlImage: "Poland"
  },
  {
    idcompet: "325",
    idPays: "34",
    nomPays: "Slovenia",
    urlImage: "Slovenia"
  },
  {
    idcompet: "146",
    idPays: "11",
    nomPays: "Czech-republic",
    urlImage: "Czech-republic"
  },
  {
    idcompet: "346",
    idPays: "48",
    nomPays: "Turkey",
    urlImage: "Turkey"
  },
  {
    idcompet: "166",
    idPays: "1",
    nomPays: "Germany",
    urlImage: "Germany"
  },
  {
    idcompet: "58",
    idPays: "68",
    nomPays: "Lithuania",
    urlImage: "Lithuania"
  },
  {
    idcompet: "242",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "246",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "227",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "228",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "226",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "14",
    idPays: "7",
    nomPays: "Sweden",
    urlImage: "Sweden"
  },
  {
    idcompet: "366",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "98",
    idPays: "57",
    nomPays: "Mexico",
    urlImage: "Mexico"
  },
  {
    idcompet: "240",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "241",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "367",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "368",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "173",
    idPays: "78",
    nomPays: "Greece",
    urlImage: "Greece"
  },
  {
    idcompet: "99",
    idPays: "2",
    nomPays: "Belgium",
    urlImage: "Belgium"
  },
  {
    idcompet: "134",
    idPays: "28",
    nomPays: "Azerbaijan",
    urlImage: "Azerbaijan"
  },
  {
    idcompet: "38",
    idPays: "81",
    nomPays: "Morocco",
    urlImage: "Morocco"
  },
  {
    idcompet: "1",
    idPays: "1",
    nomPays: "Germany",
    urlImage: "Germany"
  },
  {
    idcompet: "43",
    idPays: "8",
    nomPays: "Austria",
    urlImage: "Austria"
  },
  {
    idcompet: "222",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "214",
    idPays: "32",
    nomPays: "Portugal",
    urlImage: "Portugal"
  },
  {
    idcompet: "257",
    idPays: "119",
    nomPays: "Canada",
    urlImage: "Canada"
  },
  {
    idcompet: "297",
    idPays: "114",
    nomPays: "New Zealand",
    urlImage: "New Zealand"
  },
  {
    idcompet: "316",
    idPays: "3",
    nomPays: "Scotland",
    urlImage: "Scotland"
  },
  {
    idcompet: "338",
    idPays: "9",
    nomPays: "Switzerland",
    urlImage: "Switzerland"
  },
  {
    idcompet: "89",
    idPays: "97",
    nomPays: "Rwanda",
    urlImage: "Rwanda"
  },
  {
    idcompet: "369",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "268",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "300",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "223",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "243",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "244",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "317",
    idPays: "3",
    nomPays: "Scotland",
    urlImage: "Scotland"
  },
  {
    idcompet: "77",
    idPays: "19",
    nomPays: "England",
    urlImage: "England"
  },
  {
    idcompet: "370",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "149",
    idPays: "19",
    nomPays: "England",
    urlImage: "England"
  },
  {
    idcompet: "267",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "269",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "224",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "271",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "230",
    idPays: "65",
    nomPays: "Argentina",
    urlImage: "Argentina"
  },
  {
    idcompet: "116",
    idPays: "61",
    nomPays: "Colombia",
    urlImage: "Colombia"
  },
  {
    idcompet: "231",
    idPays: "65",
    nomPays: "Argentina",
    urlImage: "Argentina"
  },
  {
    idcompet: "334",
    idPays: "43",
    nomPays: "Spain",
    urlImage: "Spain"
  },
  {
    idcompet: "256",
    idPays: "16",
    nomPays: "Brazil",
    urlImage: "Brazil"
  },
  {
    idcompet: "329",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "117",
    idPays: "57",
    nomPays: "Mexico",
    urlImage: "Mexico"
  },
  {
    idcompet: "330",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "179",
    idPays: "47",
    nomPays: "Italy",
    urlImage: "Italy"
  },
  {
    idcompet: "180",
    idPays: "47",
    nomPays: "Italy",
    urlImage: "Italy"
  },
  {
    idcompet: "225",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "260",
    idPays: "41",
    nomPays: "Chile",
    urlImage: "Chile"
  },
  {
    idcompet: "262",
    idPays: "26",
    nomPays: "China",
    urlImage: "China"
  },
  {
    idcompet: "272",
    idPays: "74",
    nomPays: "Egypt",
    urlImage: "Egypt"
  },
  {
    idcompet: "275",
    idPays: "105",
    nomPays: "Fiji",
    urlImage: "Fiji"
  },
  {
    idcompet: "276",
    idPays: "17",
    nomPays: "Georgia",
    urlImage: "Georgia"
  },
  {
    idcompet: "285",
    idPays: "72",
    nomPays: "Japan",
    urlImage: "Japan"
  },
  {
    idcompet: "295",
    idPays: "96",
    nomPays: "Malaysia",
    urlImage: "Malaysia"
  },
  {
    idcompet: "311",
    idPays: "12",
    nomPays: "Russia",
    urlImage: "Russia"
  },
  {
    idcompet: "315",
    idPays: "75",
    nomPays: "saudi-arabia",
    urlImage: "saudi-arabia"
  },
  {
    idcompet: "323",
    idPays: "73",
    nomPays: "Singapore",
    urlImage: "Singapore"
  },
  {
    idcompet: "326",
    idPays: "34",
    nomPays: "Slovenia",
    urlImage: "Slovenia"
  },
  {
    idcompet: "335",
    idPays: "7",
    nomPays: "Sweden",
    urlImage: "Sweden"
  },
  {
    idcompet: "340",
    idPays: "9",
    nomPays: "Switzerland",
    urlImage: "Switzerland"
  },
  {
    idcompet: "342",
    idPays: "27",
    nomPays: "Thailand",
    urlImage: "Thailand"
  },
  {
    idcompet: "347",
    idPays: "48",
    nomPays: "Turkey",
    urlImage: "Turkey"
  },
  {
    idcompet: "351",
    idPays: "98",
    nomPays: "Uganda",
    urlImage: "Uganda"
  },
  {
    idcompet: "356",
    idPays: "76",
    nomPays: "United Arab Emirates",
    urlImage: "United Arab Emirates"
  },
  {
    idcompet: "106",
    idPays: "39",
    nomPays: "Bosnia and Herzegovina",
    urlImage: "Bosnia and Herzegovina"
  },
  {
    idcompet: "107",
    idPays: "38",
    nomPays: "Bulgaria",
    urlImage: "Bulgaria"
  },
  {
    idcompet: "108",
    idPays: "11",
    nomPays: "Czech-republic",
    urlImage: "Czech-republic"
  },
  {
    idcompet: "109",
    idPays: "55",
    nomPays: "Israel",
    urlImage: "Israel"
  },
  {
    idcompet: "110",
    idPays: "68",
    nomPays: "Lithuania",
    urlImage: "Lithuania"
  },
  {
    idcompet: "111",
    idPays: "14",
    nomPays: "Poland",
    urlImage: "Poland"
  },
  {
    idcompet: "112",
    idPays: "36",
    nomPays: "Romania",
    urlImage: "Romania"
  },
  {
    idcompet: "113",
    idPays: "50",
    nomPays: "Serbia",
    urlImage: "Serbia"
  },
  {
    idcompet: "114",
    idPays: "53",
    nomPays: "Slovakia",
    urlImage: "Slovakia"
  },
  {
    idcompet: "115",
    idPays: "13",
    nomPays: "Ukraine",
    urlImage: "Ukraine"
  },
  {
    idcompet: "119",
    idPays: "63",
    nomPays: "salvador",
    urlImage: "salvador"
  },
  {
    idcompet: "120",
    idPays: "59",
    nomPays: "Guatemala",
    urlImage: "Guatemala"
  },
  {
    idcompet: "379",
    idPays: "45",
    nomPays: "Venezuela",
    urlImage: "Venezuela"
  },
  {
    idcompet: "126",
    idPays: "33",
    nomPays: "Iceland",
    urlImage: "Iceland"
  },
  {
    idcompet: "128",
    idPays: "15",
    nomPays: "Belarus",
    urlImage: "Belarus"
  },
  {
    idcompet: "131",
    idPays: "102",
    nomPays: "Albania",
    urlImage: "Albania"
  },
  {
    idcompet: "388",
    idPays: "62",
    nomPays: "Paraguay",
    urlImage: "Paraguay"
  },
  {
    idcompet: "135",
    idPays: "28",
    nomPays: "Azerbaijan",
    urlImage: "Azerbaijan"
  },
  {
    idcompet: "142",
    idPays: "54",
    nomPays: "Croatia",
    urlImage: "Croatia"
  },
  {
    idcompet: "157",
    idPays: "25",
    nomPays: "Estonia",
    urlImage: "Estonia"
  },
  {
    idcompet: "159",
    idPays: "22",
    nomPays: "Finland",
    urlImage: "Finland"
  },
  {
    idcompet: "162",
    idPays: "21",
    nomPays: "France",
    urlImage: "France"
  },
  {
    idcompet: "171",
    idPays: "78",
    nomPays: "Greece",
    urlImage: "Greece"
  },
  {
    idcompet: "175",
    idPays: "35",
    nomPays: "Hungary",
    urlImage: "Hungary"
  },
  {
    idcompet: "185",
    idPays: "24",
    nomPays: "Latvia",
    urlImage: "Latvia"
  },
  {
    idcompet: "188",
    idPays: "10",
    nomPays: "Luxembourg",
    urlImage: "Luxembourg"
  },
  {
    idcompet: "190",
    idPays: "120",
    nomPays: "Malta",
    urlImage: "Malta"
  },
  {
    idcompet: "193",
    idPays: "37",
    nomPays: "Moldova",
    urlImage: "Moldova"
  },
  {
    idcompet: "194",
    idPays: "40",
    nomPays: "Montenegro",
    urlImage: "Montenegro"
  },
  {
    idcompet: "202",
    idPays: "51",
    nomPays: "republic-of-macedonia",
    urlImage: "republic-of-macedonia"
  },
  {
    idcompet: "206",
    idPays: "6",
    nomPays: "Norway",
    urlImage: "Norway"
  },
  {
    idcompet: "212",
    idPays: "32",
    nomPays: "Portugal",
    urlImage: "Portugal"
  },
  {
    idcompet: "101",
    idPays: "49",
    nomPays: "Cyprus",
    urlImage: "Cyprus"
  },
  {
    idcompet: "102",
    idPays: "5",
    nomPays: "Denmark",
    urlImage: "Denmark"
  },
  {
    idcompet: "167",
    idPays: "1",
    nomPays: "Germany",
    urlImage: "Germany"
  },
  {
    idcompet: "288",
    idPays: "89",
    nomPays: "Jordan",
    urlImage: "Jordan"
  },
  {
    idcompet: "314",
    idPays: "75",
    nomPays: "saudi-arabia",
    urlImage: "saudi-arabia"
  },
  {
    idcompet: "337",
    idPays: "7",
    nomPays: "Sweden",
    urlImage: "Sweden"
  },
  {
    idcompet: "355",
    idPays: "76",
    nomPays: "United Arab Emirates",
    urlImage: "United Arab Emirates"
  },
  {
    idcompet: "49",
    idPays: "62",
    nomPays: "Paraguay",
    urlImage: "Paraguay"
  },
  {
    idcompet: "199",
    idPays: "42",
    nomPays: "Netherlands",
    urlImage: "Netherlands"
  },
  {
    idcompet: "150",
    idPays: "19",
    nomPays: "England",
    urlImage: "England"
  },
  {
    idcompet: "151",
    idPays: "19",
    nomPays: "England",
    urlImage: "England"
  },
  {
    idcompet: "60",
    idPays: "14",
    nomPays: "Poland",
    urlImage: "Poland"
  },
  {
    idcompet: "13",
    idPays: "6",
    nomPays: "Norway",
    urlImage: "Norway"
  },
  {
    idcompet: "196",
    idPays: "42",
    nomPays: "Netherlands",
    urlImage: "Netherlands"
  },
  {
    idcompet: "32",
    idPays: "17",
    nomPays: "Georgia",
    urlImage: "Georgia"
  },
  {
    idcompet: "165",
    idPays: "17",
    nomPays: "Georgia",
    urlImage: "Georgia"
  },
  {
    idcompet: "133",
    idPays: "8",
    nomPays: "Austria",
    urlImage: "Austria"
  },
  {
    idcompet: "245",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "152",
    idPays: "19",
    nomPays: "England",
    urlImage: "England"
  },
  {
    idcompet: "153",
    idPays: "19",
    nomPays: "England",
    urlImage: "England"
  },
  {
    idcompet: "217",
    idPays: "23",
    nomPays: "Ireland",
    urlImage: "Ireland"
  },
  {
    idcompet: "122",
    idPays: "71",
    nomPays: "Australia",
    urlImage: "Australia"
  },
  {
    idcompet: "372",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "270",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "362",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "68",
    idPays: "2",
    nomPays: "Belgium",
    urlImage: "Belgium"
  },
  {
    idcompet: "136",
    idPays: "2",
    nomPays: "Belgium",
    urlImage: "Belgium"
  },
  {
    idcompet: "71",
    idPays: "38",
    nomPays: "Bulgaria",
    urlImage: "Bulgaria"
  },
  {
    idcompet: "63",
    idPays: "53",
    nomPays: "Slovakia",
    urlImage: "Slovakia"
  },
  {
    idcompet: "371",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "172",
    idPays: "78",
    nomPays: "Greece",
    urlImage: "Greece"
  },
  {
    idcompet: "27",
    idPays: "90",
    nomPays: "Indonesia",
    urlImage: "Indonesia"
  },
  {
    idcompet: "266",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "291",
    idPays: "29",
    nomPays: "Kenya",
    urlImage: "Kenya"
  },
  {
    idcompet: "280",
    idPays: "18",
    nomPays: "Iran",
    urlImage: "Iran"
  },
  {
    idcompet: "67",
    idPays: "71",
    nomPays: "Australia",
    urlImage: "Australia"
  },
  {
    idcompet: "279",
    idPays: "87",
    nomPays: "India",
    urlImage: "India"
  },
  {
    idcompet: "65",
    idPays: "87",
    nomPays: "India",
    urlImage: "India"
  },
  {
    idcompet: "103",
    idPays: "79",
    nomPays: "Northern Ireland",
    urlImage: "null"
  },
  {
    idcompet: "28",
    idPays: "72",
    nomPays: "Japan",
    urlImage: "Japan"
  },
  {
    idcompet: "283",
    idPays: "72",
    nomPays: "Japan",
    urlImage: "Japan"
  },
  {
    idcompet: "66",
    idPays: "70",
    nomPays: "Republic of Korea",
    urlImage: "south-korea"
  },
  {
    idcompet: "308",
    idPays: "70",
    nomPays: "Republic of Korea",
    urlImage: "south-korea"
  },
  {
    idcompet: "386",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "164",
    idPays: "22",
    nomPays: "Finland",
    urlImage: "Finland"
  },
  {
    idcompet: "130",
    idPays: "102",
    nomPays: "Albania",
    urlImage: "Albania"
  },
  {
    idcompet: "373",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "374",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "198",
    idPays: "42",
    nomPays: "Netherlands",
    urlImage: "Netherlands"
  },
  {
    idcompet: "121",
    idPays: "70",
    nomPays: "Republic of Korea",
    urlImage: "south-korea"
  },
  {
    idcompet: "3",
    idPays: "43",
    nomPays: "Spain",
    urlImage: "Spain"
  },
  {
    idcompet: "263",
    idPays: "26",
    nomPays: "China",
    urlImage: "China"
  },
  {
    idcompet: "318",
    idPays: "3",
    nomPays: "Scotland",
    urlImage: "Scotland"
  },
  {
    idcompet: "82",
    idPays: "19",
    nomPays: "England",
    urlImage: "England"
  },
  {
    idcompet: "319",
    idPays: "3",
    nomPays: "Scotland",
    urlImage: "Scotland"
  },
  {
    idcompet: "83",
    idPays: "19",
    nomPays: "England",
    urlImage: "England"
  },
  {
    idcompet: "284",
    idPays: "72",
    nomPays: "Japan",
    urlImage: "Japan"
  },
  {
    idcompet: "320",
    idPays: "3",
    nomPays: "Scotland",
    urlImage: "Scotland"
  },
  {
    idcompet: "322",
    idPays: "73",
    nomPays: "Singapore",
    urlImage: "Singapore"
  },
  {
    idcompet: "357",
    idPays: "76",
    nomPays: "United Arab Emirates",
    urlImage: "United Arab Emirates"
  },
  {
    idcompet: "124",
    idPays: "69",
    nomPays: "south-africa",
    urlImage: "south-africa"
  },
  {
    idcompet: "381",
    idPays: "30",
    nomPays: "Wales",
    urlImage: "Wales"
  },
  {
    idcompet: "163",
    idPays: "21",
    nomPays: "France",
    urlImage: "France"
  },
  {
    idcompet: "203",
    idPays: "79",
    nomPays: "Northern Ireland",
    urlImage: "null"
  },
  {
    idcompet: "213",
    idPays: "32",
    nomPays: "Portugal",
    urlImage: "Portugal"
  },
  {
    idcompet: "218",
    idPays: "23",
    nomPays: "Ireland",
    urlImage: "Ireland"
  },
  {
    idcompet: "221",
    idPays: "36",
    nomPays: "Romania",
    urlImage: "Romania"
  },
  {
    idcompet: "177",
    idPays: "55",
    nomPays: "Israel",
    urlImage: "Israel"
  },
  {
    idcompet: "61",
    idPays: "36",
    nomPays: "Romania",
    urlImage: "Romania"
  },
  {
    idcompet: "220",
    idPays: "36",
    nomPays: "Romania",
    urlImage: "Romania"
  },
  {
    idcompet: "45",
    idPays: "57",
    nomPays: "Mexico",
    urlImage: "Mexico"
  },
  {
    idcompet: "55",
    idPays: "59",
    nomPays: "Guatemala",
    urlImage: "Guatemala"
  },
  {
    idcompet: "56",
    idPays: "64",
    nomPays: "Honduras",
    urlImage: "Honduras"
  },
  {
    idcompet: "73",
    idPays: "55",
    nomPays: "Israel",
    urlImage: "Israel"
  },
  {
    idcompet: "5",
    idPays: "21",
    nomPays: "France",
    urlImage: "France"
  },
  {
    idcompet: "35",
    idPays: "67",
    nomPays: "Algeria",
    urlImage: "Algeria"
  },
  {
    idcompet: "84",
    idPays: "103",
    nomPays: "Senegal",
    urlImage: "Senegal"
  },
  {
    idcompet: "343",
    idPays: "80",
    nomPays: "Tunisia",
    urlImage: "Tunisia"
  },
  {
    idcompet: "97",
    idPays: "21",
    nomPays: "France",
    urlImage: "France"
  },
  {
    idcompet: "229",
    idPays: "67",
    nomPays: "Algeria",
    urlImage: "Algeria"
  },
  {
    idcompet: "42",
    idPays: "80",
    nomPays: "Tunisia",
    urlImage: "Tunisia"
  },
  {
    idcompet: "304",
    idPays: "95",
    nomPays: "Panama",
    urlImage: "Panama"
  },
  {
    idcompet: "298",
    idPays: "114",
    nomPays: "New Zealand",
    urlImage: "New Zealand"
  },
  {
    idcompet: "76",
    idPays: "46",
    nomPays: "USA",
    urlImage: "USA"
  },
  {
    idcompet: "382",
    idPays: "46",
    nomPays: "USA",
    urlImage: "USA"
  },
  {
    idcompet: "161",
    idPays: "21",
    nomPays: "France",
    urlImage: "France"
  },
  {
    idcompet: "12",
    idPays: "10",
    nomPays: "Luxembourg",
    urlImage: "Luxembourg"
  },
  {
    idcompet: "59",
    idPays: "37",
    nomPays: "Moldova",
    urlImage: "Moldova"
  },
  {
    idcompet: "154",
    idPays: "19",
    nomPays: "England",
    urlImage: "England"
  },
  {
    idcompet: "155",
    idPays: "19",
    nomPays: "England",
    urlImage: "England"
  },
  {
    idcompet: "249",
    idPays: "71",
    nomPays: "Australia",
    urlImage: "Australia"
  },
  {
    idcompet: "174",
    idPays: "35",
    nomPays: "Hungary",
    urlImage: "Hungary"
  },
  {
    idcompet: "250",
    idPays: "71",
    nomPays: "Australia",
    urlImage: "Australia"
  },
  {
    idcompet: "78",
    idPays: "108",
    nomPays: "Nigeria",
    urlImage: "Nigeria"
  },
  {
    idcompet: "204",
    idPays: "6",
    nomPays: "Norway",
    urlImage: "Norway"
  },
  {
    idcompet: "100",
    idPays: "8",
    nomPays: "Austria",
    urlImage: "Austria"
  },
  {
    idcompet: "385",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "19",
    idPays: "35",
    nomPays: "Hungary",
    urlImage: "Hungary"
  },
  {
    idcompet: "255",
    idPays: "16",
    nomPays: "Brazil",
    urlImage: "Brazil"
  },
  {
    idcompet: "302",
    idPays: "140",
    nomPays: "Pakistan",
    urlImage: "Pakistan"
  },
  {
    idcompet: "16",
    idPays: "15",
    nomPays: "Belarus",
    urlImage: "Belarus"
  },
  {
    idcompet: "11",
    idPays: "23",
    nomPays: "Ireland",
    urlImage: "Ireland"
  },
  {
    idcompet: "2",
    idPays: "19",
    nomPays: "England",
    urlImage: "England"
  },
  {
    idcompet: "258",
    idPays: "119",
    nomPays: "Canada",
    urlImage: "Canada"
  },
  {
    idcompet: "7",
    idPays: "12",
    nomPays: "Russia",
    urlImage: "Russia"
  },
  {
    idcompet: "273",
    idPays: "142",
    nomPays: "Ethiopia",
    urlImage: "Ethiopia"
  },
  {
    idcompet: "278",
    idPays: "124",
    nomPays: "Hong Kong",
    urlImage: "Hong Kong"
  },
  {
    idcompet: "281",
    idPays: "128",
    nomPays: "Iraq",
    urlImage: "Iraq"
  },
  {
    idcompet: "282",
    idPays: "136",
    nomPays: "Jamaica",
    urlImage: "Jamaica"
  },
  {
    idcompet: "30",
    idPays: "27",
    nomPays: "Thailand",
    urlImage: "Thailand"
  },
  {
    idcompet: "31",
    idPays: "28",
    nomPays: "Azerbaijan",
    urlImage: "Azerbaijan"
  },
  {
    idcompet: "287",
    idPays: "89",
    nomPays: "Jordan",
    urlImage: "Jordan"
  },
  {
    idcompet: "33",
    idPays: "100",
    nomPays: "Kuwait",
    urlImage: "Kuwait"
  },
  {
    idcompet: "36",
    idPays: "74",
    nomPays: "Egypt",
    urlImage: "Egypt"
  },
  {
    idcompet: "292",
    idPays: "135",
    nomPays: "Lebanon",
    urlImage: "Lebanon"
  },
  {
    idcompet: "37",
    idPays: "29",
    nomPays: "Kenya",
    urlImage: "Kenya"
  },
  {
    idcompet: "294",
    idPays: "96",
    nomPays: "Malaysia",
    urlImage: "Malaysia"
  },
  {
    idcompet: "41",
    idPays: "69",
    nomPays: "south-africa",
    urlImage: "south-africa"
  },
  {
    idcompet: "313",
    idPays: "75",
    nomPays: "saudi-arabia",
    urlImage: "saudi-arabia"
  },
  {
    idcompet: "64",
    idPays: "13",
    nomPays: "Ukraine",
    urlImage: "Ukraine"
  },
  {
    idcompet: "74",
    idPays: "30",
    nomPays: "Wales",
    urlImage: "Wales"
  },
  {
    idcompet: "80",
    idPays: "91",
    nomPays: "Tanzania",
    urlImage: "Tanzania"
  },
  {
    idcompet: "341",
    idPays: "134",
    nomPays: "Syria",
    urlImage: "Syria"
  },
  {
    idcompet: "86",
    idPays: "99",
    nomPays: "Ghana",
    urlImage: "Ghana"
  },
  {
    idcompet: "88",
    idPays: "147",
    nomPays: "Sudan",
    urlImage: "Sudan"
  },
  {
    idcompet: "90",
    idPays: "148",
    nomPays: "Namibia",
    urlImage: "Namibia"
  },
  {
    idcompet: "91",
    idPays: "180",
    nomPays: "Zambia",
    urlImage: "Zambia"
  },
  {
    idcompet: "183",
    idPays: "77",
    nomPays: "Kazakhstan",
    urlImage: "Kazakhstan"
  },
  {
    idcompet: "189",
    idPays: "120",
    nomPays: "Malta",
    urlImage: "Malta"
  },
  {
    idcompet: "238",
    idPays: "190",
    nomPays: "Armenia",
    urlImage: "Armenia"
  },
  {
    idcompet: "375",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "85",
    idPays: "113",
    nomPays: "Zimbabwe",
    urlImage: "Zimbabwe"
  },
  {
    idcompet: "252",
    idPays: "127",
    nomPays: "Bahrain",
    urlImage: "Bahrain"
  },
  {
    idcompet: "69",
    idPays: "79",
    nomPays: "Northern Ireland",
    urlImage: "null"
  },
  {
    idcompet: "75",
    idPays: "3",
    nomPays: "Scotland",
    urlImage: "Scotland"
  },
  {
    idcompet: "70",
    idPays: "39",
    nomPays: "Bosnia and Herzegovina",
    urlImage: "Bosnia and Herzegovina"
  },
  {
    idcompet: "18",
    idPays: "25",
    nomPays: "Estonia",
    urlImage: "Estonia"
  },
  {
    idcompet: "8",
    idPays: "32",
    nomPays: "Portugal",
    urlImage: "Portugal"
  },
  {
    idcompet: "51",
    idPays: "61",
    nomPays: "Colombia",
    urlImage: "Colombia"
  },
  {
    idcompet: "259",
    idPays: "41",
    nomPays: "Chile",
    urlImage: "Chile"
  },
  {
    idcompet: "265",
    idPays: "61",
    nomPays: "Colombia",
    urlImage: "Colombia"
  },
  {
    idcompet: "233",
    idPays: "65",
    nomPays: "Argentina",
    urlImage: "Argentina"
  },
  {
    idcompet: "96",
    idPays: "65",
    nomPays: "Argentina",
    urlImage: "Argentina"
  },
  {
    idcompet: "234",
    idPays: "65",
    nomPays: "Argentina",
    urlImage: "Argentina"
  },
  {
    idcompet: "235",
    idPays: "65",
    nomPays: "Argentina",
    urlImage: "Argentina"
  },
  {
    idcompet: "277",
    idPays: "59",
    nomPays: "Guatemala",
    urlImage: "Guatemala"
  },
  {
    idcompet: "23",
    idPays: "65",
    nomPays: "Argentina",
    urlImage: "Argentina"
  },
  {
    idcompet: "25",
    idPays: "41",
    nomPays: "Chile",
    urlImage: "Chile"
  },
  {
    idcompet: "299",
    idPays: "207",
    nomPays: "Nicaragua",
    urlImage: "Nicaragua"
  },
  {
    idcompet: "46",
    idPays: "45",
    nomPays: "Venezuela",
    urlImage: "Venezuela"
  },
  {
    idcompet: "47",
    idPays: "52",
    nomPays: "Peru",
    urlImage: "Peru"
  },
  {
    idcompet: "48",
    idPays: "66",
    nomPays: "Uruguay",
    urlImage: "Uruguay"
  },
  {
    idcompet: "52",
    idPays: "60",
    nomPays: "Bolivia",
    urlImage: "Bolivia"
  },
  {
    idcompet: "53",
    idPays: "58",
    nomPays: "Costa Rica",
    urlImage: "Costa Rica"
  },
  {
    idcompet: "54",
    idPays: "63",
    nomPays: "salvador",
    urlImage: "salvador"
  },
  {
    idcompet: "34",
    idPays: "18",
    nomPays: "Iran",
    urlImage: "Iran"
  },
  {
    idcompet: "301",
    idPays: "122",
    nomPays: "Oman",
    urlImage: "Oman"
  },
  {
    idcompet: "22",
    idPays: "34",
    nomPays: "Slovenia",
    urlImage: "Slovenia"
  },
  {
    idcompet: "321",
    idPays: "50",
    nomPays: "Serbia",
    urlImage: "Serbia"
  },
  {
    idcompet: "200",
    idPays: "51",
    nomPays: "republic-of-macedonia",
    urlImage: "republic-of-macedonia"
  },
  {
    idcompet: "305",
    idPays: "112",
    nomPays: "Qatar",
    urlImage: "Qatar"
  },
  {
    idcompet: "331",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "168",
    idPays: "1",
    nomPays: "Germany",
    urlImage: "Germany"
  },
  {
    idcompet: "247",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "105",
    idPays: "3",
    nomPays: "Scotland",
    urlImage: "Scotland"
  },
  {
    idcompet: "140",
    idPays: "38",
    nomPays: "Bulgaria",
    urlImage: "Bulgaria"
  },
  {
    idcompet: "332",
    idPays: "43",
    nomPays: "Spain",
    urlImage: "Spain"
  },
  {
    idcompet: "79",
    idPays: "43",
    nomPays: "Spain",
    urlImage: "Spain"
  },
  {
    idcompet: "92",
    idPays: "32",
    nomPays: "Portugal",
    urlImage: "Portugal"
  },
  {
    idcompet: "4",
    idPays: "47",
    nomPays: "Italy",
    urlImage: "Italy"
  },
  {
    idcompet: "24",
    idPays: "16",
    nomPays: "Brazil",
    urlImage: "Brazil"
  },
  {
    idcompet: "50",
    idPays: "56",
    nomPays: "Ecuador",
    urlImage: "Ecuador"
  },
  {
    idcompet: "87",
    idPays: "47",
    nomPays: "Italy",
    urlImage: "Italy"
  },
  {
    idcompet: "95",
    idPays: "16",
    nomPays: "Brazil",
    urlImage: "Brazil"
  },
  {
    idcompet: "181",
    idPays: "47",
    nomPays: "Italy",
    urlImage: "Italy"
  },
  {
    idcompet: "253",
    idPays: "16",
    nomPays: "Brazil",
    urlImage: "Brazil"
  },
  {
    idcompet: "182",
    idPays: "47",
    nomPays: "Italy",
    urlImage: "Italy"
  },
  {
    idcompet: "254",
    idPays: "16",
    nomPays: "Brazil",
    urlImage: "Brazil"
  },
  {
    idcompet: "29",
    idPays: "73",
    nomPays: "Singapore",
    urlImage: "Singapore"
  },
  {
    idcompet: "123",
    idPays: "69",
    nomPays: "south-africa",
    urlImage: "south-africa"
  },
  {
    idcompet: "248",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "307",
    idPays: "112",
    nomPays: "Qatar",
    urlImage: "Qatar"
  },
  {
    idcompet: "261",
    idPays: "41",
    nomPays: "Chile",
    urlImage: "Chile"
  },
  {
    idcompet: "264",
    idPays: "26",
    nomPays: "China",
    urlImage: "China"
  },
  {
    idcompet: "286",
    idPays: "72",
    nomPays: "Japan",
    urlImage: "Japan"
  },
  {
    idcompet: "289",
    idPays: "29",
    nomPays: "Kenya",
    urlImage: "Kenya"
  },
  {
    idcompet: "312",
    idPays: "12",
    nomPays: "Russia",
    urlImage: "Russia"
  },
  {
    idcompet: "333",
    idPays: "43",
    nomPays: "Spain",
    urlImage: "Spain"
  },
  {
    idcompet: "348",
    idPays: "48",
    nomPays: "Turkey",
    urlImage: "Turkey"
  },
  {
    idcompet: "349",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "352",
    idPays: "13",
    nomPays: "Ukraine",
    urlImage: "Ukraine"
  },
  {
    idcompet: "127",
    idPays: "33",
    nomPays: "Iceland",
    urlImage: "Iceland"
  },
  {
    idcompet: "129",
    idPays: "15",
    nomPays: "Belarus",
    urlImage: "Belarus"
  },
  {
    idcompet: "137",
    idPays: "2",
    nomPays: "Belgium",
    urlImage: "Belgium"
  },
  {
    idcompet: "139",
    idPays: "38",
    nomPays: "Bulgaria",
    urlImage: "Bulgaria"
  },
  {
    idcompet: "143",
    idPays: "49",
    nomPays: "Cyprus",
    urlImage: "Cyprus"
  },
  {
    idcompet: "156",
    idPays: "25",
    nomPays: "Estonia",
    urlImage: "Estonia"
  },
  {
    idcompet: "160",
    idPays: "21",
    nomPays: "France",
    urlImage: "France"
  },
  {
    idcompet: "169",
    idPays: "1",
    nomPays: "Germany",
    urlImage: "Germany"
  },
  {
    idcompet: "176",
    idPays: "35",
    nomPays: "Hungary",
    urlImage: "Hungary"
  },
  {
    idcompet: "178",
    idPays: "47",
    nomPays: "Italy",
    urlImage: "Italy"
  },
  {
    idcompet: "186",
    idPays: "68",
    nomPays: "Lithuania",
    urlImage: "Lithuania"
  },
  {
    idcompet: "192",
    idPays: "37",
    nomPays: "Moldova",
    urlImage: "Moldova"
  },
  {
    idcompet: "197",
    idPays: "42",
    nomPays: "Netherlands",
    urlImage: "Netherlands"
  },
  {
    idcompet: "205",
    idPays: "6",
    nomPays: "Norway",
    urlImage: "Norway"
  },
  {
    idcompet: "208",
    idPays: "14",
    nomPays: "Poland",
    urlImage: "Poland"
  },
  {
    idcompet: "211",
    idPays: "32",
    nomPays: "Portugal",
    urlImage: "Portugal"
  },
  {
    idcompet: "215",
    idPays: "23",
    nomPays: "Ireland",
    urlImage: "Ireland"
  },
  {
    idcompet: "219",
    idPays: "36",
    nomPays: "Romania",
    urlImage: "Romania"
  },
  {
    idcompet: "236",
    idPays: "65",
    nomPays: "Argentina",
    urlImage: "Argentina"
  },
  {
    idcompet: "328",
    idPays: "69",
    nomPays: "south-africa",
    urlImage: "south-africa"
  },
  {
    idcompet: "9",
    idPays: "78",
    nomPays: "Greece",
    urlImage: "Greece"
  },
  {
    idcompet: "15",
    idPays: "9",
    nomPays: "Switzerland",
    urlImage: "Switzerland"
  },
  {
    idcompet: "26",
    idPays: "26",
    nomPays: "China",
    urlImage: "China"
  },
  {
    idcompet: "290",
    idPays: "29",
    nomPays: "Kenya",
    urlImage: "Kenya"
  },
  {
    idcompet: "293",
    idPays: "96",
    nomPays: "Malaysia",
    urlImage: "Malaysia"
  },
  {
    idcompet: "81",
    idPays: "98",
    nomPays: "Uganda",
    urlImage: "Uganda"
  },
  {
    idcompet: "94",
    idPays: "183",
    nomPays: "Malawi",
    urlImage: "Malawi"
  },
  {
    idcompet: "6",
    idPays: "48",
    nomPays: "Turkey",
    urlImage: "Turkey"
  },
  {
    idcompet: "62",
    idPays: "50",
    nomPays: "Serbia",
    urlImage: "Serbia"
  },
  {
    idcompet: "296",
    idPays: "57",
    nomPays: "Mexico",
    urlImage: "Mexico"
  },
  {
    idcompet: "336",
    idPays: "7",
    nomPays: "Sweden",
    urlImage: "Sweden"
  },
  {
    idcompet: "40",
    idPays: "5",
    nomPays: "Denmark",
    urlImage: "Denmark"
  },
  {
    idcompet: "184",
    idPays: "121",
    nomPays: "Kosovo",
    urlImage: "Kosovo"
  },
  {
    idcompet: "376",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "21",
    idPays: "40",
    nomPays: "Montenegro",
    urlImage: "Montenegro"
  },
  {
    idcompet: "170",
    idPays: "1",
    nomPays: "Germany",
    urlImage: "Germany"
  },
  {
    idcompet: "232",
    idPays: "65",
    nomPays: "Argentina",
    urlImage: "Argentina"
  },
  {
    idcompet: "237",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "377",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "354",
    idPays: "76",
    nomPays: "United Arab Emirates",
    urlImage: "United Arab Emirates"
  },
  {
    idcompet: "387",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "274",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "350",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "378",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "383",
    idPays: "46",
    nomPays: "USA",
    urlImage: "USA"
  },
  {
    idcompet: "10",
    idPays: "33",
    nomPays: "Iceland",
    urlImage: "Iceland"
  },
  {
    idcompet: "118",
    idPays: "46",
    nomPays: "USA",
    urlImage: "USA"
  },
  {
    idcompet: "384",
    idPays: "46",
    nomPays: "USA",
    urlImage: "USA"
  },
  {
    idcompet: "39",
    idPays: "92",
    nomPays: "Vietnam",
    urlImage: "Vietnam"
  },
  {
    idcompet: "380",
    idPays: "92",
    nomPays: "Vietnam",
    urlImage: "Vietnam"
  },
  {
    idcompet: "57",
    idPays: "22",
    nomPays: "Finland",
    urlImage: "Finland"
  },
  {
    idcompet: "251",
    idPays: "71",
    nomPays: "Australia",
    urlImage: "Australia"
  },
  {
    idcompet: "20",
    idPays: "24",
    nomPays: "Latvia",
    urlImage: "Latvia"
  },
  {
    idcompet: "201",
    idPays: "51",
    nomPays: "republic-of-macedonia",
    urlImage: "republic-of-macedonia"
  },
  {
    idcompet: "104",
    idPays: "30",
    nomPays: "Wales",
    urlImage: "Wales"
  },
  {
    idcompet: "303",
    idPays: "179",
    nomPays: "Palestine",
    urlImage: "Palestine"
  },
  {
    idcompet: "358",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "359",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "360",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "361",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "365",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "364",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "363",
    idPays: null,
    nomPays: null,
    urlImage: null
  },
  {
    idcompet: "158",
    idPays: "22",
    nomPays: "Finland",
    urlImage: "Finland"
  }
];
/*
const newCompet = competList.map(compet => {
  return {
    idCompet: compet.idcompet,
    pays: compet.nomPays,
    url: require("../images/flags/" + compet.nomPays + ".png")
  };
});
*/
const competitionliste = [
  {
    idcompet: "339",
    pays: "switzerland",
    url: require("../images/flags/switzerland.png")
  },
  {
    idcompet: "125",
    pays: "iceland",
    url: require("../images/flags/iceland.png")
  },
  {
    idcompet: "309",
    pays: "russia",
    url: require("../images/flags/russia.png")
  },
  {
    idcompet: "327",
    pays: "south-africa",
    url: require("../images/flags/south-africa.png")
  },
  {
    idcompet: "353",
    pays: "ukraine",
    url: require("../images/flags/ukraine.png")
  },
  {
    idcompet: "132",
    pays: "albania",
    url: require("../images/flags/albania.png")
  },
  {
    idcompet: "147",
    pays: "denmark",
    url: require("../images/flags/denmark.png")
  },
  {
    idcompet: "191",
    pays: "malta",
    url: require("../images/flags/malta.png")
  },
  {
    idcompet: "216",
    pays: "ireland",
    url: require("../images/flags/ireland.png")
  },
  {
    idcompet: "17",
    pays: "croatia",
    url: require("../images/flags/croatia.png")
  },
  {
    idcompet: "44",
    pays: "cyprus",
    url: require("../images/flags/cyprus.png")
  },
  {
    idcompet: "72",
    pays: "czech-republic",
    url: require("../images/flags/czech-republic.png")
  },
  {
    idcompet: "138",
    pays: "bosnia and herzegovina",
    url: require("../images/flags/bosnia-and-herzegovina.png")
  },
  {
    idcompet: "187",
    pays: "lithuania",
    url: require("../images/flags/lithuania.png")
  },
  {
    idcompet: "239",
    pays: "armenia",
    url: require("../images/flags/armenia.png")
  },
  {
    idcompet: "344",
    pays: "turkey",
    url: require("../images/flags/turkey.png")
  },
  {
    idcompet: "209",
    pays: "poland",
    url: require("../images/flags/poland.png")
  },
  {
    idcompet: "93",
    pays: "germany",
    url: require("../images/flags/germany.png")
  },
  {
    idcompet: "306",
    pays: "qatar",
    url: require("../images/flags/qatar.png")
  },
  {
    idcompet: "310",
    pays: "russia",
    url: require("../images/flags/russia.png")
  },
  {
    idcompet: "148",
    pays: "denmark",
    url: require("../images/flags/denmark.png")
  },
  {
    idcompet: "207",
    pays: "norway",
    url: require("../images/flags/norway.png")
  },
  {
    idcompet: "324",
    pays: "slovakia",
    url: require("../images/flags/slovakia.png")
  },
  {
    idcompet: "141",
    pays: "croatia",
    url: require("../images/flags/croatia.png")
  },
  {
    idcompet: "144",
    pays: "cyprus",
    url: require("../images/flags/cyprus.png")
  },
  {
    idcompet: "145",
    pays: "czech-republic",
    url: require("../images/flags/czech-republic.png")
  },
  {
    idcompet: "195",
    pays: "montenegro",
    url: require("../images/flags/montenegro.png")
  },
  {
    idcompet: "345",
    pays: "turkey",
    url: require("../images/flags/turkey.png")
  },
  {
    idcompet: "210",
    pays: "poland",
    url: require("../images/flags/poland.png")
  },
  {
    idcompet: "325",
    pays: "slovenia",
    url: require("../images/flags/slovenia.png")
  },
  {
    idcompet: "146",
    pays: "czech-republic",
    url: require("../images/flags/czech-republic.png")
  },
  {
    idcompet: "346",
    pays: "turkey",
    url: require("../images/flags/turkey.png")
  },
  {
    idcompet: "166",
    pays: "germany",
    url: require("../images/flags/germany.png")
  },
  {
    idcompet: "58",
    pays: "lithuania",
    url: require("../images/flags/lithuania.png")
  },
  {
    idcompet: "242",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "246",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "227",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "228",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "226",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "14",
    pays: "sweden",
    url: require("../images/flags/sweden.png")
  },
  {
    idcompet: "366",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "98",
    pays: "mexico",
    url: require("../images/flags/mexico.png")
  },
  {
    idcompet: "240",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "241",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "367",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "368",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "173",
    pays: "greece",
    url: require("../images/flags/greece.png")
  },
  {
    idcompet: "99",
    pays: "belgium",
    url: require("../images/flags/belgium.png")
  },
  {
    idcompet: "134",
    pays: "azerbaijan",
    url: require("../images/flags/azerbaijan.png")
  },
  {
    idcompet: "38",
    pays: "morocco",
    url: require("../images/flags/morocco.png")
  },
  {
    idcompet: "1",
    pays: "germany",
    url: require("../images/flags/germany.png")
  },
  {
    idcompet: "43",
    pays: "austria",
    url: require("../images/flags/austria.png")
  },
  {
    idcompet: "222",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "214",
    pays: "portugal",
    url: require("../images/flags/portugal.png")
  },
  {
    idcompet: "257",
    pays: "canada",
    url: require("../images/flags/canada.png")
  },
  {
    idcompet: "297",
    pays: "new zealand",
    url: require("../images/flags/new-zealand.png")
  },
  {
    idcompet: "316",
    pays: "scotland",
    url: require("../images/flags/scotland.png")
  },
  {
    idcompet: "338",
    pays: "switzerland",
    url: require("../images/flags/switzerland.png")
  },
  {
    idcompet: "89",
    pays: "rwanda",
    url: require("../images/flags/rwanda.png")
  },
  {
    idcompet: "369",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "268",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "300",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "223",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "243",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "244",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "317",
    pays: "scotland",
    url: require("../images/flags/scotland.png")
  },
  {
    idcompet: "77",
    pays: "england",
    url: require("../images/flags/england.png")
  },
  {
    idcompet: "370",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "149",
    pays: "england",
    url: require("../images/flags/england.png")
  },
  {
    idcompet: "267",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "269",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "224",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "271",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "230",
    pays: "argentina",
    url: require("../images/flags/argentina.png")
  },
  {
    idcompet: "116",
    pays: "colombia",
    url: require("../images/flags/colombia.png")
  },
  {
    idcompet: "231",
    pays: "argentina",
    url: require("../images/flags/argentina.png")
  },
  {
    idcompet: "334",
    pays: "spain",
    url: require("../images/flags/spain.png")
  },
  {
    idcompet: "256",
    pays: "brazil",
    url: require("../images/flags/brazil.png")
  },
  {
    idcompet: "329",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "117",
    pays: "mexico",
    url: require("../images/flags/mexico.png")
  },
  {
    idcompet: "330",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "179",
    pays: "italy",
    url: require("../images/flags/italy.png")
  },
  {
    idcompet: "180",
    pays: "italy",
    url: require("../images/flags/italy.png")
  },
  {
    idcompet: "225",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "260",
    pays: "chile",
    url: require("../images/flags/chile.png")
  },
  {
    idcompet: "262",
    pays: "china",
    url: require("../images/flags/china.png")
  },
  {
    idcompet: "272",
    pays: "egypt",
    url: require("../images/flags/egypt.png")
  },
  {
    idcompet: "275",
    pays: "fiji",
    url: require("../images/flags/fiji.png")
  },
  {
    idcompet: "276",
    pays: "georgia",
    url: require("../images/flags/georgia.png")
  },
  {
    idcompet: "285",
    pays: "japan",
    url: require("../images/flags/japan.png")
  },
  {
    idcompet: "295",
    pays: "malaysia",
    url: require("../images/flags/malaysia.png")
  },
  {
    idcompet: "311",
    pays: "russia",
    url: require("../images/flags/russia.png")
  },
  {
    idcompet: "315",
    pays: "saudi-arabia",
    url: require("../images/flags/saudi-arabia.png")
  },
  {
    idcompet: "323",
    pays: "singapore",
    url: require("../images/flags/singapore.png")
  },
  {
    idcompet: "326",
    pays: "slovenia",
    url: require("../images/flags/slovenia.png")
  },
  {
    idcompet: "335",
    pays: "sweden",
    url: require("../images/flags/sweden.png")
  },
  {
    idcompet: "340",
    pays: "switzerland",
    url: require("../images/flags/switzerland.png")
  },
  {
    idcompet: "342",
    pays: "thailand",
    url: require("../images/flags/thailand.png")
  },
  {
    idcompet: "347",
    pays: "turkey",
    url: require("../images/flags/turkey.png")
  },
  {
    idcompet: "351",
    pays: "uganda",
    url: require("../images/flags/uganda.png")
  },
  {
    idcompet: "356",
    pays: "united arab emirates",
    url: require("../images/flags/united-arab-emirates.png")
  },
  {
    idcompet: "106",
    pays: "bosnia and herzegovina",
    url: require("../images/flags/bosnia-and-herzegovina.png")
  },
  {
    idcompet: "107",
    pays: "bulgaria",
    url: require("../images/flags/bulgaria.png")
  },
  {
    idcompet: "108",
    pays: "czech-republic",
    url: require("../images/flags/czech-republic.png")
  },
  {
    idcompet: "109",
    pays: "israel",
    url: require("../images/flags/israel.png")
  },
  {
    idcompet: "110",
    pays: "lithuania",
    url: require("../images/flags/lithuania.png")
  },
  {
    idcompet: "111",
    pays: "poland",
    url: require("../images/flags/poland.png")
  },
  {
    idcompet: "112",
    pays: "romania",
    url: require("../images/flags/romania.png")
  },
  {
    idcompet: "113",
    pays: "serbia",
    url: require("../images/flags/serbia.png")
  },
  {
    idcompet: "114",
    pays: "slovakia",
    url: require("../images/flags/slovakia.png")
  },
  {
    idcompet: "115",
    pays: "ukraine",
    url: require("../images/flags/ukraine.png")
  },
  {
    idcompet: "119",
    pays: "salvador",
    url: require("../images/flags/salvador.png")
  },
  {
    idcompet: "120",
    pays: "guatemala",
    url: require("../images/flags/guatemala.png")
  },
  {
    idcompet: "379",
    pays: "venezuela",
    url: require("../images/flags/venezuela.png")
  },
  {
    idcompet: "126",
    pays: "iceland",
    url: require("../images/flags/iceland.png")
  },
  {
    idcompet: "128",
    pays: "belarus",
    url: require("../images/flags/belarus.png")
  },
  {
    idcompet: "131",
    pays: "albania",
    url: require("../images/flags/albania.png")
  },
  {
    idcompet: "388",
    pays: "paraguay",
    url: require("../images/flags/paraguay.png")
  },
  {
    idcompet: "135",
    pays: "azerbaijan",
    url: require("../images/flags/azerbaijan.png")
  },
  {
    idcompet: "142",
    pays: "croatia",
    url: require("../images/flags/croatia.png")
  },
  {
    idcompet: "157",
    pays: "estonia",
    url: require("../images/flags/estonia.png")
  },
  {
    idcompet: "159",
    pays: "finland",
    url: require("../images/flags/finland.png")
  },
  {
    idcompet: "162",
    pays: "france",
    url: require("../images/flags/france.png")
  },
  {
    idcompet: "171",
    pays: "greece",
    url: require("../images/flags/greece.png")
  },
  {
    idcompet: "175",
    pays: "hungary",
    url: require("../images/flags/hungary.png")
  },
  {
    idcompet: "185",
    pays: "latvia",
    url: require("../images/flags/latvia.png")
  },
  {
    idcompet: "188",
    pays: "luxembourg",
    url: require("../images/flags/luxembourg.png")
  },
  {
    idcompet: "190",
    pays: "malta",
    url: require("../images/flags/malta.png")
  },
  {
    idcompet: "193",
    pays: "moldova",
    url: require("../images/flags/moldova.png")
  },
  {
    idcompet: "194",
    pays: "montenegro",
    url: require("../images/flags/montenegro.png")
  },
  {
    idcompet: "202",
    pays: "republic-of-macedonia",
    url: require("../images/flags/republic-of-macedonia.png")
  },
  {
    idcompet: "206",
    pays: "norway",
    url: require("../images/flags/norway.png")
  },
  {
    idcompet: "212",
    pays: "portugal",
    url: require("../images/flags/portugal.png")
  },
  {
    idcompet: "101",
    pays: "cyprus",
    url: require("../images/flags/cyprus.png")
  },
  {
    idcompet: "102",
    pays: "denmark",
    url: require("../images/flags/denmark.png")
  },
  {
    idcompet: "167",
    pays: "germany",
    url: require("../images/flags/germany.png")
  },
  {
    idcompet: "288",
    pays: "jordan",
    url: require("../images/flags/jordan.png")
  },
  {
    idcompet: "314",
    pays: "saudi-arabia",
    url: require("../images/flags/saudi-arabia.png")
  },
  {
    idcompet: "337",
    pays: "sweden",
    url: require("../images/flags/sweden.png")
  },
  {
    idcompet: "355",
    pays: "united arab emirates",
    url: require("../images/flags/united-arab-emirates.png")
  },
  {
    idcompet: "49",
    pays: "paraguay",
    url: require("../images/flags/paraguay.png")
  },
  {
    idcompet: "199",
    pays: "netherlands",
    url: require("../images/flags/netherlands.png")
  },
  {
    idcompet: "150",
    pays: "england",
    url: require("../images/flags/england.png")
  },
  {
    idcompet: "151",
    pays: "england",
    url: require("../images/flags/england.png")
  },
  {
    idcompet: "60",
    pays: "poland",
    url: require("../images/flags/poland.png")
  },
  {
    idcompet: "13",
    pays: "norway",
    url: require("../images/flags/norway.png")
  },
  {
    idcompet: "196",
    pays: "netherlands",
    url: require("../images/flags/netherlands.png")
  },
  {
    idcompet: "32",
    pays: "georgia",
    url: require("../images/flags/georgia.png")
  },
  {
    idcompet: "165",
    pays: "georgia",
    url: require("../images/flags/georgia.png")
  },
  {
    idcompet: "133",
    pays: "austria",
    url: require("../images/flags/austria.png")
  },
  {
    idcompet: "245",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "152",
    pays: "england",
    url: require("../images/flags/england.png")
  },
  {
    idcompet: "153",
    pays: "england",
    url: require("../images/flags/england.png")
  },
  {
    idcompet: "217",
    pays: "ireland",
    url: require("../images/flags/ireland.png")
  },
  {
    idcompet: "122",
    pays: "australia",
    url: require("../images/flags/australia.png")
  },
  {
    idcompet: "372",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "270",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "362",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "68",
    pays: "belgium",
    url: require("../images/flags/belgium.png")
  },
  {
    idcompet: "136",
    pays: "belgium",
    url: require("../images/flags/belgium.png")
  },
  {
    idcompet: "71",
    pays: "bulgaria",
    url: require("../images/flags/bulgaria.png")
  },
  {
    idcompet: "63",
    pays: "slovakia",
    url: require("../images/flags/slovakia.png")
  },
  {
    idcompet: "371",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "172",
    pays: "greece",
    url: require("../images/flags/greece.png")
  },
  {
    idcompet: "27",
    pays: "indonesia",
    url: require("../images/flags/indonesia.png")
  },
  {
    idcompet: "266",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "291",
    pays: "kenya",
    url: require("../images/flags/kenya.png")
  },
  {
    idcompet: "280",
    pays: "iran",
    url: require("../images/flags/iran.png")
  },
  {
    idcompet: "67",
    pays: "australia",
    url: require("../images/flags/australia.png")
  },
  {
    idcompet: "279",
    pays: "india",
    url: require("../images/flags/india.png")
  },
  {
    idcompet: "65",
    pays: "india",
    url: require("../images/flags/india.png")
  },
  {
    idcompet: "103",
    pays: "northern ireland",
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "28",
    pays: "japan",
    url: require("../images/flags/japan.png")
  },
  {
    idcompet: "283",
    pays: "japan",
    url: require("../images/flags/japan.png")
  },
  {
    idcompet: "66",
    pays: "republic of korea",
    url: require("../images/flags/south-korea.png")
  },
  {
    idcompet: "308",
    pays: "republic of korea",
    url: require("../images/flags/south-korea.png")
  },
  {
    idcompet: "386",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "164",
    pays: "finland",
    url: require("../images/flags/finland.png")
  },
  {
    idcompet: "130",
    pays: "albania",
    url: require("../images/flags/albania.png")
  },
  {
    idcompet: "373",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "374",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "198",
    pays: "netherlands",
    url: require("../images/flags/netherlands.png")
  },
  {
    idcompet: "121",
    pays: "republic of korea",
    url: require("../images/flags/south-korea.png")
  },
  {
    idcompet: "3",
    pays: "spain",
    url: require("../images/flags/spain.png")
  },
  {
    idcompet: "263",
    pays: "china",
    url: require("../images/flags/china.png")
  },
  {
    idcompet: "318",
    pays: "scotland",
    url: require("../images/flags/scotland.png")
  },
  {
    idcompet: "82",
    pays: "england",
    url: require("../images/flags/england.png")
  },
  {
    idcompet: "319",
    pays: "scotland",
    url: require("../images/flags/scotland.png")
  },
  {
    idcompet: "83",
    pays: "england",
    url: require("../images/flags/england.png")
  },
  {
    idcompet: "284",
    pays: "japan",
    url: require("../images/flags/japan.png")
  },
  {
    idcompet: "320",
    pays: "scotland",
    url: require("../images/flags/scotland.png")
  },
  {
    idcompet: "322",
    pays: "singapore",
    url: require("../images/flags/singapore.png")
  },
  {
    idcompet: "357",
    pays: "united arab emirates",
    url: require("../images/flags/united-arab-emirates.png")
  },
  {
    idcompet: "124",
    pays: "south-africa",
    url: require("../images/flags/south-africa.png")
  },
  {
    idcompet: "381",
    pays: "wales",
    url: require("../images/flags/wales.png")
  },
  {
    idcompet: "163",
    pays: "france",
    url: require("../images/flags/france.png")
  },
  {
    idcompet: "203",
    pays: "northern ireland",
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "213",
    pays: "portugal",
    url: require("../images/flags/portugal.png")
  },
  {
    idcompet: "218",
    pays: "ireland",
    url: require("../images/flags/ireland.png")
  },
  {
    idcompet: "221",
    pays: "romania",
    url: require("../images/flags/romania.png")
  },
  {
    idcompet: "177",
    pays: "israel",
    url: require("../images/flags/israel.png")
  },
  {
    idcompet: "61",
    pays: "romania",
    url: require("../images/flags/romania.png")
  },
  {
    idcompet: "220",
    pays: "romania",
    url: require("../images/flags/romania.png")
  },
  {
    idcompet: "45",
    pays: "mexico",
    url: require("../images/flags/mexico.png")
  },
  {
    idcompet: "55",
    pays: "guatemala",
    url: require("../images/flags/guatemala.png")
  },
  {
    idcompet: "56",
    pays: "honduras",
    url: require("../images/flags/honduras.png")
  },
  {
    idcompet: "73",
    pays: "israel",
    url: require("../images/flags/israel.png")
  },
  {
    idcompet: "5",
    pays: "france",
    url: require("../images/flags/france.png")
  },
  {
    idcompet: "35",
    pays: "algeria",
    url: require("../images/flags/algeria.png")
  },
  {
    idcompet: "84",
    pays: "senegal",
    url: require("../images/flags/senegal.png")
  },
  {
    idcompet: "343",
    pays: "tunisia",
    url: require("../images/flags/tunisia.png")
  },
  {
    idcompet: "97",
    pays: "france",
    url: require("../images/flags/france.png")
  },
  {
    idcompet: "229",
    pays: "algeria",
    url: require("../images/flags/algeria.png")
  },
  {
    idcompet: "42",
    pays: "tunisia",
    url: require("../images/flags/tunisia.png")
  },
  {
    idcompet: "304",
    pays: "panama",
    url: require("../images/flags/panama.png")
  },
  {
    idcompet: "298",
    pays: "new zealand",
    url: require("../images/flags/new-zealand.png")
  },
  {
    idcompet: "76",
    pays: "usa",
    url: require("../images/flags/united-states-of-america.png")
  },
  {
    idcompet: "382",
    pays: "usa",
    url: require("../images/flags/united-states-of-america.png")
  },
  {
    idcompet: "161",
    pays: "france",
    url: require("../images/flags/france.png")
  },
  {
    idcompet: "12",
    pays: "luxembourg",
    url: require("../images/flags/luxembourg.png")
  },
  {
    idcompet: "59",
    pays: "moldova",
    url: require("../images/flags/moldova.png")
  },
  {
    idcompet: "154",
    pays: "england",
    url: require("../images/flags/england.png")
  },
  {
    idcompet: "155",
    pays: "england",
    url: require("../images/flags/england.png")
  },
  {
    idcompet: "249",
    pays: "australia",
    url: require("../images/flags/australia.png")
  },
  {
    idcompet: "174",
    pays: "hungary",
    url: require("../images/flags/hungary.png")
  },
  {
    idcompet: "250",
    pays: "australia",
    url: require("../images/flags/australia.png")
  },
  {
    idcompet: "78",
    pays: "nigeria",
    url: require("../images/flags/nigeria.png")
  },
  {
    idcompet: "204",
    pays: "norway",
    url: require("../images/flags/norway.png")
  },
  {
    idcompet: "100",
    pays: "austria",
    url: require("../images/flags/austria.png")
  },
  {
    idcompet: "385",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "19",
    pays: "hungary",
    url: require("../images/flags/hungary.png")
  },
  {
    idcompet: "255",
    pays: "brazil",
    url: require("../images/flags/brazil.png")
  },
  {
    idcompet: "302",
    pays: "pakistan",
    url: require("../images/flags/pakistan.png")
  },
  {
    idcompet: "16",
    pays: "belarus",
    url: require("../images/flags/belarus.png")
  },
  {
    idcompet: "11",
    pays: "ireland",
    url: require("../images/flags/ireland.png")
  },
  {
    idcompet: "2",
    pays: "england",
    url: require("../images/flags/england.png")
  },
  {
    idcompet: "258",
    pays: "canada",
    url: require("../images/flags/canada.png")
  },
  {
    idcompet: "7",
    pays: "russia",
    url: require("../images/flags/russia.png")
  },
  {
    idcompet: "273",
    pays: "ethiopia",
    url: require("../images/flags/ethiopia.png")
  },
  {
    idcompet: "278",
    pays: "hong kong",
    url: require("../images/flags/hong-kong.png")
  },
  {
    idcompet: "281",
    pays: "iraq",
    url: require("../images/flags/iraq.png")
  },
  {
    idcompet: "282",
    pays: "jamaica",
    url: require("../images/flags/jamaica.png")
  },
  {
    idcompet: "30",
    pays: "thailand",
    url: require("../images/flags/thailand.png")
  },
  {
    idcompet: "31",
    pays: "azerbaijan",
    url: require("../images/flags/azerbaijan.png")
  },
  {
    idcompet: "287",
    pays: "jordan",
    url: require("../images/flags/jordan.png")
  },
  {
    idcompet: "33",
    pays: "kuwait",
    url: require("../images/flags/kuwait.png")
  },
  {
    idcompet: "36",
    pays: "egypt",
    url: require("../images/flags/egypt.png")
  },
  {
    idcompet: "292",
    pays: "lebanon",
    url: require("../images/flags/lebanon.png")
  },
  {
    idcompet: "37",
    pays: "kenya",
    url: require("../images/flags/kenya.png")
  },
  {
    idcompet: "294",
    pays: "malaysia",
    url: require("../images/flags/malaysia.png")
  },
  {
    idcompet: "41",
    pays: "south-africa",
    url: require("../images/flags/south-africa.png")
  },
  {
    idcompet: "313",
    pays: "saudi-arabia",
    url: require("../images/flags/saudi-arabia.png")
  },
  {
    idcompet: "64",
    pays: "ukraine",
    url: require("../images/flags/ukraine.png")
  },
  {
    idcompet: "74",
    pays: "wales",
    url: require("../images/flags/wales.png")
  },
  {
    idcompet: "80",
    pays: "tanzania",
    url: require("../images/flags/tanzania.png")
  },
  {
    idcompet: "341",
    pays: "syria",
    url: require("../images/flags/syria.png")
  },
  {
    idcompet: "86",
    pays: "ghana",
    url: require("../images/flags/ghana.png")
  },
  {
    idcompet: "88",
    pays: "sudan",
    url: require("../images/flags/sudan.png")
  },
  {
    idcompet: "90",
    pays: "namibia",
    url: require("../images/flags/namibia.png")
  },
  {
    idcompet: "91",
    pays: "zambia",
    url: require("../images/flags/zambia.png")
  },
  {
    idcompet: "183",
    pays: "kazakhstan",
    url: require("../images/flags/kazakhstan.png")
  },
  {
    idcompet: "189",
    pays: "malta",
    url: require("../images/flags/malta.png")
  },
  {
    idcompet: "238",
    pays: "armenia",
    url: require("../images/flags/armenia.png")
  },
  {
    idcompet: "375",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "85",
    pays: "zimbabwe",
    url: require("../images/flags/zimbabwe.png")
  },
  {
    idcompet: "252",
    pays: "bahrain",
    url: require("../images/flags/bahrain.png")
  },
  {
    idcompet: "69",
    pays: "northern ireland",
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "75",
    pays: "scotland",
    url: require("../images/flags/scotland.png")
  },
  {
    idcompet: "70",
    pays: "bosnia and herzegovina",
    url: require("../images/flags/bosnia-and-herzegovina.png")
  },
  {
    idcompet: "18",
    pays: "estonia",
    url: require("../images/flags/estonia.png")
  },
  {
    idcompet: "8",
    pays: "portugal",
    url: require("../images/flags/portugal.png")
  },
  {
    idcompet: "51",
    pays: "colombia",
    url: require("../images/flags/colombia.png")
  },
  {
    idcompet: "259",
    pays: "chile",
    url: require("../images/flags/chile.png")
  },
  {
    idcompet: "265",
    pays: "colombia",
    url: require("../images/flags/colombia.png")
  },
  {
    idcompet: "233",
    pays: "argentina",
    url: require("../images/flags/argentina.png")
  },
  {
    idcompet: "96",
    pays: "argentina",
    url: require("../images/flags/argentina.png")
  },
  {
    idcompet: "234",
    pays: "argentina",
    url: require("../images/flags/argentina.png")
  },
  {
    idcompet: "235",
    pays: "argentina",
    url: require("../images/flags/argentina.png")
  },
  {
    idcompet: "277",
    pays: "guatemala",
    url: require("../images/flags/guatemala.png")
  },
  {
    idcompet: "23",
    pays: "argentina",
    url: require("../images/flags/argentina.png")
  },
  {
    idcompet: "25",
    pays: "chile",
    url: require("../images/flags/chile.png")
  },
  {
    idcompet: "299",
    pays: "nicaragua",
    url: require("../images/flags/nicaragua.png")
  },
  {
    idcompet: "46",
    pays: "venezuela",
    url: require("../images/flags/venezuela.png")
  },
  {
    idcompet: "47",
    pays: "peru",
    url: require("../images/flags/peru.png")
  },
  {
    idcompet: "48",
    pays: "uruguay",
    url: require("../images/flags/uruguay.png")
  },
  {
    idcompet: "52",
    pays: "bolivia",
    url: require("../images/flags/bolivia.png")
  },
  {
    idcompet: "53",
    pays: "costa rica",
    url: require("../images/flags/costa-rica.png")
  },
  {
    idcompet: "54",
    pays: "salvador",
    url: require("../images/flags/salvador.png")
  },
  {
    idcompet: "34",
    pays: "iran",
    url: require("../images/flags/iran.png")
  },
  {
    idcompet: "301",
    pays: "oman",
    url: require("../images/flags/oman.png")
  },
  {
    idcompet: "22",
    pays: "slovenia",
    url: require("../images/flags/slovenia.png")
  },
  {
    idcompet: "321",
    pays: "serbia",
    url: require("../images/flags/serbia.png")
  },
  {
    idcompet: "200",
    pays: "republic-of-macedonia",
    url: require("../images/flags/republic-of-macedonia.png")
  },
  {
    idcompet: "305",
    pays: "qatar",
    url: require("../images/flags/qatar.png")
  },
  {
    idcompet: "331",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "168",
    pays: "germany",
    url: require("../images/flags/germany.png")
  },
  {
    idcompet: "247",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "105",
    pays: "scotland",
    url: require("../images/flags/scotland.png")
  },
  {
    idcompet: "140",
    pays: "bulgaria",
    url: require("../images/flags/bulgaria.png")
  },
  {
    idcompet: "332",
    pays: "spain",
    url: require("../images/flags/spain.png")
  },
  {
    idcompet: "79",
    pays: "spain",
    url: require("../images/flags/spain.png")
  },
  {
    idcompet: "92",
    pays: "portugal",
    url: require("../images/flags/portugal.png")
  },
  {
    idcompet: "4",
    pays: "italy",
    url: require("../images/flags/italy.png")
  },
  {
    idcompet: "24",
    pays: "brazil",
    url: require("../images/flags/brazil.png")
  },
  {
    idcompet: "50",
    pays: "ecuador",
    url: require("../images/flags/ecuador.png")
  },
  {
    idcompet: "87",
    pays: "italy",
    url: require("../images/flags/italy.png")
  },
  {
    idcompet: "95",
    pays: "brazil",
    url: require("../images/flags/brazil.png")
  },
  {
    idcompet: "181",
    pays: "italy",
    url: require("../images/flags/italy.png")
  },
  {
    idcompet: "253",
    pays: "brazil",
    url: require("../images/flags/brazil.png")
  },
  {
    idcompet: "182",
    pays: "italy",
    url: require("../images/flags/italy.png")
  },
  {
    idcompet: "254",
    pays: "brazil",
    url: require("../images/flags/brazil.png")
  },
  {
    idcompet: "29",
    pays: "singapore",
    url: require("../images/flags/singapore.png")
  },
  {
    idcompet: "123",
    pays: "south-africa",
    url: require("../images/flags/south-africa.png")
  },
  {
    idcompet: "248",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "307",
    pays: "qatar",
    url: require("../images/flags/qatar.png")
  },
  {
    idcompet: "261",
    pays: "chile",
    url: require("../images/flags/chile.png")
  },
  {
    idcompet: "264",
    pays: "china",
    url: require("../images/flags/china.png")
  },
  {
    idcompet: "286",
    pays: "japan",
    url: require("../images/flags/japan.png")
  },
  {
    idcompet: "289",
    pays: "kenya",
    url: require("../images/flags/kenya.png")
  },
  {
    idcompet: "312",
    pays: "russia",
    url: require("../images/flags/russia.png")
  },
  {
    idcompet: "333",
    pays: "spain",
    url: require("../images/flags/spain.png")
  },
  {
    idcompet: "348",
    pays: "turkey",
    url: require("../images/flags/turkey.png")
  },
  {
    idcompet: "349",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "352",
    pays: "ukraine",
    url: require("../images/flags/ukraine.png")
  },
  {
    idcompet: "127",
    pays: "iceland",
    url: require("../images/flags/iceland.png")
  },
  {
    idcompet: "129",
    pays: "belarus",
    url: require("../images/flags/belarus.png")
  },
  {
    idcompet: "137",
    pays: "belgium",
    url: require("../images/flags/belgium.png")
  },
  {
    idcompet: "139",
    pays: "bulgaria",
    url: require("../images/flags/bulgaria.png")
  },
  {
    idcompet: "143",
    pays: "cyprus",
    url: require("../images/flags/cyprus.png")
  },
  {
    idcompet: "156",
    pays: "estonia",
    url: require("../images/flags/estonia.png")
  },
  {
    idcompet: "160",
    pays: "france",
    url: require("../images/flags/france.png")
  },
  {
    idcompet: "169",
    pays: "germany",
    url: require("../images/flags/germany.png")
  },
  {
    idcompet: "176",
    pays: "hungary",
    url: require("../images/flags/hungary.png")
  },
  {
    idcompet: "178",
    pays: "italy",
    url: require("../images/flags/italy.png")
  },
  {
    idcompet: "186",
    pays: "lithuania",
    url: require("../images/flags/lithuania.png")
  },
  {
    idcompet: "192",
    pays: "moldova",
    url: require("../images/flags/moldova.png")
  },
  {
    idcompet: "197",
    pays: "netherlands",
    url: require("../images/flags/netherlands.png")
  },
  {
    idcompet: "205",
    pays: "norway",
    url: require("../images/flags/norway.png")
  },
  {
    idcompet: "208",
    pays: "poland",
    url: require("../images/flags/poland.png")
  },
  {
    idcompet: "211",
    pays: "portugal",
    url: require("../images/flags/portugal.png")
  },
  {
    idcompet: "215",
    pays: "ireland",
    url: require("../images/flags/ireland.png")
  },
  {
    idcompet: "219",
    pays: "romania",
    url: require("../images/flags/romania.png")
  },
  {
    idcompet: "236",
    pays: "argentina",
    url: require("../images/flags/argentina.png")
  },
  {
    idcompet: "328",
    pays: "south-africa",
    url: require("../images/flags/south-africa.png")
  },
  {
    idcompet: "9",
    pays: "greece",
    url: require("../images/flags/greece.png")
  },
  {
    idcompet: "15",
    pays: "switzerland",
    url: require("../images/flags/switzerland.png")
  },
  {
    idcompet: "26",
    pays: "china",
    url: require("../images/flags/china.png")
  },
  {
    idcompet: "290",
    pays: "kenya",
    url: require("../images/flags/kenya.png")
  },
  {
    idcompet: "293",
    pays: "malaysia",
    url: require("../images/flags/malaysia.png")
  },
  {
    idcompet: "81",
    pays: "uganda",
    url: require("../images/flags/uganda.png")
  },
  {
    idcompet: "94",
    pays: "malawi",
    url: require("../images/flags/malawi.png")
  },
  {
    idcompet: "6",
    pays: "turkey",
    url: require("../images/flags/turkey.png")
  },
  {
    idcompet: "62",
    pays: "serbia",
    url: require("../images/flags/serbia.png")
  },
  {
    idcompet: "296",
    pays: "mexico",
    url: require("../images/flags/mexico.png")
  },
  {
    idcompet: "336",
    pays: "sweden",
    url: require("../images/flags/sweden.png")
  },
  {
    idcompet: "40",
    pays: "denmark",
    url: require("../images/flags/denmark.png")
  },
  {
    idcompet: "184",
    pays: "kosovo",
    url: require("../images/flags/kosovo.png")
  },
  {
    idcompet: "376",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "21",
    pays: "montenegro",
    url: require("../images/flags/montenegro.png")
  },
  {
    idcompet: "170",
    pays: "germany",
    url: require("../images/flags/germany.png")
  },
  {
    idcompet: "232",
    pays: "argentina",
    url: require("../images/flags/argentina.png")
  },
  {
    idcompet: "237",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "377",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "354",
    pays: "united arab emirates",
    url: require("../images/flags/united-arab-emirates.png")
  },
  {
    idcompet: "387",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "274",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "350",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "378",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "383",
    pays: "usa",
    url: require("../images/flags/united-states-of-america.png")
  },
  {
    idcompet: "10",
    pays: "iceland",
    url: require("../images/flags/iceland.png")
  },
  {
    idcompet: "118",
    pays: "usa",
    url: require("../images/flags/united-states-of-america.png")
  },
  {
    idcompet: "384",
    pays: "usa",
    url: require("../images/flags/united-states-of-america.png")
  },
  {
    idcompet: "39",
    pays: "vietnam",
    url: require("../images/flags/vietnam.png")
  },
  {
    idcompet: "380",
    pays: "vietnam",
    url: require("../images/flags/vietnam.png")
  },
  {
    idcompet: "57",
    pays: "finland",
    url: require("../images/flags/finland.png")
  },
  {
    idcompet: "251",
    pays: "australia",
    url: require("../images/flags/australia.png")
  },
  {
    idcompet: "20",
    pays: "latvia",
    url: require("../images/flags/latvia.png")
  },
  {
    idcompet: "201",
    pays: "republic-of-macedonia",
    url: require("../images/flags/republic-of-macedonia.png")
  },
  {
    idcompet: "104",
    pays: "wales",
    url: require("../images/flags/wales.png")
  },
  {
    idcompet: "303",
    pays: "palestine",
    url: require("../images/flags/palestine.png")
  },
  {
    idcompet: "358",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "359",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "360",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "361",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "365",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "364",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "363",
    pays: null,
    url: require("../images/flags/null.png")
  },
  {
    idcompet: "158",
    pays: "finland",
    url: require("../images/flags/finland.png")
  }
];
