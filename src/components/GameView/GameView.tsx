import { Variants, motion } from "framer-motion";
import { getRandomGameValue, playerVsComputer } from "../../helpers/helpers";
import useGameStore from "../../store/useGameStore";
import { GameValues } from "../../types/types";
import SelectionButton from "../SelectionButton";

const animationVariants: Variants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, type: "spring" },
  },
};

function GameView() {
  const setScore = useGameStore((state) => state.setScore);
  const setPlayerSelection = useGameStore((state) => state.setPlayerSelection);
  const setLastWinner = useGameStore((state) => state.setLastWinner);
  const setValueSelected = useGameStore((state) => state.setValueSelected);
  const setComputerSelection = useGameStore(
    (state) => state.setComputerSelection,
  );

  const handleClick = (variant: GameValues) => {
    const randomGameValue = getRandomGameValue();
    setPlayerSelection(variant);
    setComputerSelection(randomGameValue);

    const result = playerVsComputer(variant, randomGameValue);
    setScore(result);
    setLastWinner(result);
    setValueSelected(true);
  };

  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      animate="show"
      className="
        relative mx-auto mt-32 h-52 max-w-[264px] bg-userPentagonBg bg-contain bg-center bg-no-repeat
        md:h-80 md:max-w-[360px]"
    >
      <SelectionButton
        variant="scissors"
        handleClick={() => handleClick("scissors")}
      />
      <SelectionButton
        variant="spock"
        handleClick={() => handleClick("spock")}
      />
      <SelectionButton
        variant="paper"
        handleClick={() => handleClick("paper")}
      />
      <SelectionButton
        variant="lizard"
        handleClick={() => handleClick("lizard")}
      />
      <SelectionButton variant="rock" handleClick={() => handleClick("rock")} />
    </motion.div>
  );
}

export default GameView;
