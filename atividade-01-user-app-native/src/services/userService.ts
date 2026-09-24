import { User } from "../types/User";
import { api } from "./api";

export async function getUsers() {
    const response = await api.get<User[]>("/users");
    return response.data;
}