import { useContext } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionsData";
export default function Score() {
  const { score, setAppState, setScore } = useContext(DataContext);
  const restartApp = () => {
    setAppState("menu");
    setScore(0);
  };

  return (
    <>
      <div className="score">
        <h1>สรุปผลคะแนน</h1>
        <h2>
          {score} / {QuestionsData.length}
        </h2>
        <button onClick={restartApp}>ทำแบบทดสอบอีกครั้ง</button>
      </div>
    </>
  );
}
