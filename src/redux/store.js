import { legacy_createStore as createStore, applyMiddleware } from "redux";
// Use configureStore instead of createStore. Used it for learning purposes
import { persistStore } from "redux-persist"

import logger from "redux-logger";

// import rootReducer from "./root-reducer";

const middlewares = [logger]

const store = createStore( applyMiddleware(...middlewares))
// Remember to add rootreducer up when it is time to do so.

const persistor = persistStore(store)

export { store, persistor };