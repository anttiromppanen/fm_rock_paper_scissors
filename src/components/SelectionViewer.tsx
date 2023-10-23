import { GameValues } from "../types/types";
import scissors from "../assets/images/icon-scissors.svg";
import spock from "../assets/images/icon-spock.svg";
import paper from "../assets/images/icon-paper.svg";
import lizard from "../assets/images/icon-lizard.svg";
import rock from "../assets/images/icon-rock.svg";

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
    "bg-gradient-to-b from-userScissorsGradient1 to-userScissorsGradient2",
  spock: "bg-teal-500",
  paper: "bg-blue-500",
  lizard: "bg-purple-500",
  rock: "bg-red-500",
};

interface Props {
  variant: GameValues;
  text: string;
}

function SelectionViewer({ variant, text }: Props) {
  const baseStyles =
    "h-32 w-32 rounded-full flex justify-center items-center p-4 shadow-userButtonOuterRingShadow";
  return (
    <div>
      <div className={`${baseStyles} ${variantStyles[variant]}`}>
        <div className="h-full w-full rounded-full shadow-md">
          <div
            className="
          shadow-userButtonInnerRingShadow flex h-full w-full items-center justify-center 
          rounded-full bg-gray-200"
          >
            <img src={imageSelector(variant)} alt={variant} className="w-1/2" />
          </div>
        </div>
      </div>
      <p className="mt-6 tracking-widest text-white">{text}</p>
    </div>
  );
}

export default SelectionViewer;
