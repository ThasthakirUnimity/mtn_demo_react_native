export const isProduction = __DEV__;

const server = "DEV"; // DEV, UAT

let apiUrl = "";
let cmsUrl = "";

// if (server === "DEV") {
//   apiUrl = "http://125.16.139.20:8448";
//   cmsUrl = "http://125.16.139.20:81";
// } else if (server === "UAT") {
//   apiUrl = "http://125.16.139.20:3451";
//   cmsUrl = "http://125.16.139.20:3450";
// }
// 8197621972


// apiUrl = 'http://125.16.139.20:3451';
// apiUrl = "https://nodeudxpnextgen.sandboxing.tech";
// cmsUrl = "https://cmsudxpnextgen.sandboxing.tech"; 
apiUrl = "https://selfcare.betabasket.net";
cmsUrl = "https://selfcarecms.betabasket.net";
//cmsUrl = "http://125.16.139.20:3450";

/* NODE API */
export const API_URL = apiUrl;

/* CMS API */
export const CMS_API_URL = cmsUrl;

export const CMS_API_TOKEN =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3ODQwMzIxMDYsImV4cCI6MTc4NjYyNDEwNiwiZHJ1cGFsIjp7InVpZCI6IjExIn19.T8WvCBwfRYDKUjoRwznEXuVMvu9f9iRC29i8_8W2iWM";

/* MOVIE API */
export const MOVIE_API_URL = "https://api.themoviedb.org";
export const MOVIE_API_TOKEN = "5f59d0a1176bed342ac8d94b1048f04a";
export const MOVIE_ASSET_PATH = "https://image.tmdb.org/t/p/w300";

/* MUSIC API */
export const MUSIC_API_URL = "https://spotify23.p.rapidapi.com";
export const MUSIC_API_HOST = "spotify23.p.rapidapi.com";
export const MUSIC_API_TOKEN =
  "5c141a18e4msh6c54b18b2e1fd54p19b64ajsnbee3db9babdd";

/* NEWS API */
// export const NEWS_API_URL = 'http://api.mediastack.com'
// export const NEWS_API_TOKEN = '496568a4e2f02930f19ff8d277641181'
export const NEWS_API_URL = "https://newsapi.org";
export const NEWS_API_TOKEN = "debe25a0c5a240d084ee004a64f09681";

/* ZOHO API */
// export const ZOHO_ANDROID_APP_KEY =
//   "wXU%2BuAurtKxQ%2Fh%2B6ixjfwD6y4a89SqQTE8IA0L0udBo%3D";
// export const ZOHO_ANDROID_ACCESS_KEY =
//   "QB1mV683eJnXeJpty2dUHRUaHfKsuLrluZTCZSH2lfOKQxdOigFMtQMBLIs0rFChh%2FTaVgl1VB2Swe0vssYw%2BTAeepdr%2FUbd2HurqqqQIA3f0i6OiJnnRWZrPfpLPYH%2B1Rsf%2F5uUfsYWwfeubBTVVQ%3D%3D";

export const ZOHO_ANDROID_APP_KEY = "3mRXnfuI9HjDH8lsyyEUNAeV0rbX1NMOvysT3Bfoptk%3D";
export const ZOHO_ANDROID_ACCESS_KEY = "X5D0o%2BVfZEny8Eu6YcjkdSPuaZfjCugaGAxUfxRsj28OzKCbSxavO9vLeq8Ep0NQMTJVtrh96nxorVqaYoWcikzgdtJPYKDc14W%2FQQ09tf%2FuA1ekB8CQsmRApZi%2FM3OoAT2GHadLgk9eYOROf2s10iPwVNbg7ejK";


export const ZOHO_IOS_APP_KEY =
  "3mRXnfuI9HjDH8lsyyEUNAeV0rbX1NMOvysT3Bfoptk%3D";
export const ZOHO_IOS_ACCESS_KEY =
  "X5D0o%2BVfZEny8Eu6YcjkdSPuaZfjCugaGAxUfxRsj28OzKCbSxavO9vLeq8Ep0NQ74k1%2FQllLeiOMXUrdzUJzcEw5aHefj6UpFnX0PjEcxvuA1ekB8CQsmRApZi%2FM3OoAT2GHadLgk9eYOROf2s10iPwVNbg7ejK";

export const DEBOUNCE_EVENT_DURATION = 1000;
export const THROTTLE_EVENT_DURATION = 1000;

/* GAMIFICATION */

export const GAMIFICATION_PRODUCT_ID = "654e153054d0e71480e98455";

/* GAME API */

export const GAME_API_URL = "https://gamification.comviva.com/v3";

export const FLUTTERWAVE_PUBLIC_KEY =
  "FLWPUBK_TEST-0f681d304c840c40c28212984b0ed9c5-X";


export const MOCK_API_URL = 'https://mockocsapi.sandboxing.tech'


export const MOCK_NEWAPI_URL = 'https://ipacsent.sandboxing.tech'

export const MOCK_NEWAPI2_URL = 'https://ipacsselfcare.sandboxing.tech'