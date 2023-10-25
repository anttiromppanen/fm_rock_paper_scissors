import { Variants, motion } from "framer-motion";
import { GameValues } from "../types/types";
import scissors from "../assets/images/icon-scissors.svg";
import spock from "../assets/images/icon-spock.svg";
import paper from "../assets/images/icon-paper.svg";
import lizard from "../assets/images/icon-lizard.svg";
import rock from "../assets/images/icon-rock.svg";
import useGameStore from "../store/useGameStore";

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

const overlayAnimations: Variants = {
  initial: { rotateY: 0, overflow: "hidden" },
  animate: { rotateY: 90, transition: { duration: 0.3, delay: 3 } },
};

const innerAnimations: Variants = {
  initial: { rotateY: 90 },
  animate: { rotateY: 0, transition: { duration: 0.3, delay: 3.3 } },
};

const shadowAnimation: Variants = {
  initial: { boxShadow: "inset 0px -8px 0px 0px rgba(0,0,0,0.2)" },
  animate: {
    zIndex: 0,
    boxShadow: `
      inset 0px -8px 0px 0px rgba(0,0,0,0.2),
      0 0 0 1rem hsla(220, 34%, 26%, 0.5),
      0 0 0 3rem hsla(220, 38%, 24%, 0.5),
      0 0 0 5rem hsla(220, 41%, 22%, 0.5)
    `,
    transition: { duration: 0.5, delay: 3.8 },
  },
};

interface Props {
  variant: GameValues;
  text: string;
  playerOrComputer: "player" | "computer";
  animated?: boolean;
}

function SelectionViewer({
  variant,
  text,
  playerOrComputer,
  animated = false,
}: Props) {
  const lastWinner = useGameStore((state) => state.lastWinner);

  const baseStyles =
    "h-32 w-32 rounded-full relative flex justify-center p-4 items-center z-10";

  return (
    <div>
      <motion.div
        variants={shadowAnimation}
        initial="initial"
        animate={lastWinner === playerOrComputer && "animate"}
        className={`${baseStyles} ${variantStyles[variant]}`}
      >
        {animated && (
          <motion.div
            variants={overlayAnimations}
            initial="initial"
            animate="animate"
            className="absolute -left-1 -top-1 h-[105%] w-[105%] rounded-full bg-userBgGradient1"
          />
        )}
        <motion.div
          variants={animated ? innerAnimations : {}}
          initial="initial"
          animate="animate"
          className="h-full w-full rounded-full shadow-md"
        >
          <div
            className="
            flex h-full w-full items-center justify-center 
            rounded-full bg-gray-200 shadow-userButtonInnerRingShadow"
          >
            <img src={imageSelector(variant)} alt={variant} className="w-1/2" />
          </div>
        </motion.div>
      </motion.div>
      <p className="relative z-10 mt-6 tracking-widest text-white">{text}</p>
    </div>
  );
}

SelectionViewer.defaultProps = {
  animated: false,
};

export default SelectionViewer;
