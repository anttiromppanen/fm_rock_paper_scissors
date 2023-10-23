import { useState } from "react";
import logo from "./assets/images/logo-bonus.svg";
import GameView from "./components/GameView/GameView";
import ResultView from "./components/ResultView/ResultView";
import useGameStore from "./store/useGameStore";

function App() {
  const score = useGameStore((state) => state.score);
  const [valueSelected, setValueSelected] = useState(false);
  return (
    <main className="bg-userRadialBg h-[100dvh] md:h-screen">
      <div className="px-8 pt-10">
        <header
          className="
          border-userHeaderOutline mb-32 flex items-center justify-between rounded-lg border-2 p-3 pl-6"
        >
          <img src={logo} alt="Logo" className="h-[57px] w-[57px]" />
          <div className="flex w-24 flex-col items-center justify-center rounded-lg bg-white py-3">
            <p className="text-userScoreText text-sm">SCORE</p>
            <p className="text-userDarkText text-5xl font-bold">{score}</p>
          </div>
        </header>
        {valueSelected ? (
          <ResultView setValueSelected={setValueSelected} />
        ) : (
          <GameView setValueSelected={setValueSelected} />
        )}
      </div>
    </main>
  );
}

export default App;
