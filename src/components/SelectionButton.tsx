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
  scissors: `
    bg-gradient-to-b from-userScissorsGradient1 to-userScissorsGradient2 -top-14 left-1/2 -translate-x-1/2
    md:-top-20`,
  spock: `
    bg-gradient-to-b from-userSpockGradient1 to-userSpockGradient2 -left-4 top-6 
    md:-left-16 md:top-12`,
  paper: `
    bg-gradient-to-b from-userPaperGradient1 to-userPaperGradient2 -right-4 top-6 
    md:-right-16 md:top-12`,
  lizard: `
    bg-gradient-to-b from-userLizardGradient1 to-userLizardGradient2 -bottom-10 left-6 
    md:-bottom-20 md:left-0`,
  rock: `
    bg-gradient-to-b from-userRockGradient1 to-userRockGradient2 -bottom-10 right-6 
    md:-bottom-20 md:right-0`,
};

interface Props {
  handleClick: () => void;
  variant: GameValues;
}

function SelectionButton({ variant, handleClick }: Props) {
  const baseStyles = `
    absolute h-24 w-24 rounded-full p-3 shadow-userButtonOuterRingShadowMobile 
    md:p-5 md:h-[150px] md:w-[150px] hover:brightness-125`;

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
          shadow-userButtonInnerRingShadowMobile flex h-full w-full 
          items-center justify-center rounded-full bg-gray-200"
        >
          <img
            src={imageSelector(variant)}
            alt={variant}
            className="w-1/2 select-none"
          />
        </div>
      </div>
    </button>
  );
}

export default SelectionButton;
