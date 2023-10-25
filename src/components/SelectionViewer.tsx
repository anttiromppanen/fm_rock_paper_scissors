import { Variants, motion } from "framer-motion";
import { GameValues } from "../types/types";
import scissors from "../assets/images/icon-scissors.svg";
import spock from "../assets/images/icon-spock.svg";
import paper from "../assets/images/icon-paper.svg";
import lizard from "../assets/images/icon-lizard.svg";
import rock from "../assets/images/icon-rock.svg";
import useGameStore from "../store/useGameStore";
import useBreakpoint from "../hooks/useBreakpoint";

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

const shadowAnimationMobile: Variants = {
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

const shadowAnimationDesktop: Variants = {
  initial: { boxShadow: "inset 0px -14px 0px 0px rgba(0,0,0,0.2)" },
  animate: {
    zIndex: 0,
    boxShadow: `
        inset 0px -14px 0px 0px rgba(0,0,0,0.2),
        0 0 0 4rem hsla(220, 34%, 26%, 0.2),
        0 0 0 8rem hsla(220, 38%, 24%, 0.3),
        0 0 0 12rem hsla(220, 41%, 22%, 0.3)
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
  const { isBelowLg } = useBreakpoint("lg");

  const baseStyles = `
    h-32 w-32 rounded-full relative flex justify-center p-4 items-center z-10 
    md:h-52 md:w-52 md:p-6 lg:w-[300px] lg:h-[300px] lg:p-8`;

  return (
    <div className="flex flex-col gap-y-6 md:flex-col-reverse md:gap-y-12">
      <motion.div
        variants={isBelowLg ? shadowAnimationMobile : shadowAnimationDesktop}
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
            shadow-userButtonInnerRingShadowMobile md:shadow-userButtonInnerRingShadowDesktop flex h-full w-full 
            items-center justify-center rounded-full bg-gray-200"
          >
            <img
              src={imageSelector(variant)}
              alt={variant}
              className="w-1/2 select-none lg:w-2/5"
            />
          </div>
        </motion.div>
      </motion.div>
      <p className="relative z-10 tracking-widest text-white md:text-2xl">
        {text}
      </p>
    </div>
  );
}

SelectionViewer.defaultProps = {
  animated: false,
};

export default SelectionViewer;
