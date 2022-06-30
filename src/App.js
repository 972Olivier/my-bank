import "./App.css";
import Header from "./components/Header";
import data from "./assets/data.json";
import Accouts from "./components/Accounts";

function App() {
  return (
    <div className="App">
      <Header></Header>
      {data.map((element) => {
        return <Accouts accounts={element}></Accouts>;
      })}
    </div>
  );
}

export default App;
