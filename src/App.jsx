import { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import Definitions from "./components/Definitions";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");

  const disctionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      // console.log(data);
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);

  useEffect(() => {
    disctionaryApi();
  }, [word, category]);
  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "black", color: "yellow" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        {meanings && (<Definitions word={word} meanings={meanings} category={category}/>)}
      </Container>
    </div>
  );
}

export default App;
