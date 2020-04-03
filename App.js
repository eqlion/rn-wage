import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

// import { store, persistor } from "./src/store";
import store from "./src/store";
import ProviderContainer from "./src/containers/ProviderContainer";
// import { Text } from "react-native";
// import * as Localization from "expo-localization";
// import i18n from "i18n-js";

// // Set the key-value pairs for the different languages you want to support.
// i18n.translations = {
//     en: { welcome: "Hello", name: "Charlie" },
//     ja: { welcome: "こんにちは" }
// };
// // Set the locale once at the beginning of your app.
// i18n.locale = Localization.locale;
// // When a value is missing from a language it'll fallback to another language with the key present.
// i18n.fallbacks = true;

export default App = () => (
    <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <ProviderContainer />
        {/* </PersistGate> */}
    </Provider>
);
