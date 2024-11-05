import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: "ko",
    fallbackLng: "ko",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: ["booth-detail", "booth-list", "history", "waiting-success"],
    defaultNS: ["booth-list"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
