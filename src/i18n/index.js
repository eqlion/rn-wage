import * as Localization from "expo-localization";
import i18n from "i18n-js";

import ru from "./locales/ru.json";
import en from "./locales/en.json";

const deviceLocale =
    Localization.locale.indexOf("-") !== 0
        ? Localization.locale.split("-")[0]
        : Localization.locale;

i18n.defaultLocale = deviceLocale === "ru" ? deviceLocale : "en";
i18n.locale = deviceLocale === "ru" ? deviceLocale : "en";

i18n.fallbacks = true;
i18n.locale = Localization.locale;
i18n.translations = { ru, en };

export default i18n;
