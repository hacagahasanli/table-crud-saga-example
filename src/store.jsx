import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { users } from "./redux/slice/users";
import { user } from "./redux/slice/user";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = {
  user,
  users,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      sagaMiddleware
    ),
  // or instead  applyMiddleware(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;
