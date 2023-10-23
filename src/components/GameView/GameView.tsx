import { getRandomGameValue, playerVsComputer } from "../../helpers/helpers";
import SelectionButton from "../SelectionButton";

interface Props {
  setValueSelected: (value: boolean) => void;
}

function GameView({ setValueSelected }: Props) {
  const handlePaperClick = () => {
    const randomGameValue = getRandomGameValue();
    console.log(
      `Paper vs ${randomGameValue} = ${playerVsComputer(
        "paper",
        randomGameValue,
      )}`,
    );

    setValueSelected(true);
  };
  return (
    <div className="bg-userPentagonBg relative mx-auto h-52 max-w-[264px] bg-contain bg-center bg-no-repeat">
      <SelectionButton variant="scissors" handleClick={handlePaperClick} />
      <button
        aria-label="Select Spock"
        type="button"
        className="absolute -left-4 top-6 h-24 w-24 rounded-full bg-teal-500"
      />
      <button
        aria-label="Select Paper"
        type="button"
        className="absolute -right-4 top-6 h-24 w-24 rounded-full bg-blue-500"
      />
    </div>
  );
}

export default GameView;
