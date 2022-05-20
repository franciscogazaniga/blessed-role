import { Header } from "./components/Header";
import { Recents } from "./components/Recents";
import { SearchBar } from "./components/SearchBar";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <Recents />
      <GlobalStyle />
    </>
  );     
}
