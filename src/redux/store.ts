import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import userSlice from "./features/userSlice";

// Combine reducers
const rootReducer = combineReducers({
  user: userSlice,
});

// Configure persist options
const persistConfig = {
  key: "root",
  storage,
  // We add here what does not change frequently
  whitelist: ["user"],
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Create Redux persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
