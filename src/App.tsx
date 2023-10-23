import { useState } from "react";
import GameView from "./components/GameView/GameView";
import ResultView from "./components/ResultView/ResultView";

function App() {
  const [valueSelected, setValueSelected] = useState(false);
  return (
    <main className="bg-userRadialBg h-[100dvh] md:h-screen">
      <div className="h-60" />
      {valueSelected ? (
        <ResultView setValueSelected={setValueSelected} />
      ) : (
        <GameView setValueSelected={setValueSelected} />
      )}
    </main>
  );
}

export default App;
