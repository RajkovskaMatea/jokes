import { useEffect, useState } from "react";
import { getOneJoke, type Joke } from "../services/jokes";
import { Page, Card, Title, Quote, Row, Btn, Danger, Loading, JokeArea, Spinner } from "./Jokes.styles";

const BLOCKED: string[] = ["Hacking", "sex", "Nicole Kidman", "Chuck Norris", " l41d"];

export async function fetchCleanJoke(BLOCKED: string[], maxTries = 20): Promise<Joke> {
    let lastErr: unknown;
    for (let i = 0; i < maxTries; i++) {
        try {
            const j = await getOneJoke();
            const jokeText = j.joke.toLowerCase();
            const isBlocked = BLOCKED.some(w => jokeText.includes(w.toLowerCase()));
            if (!isBlocked) return j;
        } catch (e) {
            lastErr = e;
        }
    }
    throw (lastErr as Error) ?? new Error("Couldn't find an allowed joke after several tries.");
}

export default function Jokes() {
    const [jokes, setJokes] = useState<Joke[]>([]);
    const [idx, setIdx] = useState(0);
    const [initialLoading, setInitialLoading] = useState(true);
    const [nextLoading, setNextLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);

    async function loadInitial() {
        try {
            setInitialLoading(true);
            setErr(null);
            const joke = await fetchCleanJoke(BLOCKED);
            setJokes([joke]);
            setIdx(1);
        } catch (e: any) {
            setErr(e.message ?? "Failed to load joke");
        } finally {
            setInitialLoading(false);
        }
    }
    async function loadNext() {
        if (nextLoading) return;
        setNextLoading(true);
        setErr(null);
        try {
            const j = await fetchCleanJoke(BLOCKED);
            setJokes(prev => {
                if (prev.length && prev[prev.length - 1].joke === j.joke) return prev;
                return [...prev, j];
            });
            setIdx(i => i + 1);
        } catch (e: any) {
            setErr(e.message ?? "Failed to load next joke");
        } finally {
            setNextLoading(false);
        }
    }

    useEffect(() => {
        loadInitial();
    }, []);

    const current = jokes[idx - 1];

    return (
        <Page>
            <Card>
                <Title>Geek Jokes</Title>

                {initialLoading && <Loading>Loading…</Loading>}
                {err && <Danger>Error: {err}</Danger>}

                {!initialLoading && current && (
                    <>
                        <JokeArea>
                            <Quote>{current.joke}</Quote>
                        </JokeArea>
                        <Row>
                            <Btn onClick={() => setIdx((i) => Math.max(1, i - 1))} disabled={idx <= 1 || nextLoading}>
                                ◀ Prev
                            </Btn>
                            <Btn onClick={loadNext} disabled={nextLoading}>
                                {nextLoading ? <Spinner aria-label="Loading next" /> : "Next ▶"}
                            </Btn>
                        </Row>
                    </>
                )}
            </Card>
        </Page>
    );
}