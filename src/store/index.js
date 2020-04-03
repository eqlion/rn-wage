import { createStore, applyMiddleware } from "redux";
import { AsyncStorage } from "react-native";
import { persistStore, persistReducer } from "redux-persist";

import rootReducer from "../reducers";

// const persistConfig = {
//     key: "@rn-wage",
//     storage: AsyncStorage,
//     blacklist: ["screen"]
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(persistedReducer);

// let persistor = persistStore(store);

// export { store, persistor };

export default createStore(rootReducer);
