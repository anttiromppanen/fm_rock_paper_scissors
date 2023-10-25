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
      <div className="flex w-full justify-between text-center text-white">
        <motion.div
          variants={animationVariants}
          initial={{ opacity: 0, x: -100 }}
          animate="show"
        >
          <SelectionViewer variant={playerSelection} text="YOU PICKED" />
        </motion.div>
        <motion.div
          variants={animationVariants}
          initial={{ opacity: 0, x: 100 }}
          animate="show"
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <SelectionViewer
              variant={computerSelection}
              animated
              text="THE HOUSE PICKED"
            />
          </motion.div>
        </motion.div>
      </div>
      <OutcomeViewer />
    </div>
  );
}

export default ResultView;
