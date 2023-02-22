import {
  getUsersAPI,
  getUserByIdAPI,
  deleteUserByIdAPI,
  updateUserAPI,
  createUserAPI,
} from "../../apis";
import { getUsers, addUser, editUser, deleteUser } from "../slice/users";

import {
  GET_USERS,
  GET_USERS_BY_ID,
  CREATE_USER,
  UPDATE_USER_BY_ID,
  DELETE_USER_BY_ID,
} from "./types";

import { takeLatest, call, put } from "redux-saga/effects";

export const getUsersSaga = function* () {
  const { data } = yield getUsersAPI();
  yield put(getUsers(data));
};

export const getUserByIdSaga = function* (action) {
  yield getUserByIdAPI(action.id);
  yield put(setUser(action.id));
};

export const createUserSaga = function* (action) {
  const data = action.payload;
  yield createUserAPI(data);
  yield put(addUser(data));
};

export const updateUserSaga = function* (action) {
  const updatedUser = action.payload;
  yield updateUserAPI(updatedUser);
  yield put(editUser(updatedUser));
};

export const deleteUserSaga = function* (action) {
  const id = action.payload;
  yield deleteUserByIdAPI(id);
  yield put(deleteUser(id));
};

export const watchUsersAsync = function* () {
  yield takeLatest(GET_USERS, getUsersSaga);
  yield takeLatest(GET_USERS_BY_ID, getUserByIdSaga);
  yield takeLatest(CREATE_USER, createUserSaga);
  yield takeLatest(UPDATE_USER_BY_ID, updateUserSaga);
  yield takeLatest(DELETE_USER_BY_ID, deleteUserSaga);
};
