import lizard from "../assets/images/icon-lizard.svg";
import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import scissors from "../assets/images/icon-scissors.svg";
import spock from "../assets/images/icon-spock.svg";
import { GameValues } from "../types/types";

const imageSelector = (variant: GameValues) => {
  switch (variant) {
    case "scissors":
      return scissors;
    case "spock":
      return spock;
    case "paper":
      return paper;
    case "lizard":
      return lizard;
    case "rock":
      return rock;
    default:
      return scissors;
  }
};

const variantStyles = {
  scissors:
    "bg-gradient-to-b from-userScissorsGradient1 to-userScissorsGradient2 -top-14 left-1/2 -translate-x-1/2",
  spock: "bg-teal-500 -left-4 top-6",
  paper: "bg-blue-500 -right-4 top-6",
  lizard: "bg-purple-500 -bottom-10 left-6",
  rock: "bg-red-500 -bottom-10 right-6",
};

interface Props {
  handleClick: () => void;
  variant: GameValues;
}

function SelectionButton({ variant, handleClick }: Props) {
  const baseStyles =
    "absolute h-24 w-24 rounded-full p-3 shadow-userButtonOuterRingShadow";

  return (
    <button
      aria-label={`Select ${variant}`}
      type="button"
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      <div className="h-full w-full rounded-full shadow-md">
        <div
          className="
          shadow-userButtonInnerRingShadow flex h-full w-full items-center justify-center 
          rounded-full bg-gray-200"
        >
          <img src={imageSelector(variant)} alt={variant} className="w-1/2" />
        </div>
      </div>
    </button>
  );
}

export default SelectionButton;
