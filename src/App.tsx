import { AnimatePresence, Variants, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import RulesInfo from "./components/RulesInfo";
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

const rulesMenuOverlayVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

function App() {
  const score = useGameStore((state) => state.score);
  const valueSelected = useGameStore((state) => state.valueSelected);
  const [debouncedScore, setDebouncedScore] = useState(score);
  const [rulesMenuOpen, setRulesMenuOpen] = useState(false);
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

  const handleMenuClose = () => setRulesMenuOpen(false);

  return (
    <main className="no-scrollbar::-webkit-scrollbar no-scrollbar min-h-[100dvh] overflow-x-hidden bg-userRadialBg md:min-h-screen">
      <AnimatePresence>
        {rulesMenuOpen && (
          <motion.button
            type="button"
            variants={rulesMenuOverlayVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={() => setRulesMenuOpen(false)}
            className="fixed left-0 top-0 z-20 h-full w-full bg-black/70"
          />
        )}
      </AnimatePresence>
      <div className="px-8 pt-10">
        <header
          className="
          relative z-10 mx-auto flex max-w-[702px] items-center justify-between rounded-lg border-2
          border-userHeaderOutline p-3 pl-6 md:px-6 md:pb-4 md:pt-5"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-[57px] w-[57px] md:h-[110px] md:w-[110px]"
          />
          <div
            className="
              flex w-24 flex-col items-center justify-center rounded-lg bg-white py-3 
              md:h-[110px] md:w-[150px]"
          >
            <p className="text-sm tracking-widest text-userScoreText md:text-base">
              SCORE
            </p>
            <p className="text-4xl font-bold tracking-widest text-userDarkText md:text-6xl">
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
      <button
        type="button"
        onClick={() => setRulesMenuOpen(true)}
        className="
          fixed bottom-14 left-1/2 w-fit -translate-x-1/2 rounded-xl border border-white/60 px-8 py-2
          tracking-widest text-white/90 hover:bg-white hover:text-userDarkText
          md:bottom-8 md:left-auto md:right-8 md:translate-x-0 md:px-10"
      >
        RULES
      </button>
      <AnimatePresence>
        {rulesMenuOpen && <RulesInfo handleMenuClose={handleMenuClose} />}
      </AnimatePresence>
    </main>
  );
}

export default App;
