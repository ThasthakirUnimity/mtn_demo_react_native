const cmsJson = {
  "COLOR": {
    "PRIMARY": "#E60000",
    "DEFAULT": "#4C4D4F",
    "BG": "#FFFDFC",
    "NEWS_BG": "#F3F3F3",
    "GOLD": "#EAB900",
    "BLUE": "#7AC2E4",
    "BUTTON_TEXT": "#FFFFFF",
    "BLACK": "#000000",
    "DARK": "#4C4D4F",
    "DARK_2": "#4C4D4F",
    "LIGHT": "#FFFFFF",
    "SMOKE": "#F7FFFF",
    "SMOKE_DARK": "#E7E7E7",
    "SMOKE_DARK2": "#D9DBE2",
    "SMOKE_DARK3": "#D2D2DE",
    "GREY": "#666666",
    "GREY_LIGHT": "#999999",
    "GREY_DARK": "#333333",
    "SUCCESS": "#198754",
    "WARNING": "#FFC107",
    "ERROR": "#DF002C",
    "SHADOW": "#CCCCCC",
    "SECONDARY": "#CC0000",
    "PRIMARY_LIGHT": "#e28c8c",
    "LIGHT_YELLOW": "#FFF9E6",
    "LIGHT_GREEN": "#E8F5E9",
    "LIGHT_BLUE": "#E3F2FD",
    "LIGHT_ORANGE": "#FFF3E0"

  },

  "FAMILY": {
    "MTN_LIGHT": "MTNBrighterSans-Light",
    "MTN_REGULAR": "MTNBrighterSans-Regular",
    "MTN_MEDIUM": "MTNBrighterSans-Medium",
    "MTN_BOLD": "MTNBrighterSans-Bold",
    "MTN_EXTRA_BOLD": "MTNBrighterSans-ExtraBold",
    "MTN_EXTRA_LIGHT": "MTNBrighterSans-ExtraLight"

  },

  "SIZE": {
    "SIZE_8": 8,
    "SIZE_10": 10,
    "SIZE_12": 12,
    "SIZE_14": 14,
    "SIZE_16": 16,
    "SIZE_18": 18,
    "SIZE_20": 20,
    "SIZE_22": 22,
    "SIZE_24": 24,
    "SIZE_26": 26,
    "SIZE_28": 28,
    "SIZE_30": 30,
    "SIZE_32": 32,
    "SIZE_34": 34,
    "SIZE_36": 36,
    "SIZE_38": 38,
    "SIZE_40": 40,
    "SIZE_46": 46,
    "SIZE_52": 52,
    "SIZE_64": 64,
    "SIZE_72": 72,
    "SIZE_86": 86,
    "SIZE_128": 128
  },

  "CURRENCY": {
    "SYMBOL": "QR",
    "CURRENCY": "QAR"
  },

  "APP_DETAILS": {
    "APP_NAME": "Qatar",
    "APP_NAME_PREFIX": "My ",
    "APP_WALLET_NAME": "Wallet"
  },
  "GRADIENT_COLOURS": {
    "COLOR_1": "#150983",
    "COLOR_2": "#243474",
    "COLOR_3": "#4720a2"
  },
  "LOGIN_CAROUSEL": [
    {
      "id": "1",
      "IMAGE": "https://selfcarecmsqatar.betabasket.net/sites/default/files/2026-07/carousel_1.png",
      "TITLE": "RECHARGE &\nPAY BILLS"
    },
    {
      "id": "2",
      "TITLE": "carousel_2",
      "IMAGE": "https://selfcarecmsqatar.betabasket.net/sites/default/files/2026-07/carousel_2.png"
    },
    {
      "id": "3",
      "IMAGE": "https://selfcarecmsqatar.betabasket.net/sites/default/files/2026-07/carousel_3.png",
      "TITLE": "EARN CASHBACK\nREWARDS"
    }
  ]
}

export const COLOR = { ...cmsJson.COLOR };
export const FAMILY = { ...cmsJson.FAMILY };
export const SIZE = { ...cmsJson.SIZE };
export const CURRENCY = { ...cmsJson.CURRENCY };
export const APP_DETAILS = { ...cmsJson.APP_DETAILS };
export const GRADIENT_COLOURS = { ...cmsJson.GRADIENT_COLOURS };
export const LOGIN_CAROUSEL = [...cmsJson.LOGIN_CAROUSEL];