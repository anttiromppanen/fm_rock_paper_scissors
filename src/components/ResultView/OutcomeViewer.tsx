import useGameStore from "../../store/useGameStore";

function OutcomeViewer() {
  const lastWinner = useGameStore((state) => state.lastWinner);

  const outcomeText = () => {
    if (lastWinner === "player") {
      return "YOU WIN";
    }
    if (lastWinner === "computer") {
      return "YOU LOSE";
    }

    return "DRAW";
  };

  return (
    <div>
      <h1 className="text-4xl text-white">{outcomeText()}</h1>
      <button type="button">PLAY AGAIN</button>
    </div>
  );
}

export default OutcomeViewer;
