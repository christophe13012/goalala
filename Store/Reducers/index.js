import { SET_INTERVAL, TOGGLE_COMPETITIONS } from "../action-types/constants";
import { SET_MATCH_ID_FAVORI } from "../action-types/constants";
import { MATCHES_API } from "../action-types/constants";

const initialState = {
  interval: 60,
  matchesAPI: [],
  matchIdFavori: [],
  competitions: [
    132,
    216,
    344,
    345,
    346,
    242,
    246,
    227,
    228,
    226,
    366,
    240,
    241,
    367,
    368,
    222,
    369,
    268,
    300,
    223,
    243,
    244,
    370,
    267,
    269,
    224,
    271,
    329,
    330,
    225,
    272,
    347,
    131,
    159,
    245,
    217,
    372,
    270,
    362,
    371,
    266,
    386,
    164,
    130,
    373,
    374,
    218,
    385,
    11,
    36,
    183,
    375,
    331,
    247,
    248,
    348,
    349,
    215,
    6,
    376,
    237,
    377,
    387,
    274,
    350,
    378,
    57,
    358,
    359,
    360,
    361,
    365,
    364,
    363,
    158,
    230,
    231,
    233,
    96,
    234,
    235,
    23,
    236,
    232,
    35,
    229,
    76,
    382,
    383,
    118,
    384,
    48,
    356,
    355,
    357,
    354,
    353,
    115,
    64,
    352,
    343,
    42,
    339,
    338,
    340,
    15,
    14,
    335,
    337,
    336,
    334,
    3,
    332,
    79,
    333,
    324,
    114,
    63,
    113,
    321,
    62,
    309,
    310,
    311,
    7,
    312,
    112,
    221,
    61,
    220,
    219,
    306,
    305,
    307,
    214,
    212,
    213,
    8,
    92,
    211,
    207,
    206,
    13,
    204,
    205,
    103,
    203,
    69,
    199,
    196,
    198,
    197,
    38,
    98,
    117,
    45,
    296,
    188,
    12,
    285,
    28,
    283,
    284,
    286,
    179,
    180,
    4,
    87,
    181,
    182,
    178,
    109,
    177,
    73,
    173,
    171,
    172,
    9,
    93,
    166,
    1,
    167,
    168,
    169,
    170,
    162,
    163,
    5,
    97,
    161,
    160,
    77,
    149,
    150,
    151,
    152,
    153,
    82,
    83,
    154,
    155,
    2,
    147,
    148,
    102,
    40,
    72,
    145,
    146,
    108,
    17,
    141,
    142,
    262,
    263,
    264,
    26,
    107,
    71,
    140,
    139,
    256,
    255,
    24,
    95,
    253,
    254,
    99,
    68,
    136,
    137
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case MATCHES_API:
      return { ...state, matchesAPI: action.payload };
    case SET_INTERVAL:
      return { ...state, interval: action.payload };
    case SET_MATCH_ID_FAVORI:
      let matchIdFavori = [...state.matchIdFavori];
      if (matchIdFavori.includes(action.payload)) {
        matchIdFavori = matchIdFavori.filter(id => id !== action.payload);
      } else {
        matchIdFavori.push(action.payload);
      }
      return { ...state, matchIdFavori };
    case TOGGLE_COMPETITIONS:
      let competitions = [...state.competitions];
      if (competitions.includes(action.payload[0])) {
        competitions = competitions.filter(
          compet => !action.payload.includes(compet)
        );
      } else {
        competitions = [...competitions, ...action.payload];
      }
      return { ...state, competitions };
    default:
      return state;
  }
};

export default rootReducer;
