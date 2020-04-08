import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

import moment from "moment";
import momentRU from "moment/locale/ru";
import momentEN from "moment/locale/en-gb";
import i18n from "./src/i18n";

import { store, persistor } from "./src/store";
import ProviderContainer from "./src/containers/ProviderContainer";

if (i18n.locale.split("-")[0] === "ru") {
    moment.updateLocale("ru", momentRU);
} else {
    moment.updateLocale("en", momentEN);
}

export default App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ProviderContainer />
        </PersistGate>
    </Provider>
);
