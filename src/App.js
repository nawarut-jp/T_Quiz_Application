import { createContext, useState } from "react";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import Score from "./components/Score";
import "./App.css";
export const DataContext = createContext(); //state global
function App() {
  const [appState, setAppState] = useState("menu");//  state global
  const [score, setScore] = useState(0);//  state global
  return (
   <DataContext.Provider value={{ appState, setAppState, score, setScore }}>    
      <div className="App">
        <h1>แบบทดสอบก่อนเรียน</h1>
        {appState === "menu" && <Menu />}
        {appState === "quiz" && <Quiz />}
        {appState === "score" && <Score />}
      </div>
    </DataContext.Provider>
  );
}

export default App;
