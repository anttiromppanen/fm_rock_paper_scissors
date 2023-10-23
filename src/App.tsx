import { useState } from "react";
import GameView from "./components/GameView/GameView";
import ResultView from "./components/ResultView/ResultView";
import useGameStore from "./store/useGameStore";

function App() {
  const score = useGameStore((state) => state.score);
  const [valueSelected, setValueSelected] = useState(false);
  return (
    <main className="bg-userRadialBg h-[100dvh] md:h-screen">
      <div className="h-60">
        <div className="h-full w-full items-center justify-center text-center">
          <h1 className="text-4xl text-white">{score}</h1>
        </div>
      </div>
      {valueSelected ? (
        <ResultView setValueSelected={setValueSelected} />
      ) : (
        <GameView setValueSelected={setValueSelected} />
      )}
    </main>
  );
}

export default App;
