import { Variants, motion } from "framer-motion";
import useGameStore from "../../store/useGameStore";

const animationVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 100, delay: 3.5 },
  },
};

function OutcomeViewer() {
  const lastWinner = useGameStore((state) => state.lastWinner);
  const setValueSelected = useGameStore((state) => state.setValueSelected);

  const outcomeText = () => {
    if (lastWinner === "player") return "YOU WIN";
    if (lastWinner === "computer") return "YOU LOSE";

    return "DRAW";
  };

  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      animate="show"
      className="mt-16 flex flex-col items-center"
    >
      <h1 className="text-5xl tracking-wide text-white">{outcomeText()}</h1>
      <button
        type="button"
        onClick={() => setValueSelected(false)}
        className="mt-5 rounded-xl bg-white px-16 py-3 text-xl tracking-widest text-userDarkText"
      >
        PLAY AGAIN
      </button>
    </motion.div>
  );
}

export default OutcomeViewer;
