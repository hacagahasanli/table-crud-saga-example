import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

export const getUsersAPI = async () => instance.get("/users");

export const getUserByIdAPI = async (id) => instance.get(`/users:${id}`);

export const createUserAPI = async (user) => instance.post(`/users`, user);

export const updateUserAPI = async (user) =>
instance.put(`/users/${user.id}`, user);

export const deleteUserByIdAPI = async (id) => instance.delete(`/users/${id}`);
