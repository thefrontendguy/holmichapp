var lang = navigator.language;
var language = lang.substring(0, 2);
if (language != ("de")) { language = "en" }
var region = lang.substring(3, 5);

export const localization = {
    language: "&language=en",
    region: "&region=EN",
    lang: "en_EN",
    units: " km"
}

localization.language = language ? language : localization.language;
localization.region = region ? region : localization.region;