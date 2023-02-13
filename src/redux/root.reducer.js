import { combineReducers } from "redux";
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import boxitemsReducer from "./boxitems/boxitems.reducer";
import infoboxReducer from "./infobox/infobox.reducer";
import eventsReducer from "./events/events.reducer";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}


const rootReducer = combineReducers({
    boxitems: boxitemsReducer,
    infobox: infoboxReducer,
    events: eventsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;






