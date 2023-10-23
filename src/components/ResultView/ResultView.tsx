import useGameStore from "../../store/useGameStore";
import SelectionViewer from "../SelectionViewer";

interface Props {
  setValueSelected: (value: boolean) => void;
}

function ResultView({ setValueSelected }: Props) {
  const playerSelection = useGameStore((state) => state.playerSelection);
  const computerSelection = useGameStore((state) => state.computerSelection);

  return (
    <div className="mt-20">
      <div className="flex w-full justify-between text-center text-white">
        <SelectionViewer variant={playerSelection} text="YOU PICKED" />
        <SelectionViewer variant={computerSelection} text="THE HOUSE PICKED" />
      </div>
      <button
        type="button"
        onClick={() => setValueSelected(false)}
        className="text-white"
      >
        Play again
      </button>
    </div>
  );
}

export default ResultView;
