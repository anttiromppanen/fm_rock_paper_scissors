import { motion, Variants } from "framer-motion";
import closeImg from "../assets/images/icon-close.svg";
import rulesImg from "../assets/images/image-rules-bonus.svg";
import useBreakpoint from "../hooks/useBreakpoint";

const animationVariants: Variants = {
  hiddenMobile: { y: "100vh" },
  hiddenDesktop: {
    translateY: "-50%",
    translateX: "-50%",
    y: "100vh",
  },
  show: {
    y: 0,
    transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  },
  exit: {
    y: "100vh",
    transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  },
};

interface Props {
  handleMenuClose: () => void;
}

function RulesInfo({ handleMenuClose }: Props) {
  const { isBelowMd } = useBreakpoint("md");
  return (
    <motion.div
      variants={animationVariants}
      initial={isBelowMd ? "hiddenMobile" : "hiddenDesktop"}
      animate="show"
      exit="exit"
      className="
        fixed left-0 top-0 z-20 flex h-[100dvh] w-full flex-col items-center bg-white
        md:left-1/2 md:top-1/2 md:h-auto md:w-auto md:items-start md:rounded-xl md:p-10 md:pb-14"
    >
      <div className="my-24 flex w-full items-center justify-center md:my-0 md:mb-6 md:justify-between">
        <h2 className="text-4xl font-bold text-userBgGradient2">RULES</h2>
        <button
          type="button"
          onClick={handleMenuClose}
          className="fixed bottom-16 left-1/2 -translate-x-1/2 md:static"
        >
          <img src={closeImg} alt="Close" />
        </button>
      </div>
      <img src={rulesImg} alt="Rules" />
    </motion.div>
  );
}

export default RulesInfo;
