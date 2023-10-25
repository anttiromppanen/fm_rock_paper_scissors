import { AnimatePresence, Variants, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import logo from "./assets/images/logo-bonus.svg";
import GameView from "./components/GameView/GameView";
import ResultView from "./components/ResultView/ResultView";
import useGameStore from "./store/useGameStore";

const gameViewVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.5,
    transition: { duration: 0.5 },
  },
  show: {},
};

function App() {
  const score = useGameStore((state) => state.score);
  const valueSelected = useGameStore((state) => state.valueSelected);
  const [debouncedScore, setDebouncedScore] = useState(score);
  const initialRender = useRef(true);

  // add delay for score update
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return setDebouncedScore(score);
    }
    setTimeout(() => {
      setDebouncedScore(score);
    }, 3900);

    return undefined;
  }, [initialRender, score]);

  return (
    <main className="h-[100dvh] overflow-hidden bg-userRadialBg md:h-screen">
      <div className="px-8 pt-10">
        <header
          className="
          flex items-center justify-between rounded-lg border-2 border-userHeaderOutline p-3 pl-6"
        >
          <img src={logo} alt="Logo" className="h-[57px] w-[57px]" />
          <div className="flex w-24 flex-col items-center justify-center rounded-lg bg-white py-3">
            <p className="text-sm text-userScoreText">SCORE</p>
            <p className="text-4xl font-bold text-userDarkText">
              {debouncedScore}
            </p>
          </div>
        </header>
        <AnimatePresence>
          {valueSelected ? (
            <ResultView />
          ) : (
            <motion.div
              key="gameView"
              exit="hidden"
              variants={gameViewVariants}
            >
              <GameView />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default App;
