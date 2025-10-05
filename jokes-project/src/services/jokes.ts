import { http } from "../services/http";

export type Joke = { joke: string };

export async function getOneJoke(): Promise<Joke> {
    const res = await http.get<Joke>("");
    return res.data;
}