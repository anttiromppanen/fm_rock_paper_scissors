import { getRandomGameValue, playerVsComputer } from "../../helpers/helpers";
import useGameStore from "../../store/useGameStore";
import { GameValues } from "../../types/types";
import SelectionButton from "../SelectionButton";

interface Props {
  setValueSelected: (value: boolean) => void;
}

function GameView({ setValueSelected }: Props) {
  const setScore = useGameStore((state) => state.setScore);
  const setPlayerSelection = useGameStore((state) => state.setPlayerSelection);
  const setComputerSelection = useGameStore(
    (state) => state.setComputerSelection,
  );

  const handleClick = (variant: GameValues) => {
    const randomGameValue = getRandomGameValue();
    setPlayerSelection(variant);
    setComputerSelection(randomGameValue);

    const result = playerVsComputer(variant, randomGameValue);
    setScore(result);
    setValueSelected(true);
  };

  return (
    <div
      className="
      bg-userPentagonBg relative mx-auto mt-32 h-52 max-w-[264px] bg-contain bg-center bg-no-repeat"
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
    </div>
  );
}

export default GameView;
