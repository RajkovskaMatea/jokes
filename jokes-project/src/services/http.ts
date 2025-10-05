import axios from "axios";

export const http = axios.create({
    baseURL: import.meta.env.VITE_JOKES_URL,
    headers: { Accept: "application/json" },
});