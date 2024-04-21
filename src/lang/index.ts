import { createI18n } from "vue-i18n";
import * as arMessage from "./ar.json";
import * as enMessage from "./en.json";
import cookie from "js-cookie";
const messages = {
  en: {
    ...enMessage,
  },
  ar: {
    ...arMessage,
  },
};
if (cookie.get("locale")) {
  document.documentElement.lang = cookie.get("locale") as any;
} else {
  document.documentElement.lang = "en";
  cookie.set("locale", "en");
}
export const i18n = createI18n({
  legacy: false,
  locale: cookie.get("locale") || "en",
  fallbackLocale: "en",
  availableLocales: ["ar", "en"],
  messages,
});
