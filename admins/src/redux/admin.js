import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import produkReducer from "./productRedux";
import customersReducer from "./customerRedux";
import resellersReducer from "./resellerRedux";
import categorysReducer from "./categoryRedux";
import produkoutsReducer from "./productoutRedux";
import produkinsReducer from "./productinRedux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  prodak: produkReducer,
  customer: customersReducer,
  reseller: resellersReducer,
  category: categorysReducer,
  produkout: produkoutsReducer,
  produkin: produkinsReducer,
});

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
