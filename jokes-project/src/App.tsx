import Jokes from "./components/Jokes";
import { GlobalStyle } from "./components/Jokes.styles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Jokes />
    </>
  );
}