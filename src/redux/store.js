import { configureStore } from "@reduxjs/toolkit";
import { contactsApi, filterToolKit } from "./contactsSlice";
import { authtion, authApi } from "./authSlice";
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
  storage,
};

const persisedToken = persistReducer(persistConfig, authtion);

export const store = configureStore({
  reducer: {
    filter: filterToolKit,
    auth: persisedToken,
    [authApi.reducerPath]: authApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(contactsApi.middleware)
      .concat(authApi.middleware),
});

export const persistor = persistStore(store);
