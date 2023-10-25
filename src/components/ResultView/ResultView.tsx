import { motion } from "framer-motion";
import useGameStore from "../../store/useGameStore";
import SelectionViewer from "../SelectionViewer";
import OutcomeViewer from "./OutcomeViewer";

const animationVariants = {
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, type: "spring", stiffness: 100, delay: 1 },
  },
};

function ResultView() {
  const playerSelection = useGameStore((state) => state.playerSelection);
  const computerSelection = useGameStore((state) => state.computerSelection);

  return (
    <div className="mt-20">
      <div
        className="
        flex flex-wrap items-center justify-between text-center text-white
        md:justify-center md:gap-x-6 lg:gap-x-10 xl:gap-x-20"
      >
        <motion.div
          variants={animationVariants}
          initial={{ opacity: 0, x: -100 }}
          animate="show"
          className="md:order-2"
        >
          <SelectionViewer
            variant={playerSelection}
            text="YOU PICKED"
            playerOrComputer="player"
          />
        </motion.div>
        <motion.div
          variants={animationVariants}
          initial={{ opacity: 0, x: 100 }}
          animate="show"
          className="md:order-3"
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <SelectionViewer
              variant={computerSelection}
              animated
              text="THE HOUSE PICKED"
              playerOrComputer="computer"
            />
          </motion.div>
        </motion.div>
        <OutcomeViewer />
      </div>
    </div>
  );
}

export default ResultView;
