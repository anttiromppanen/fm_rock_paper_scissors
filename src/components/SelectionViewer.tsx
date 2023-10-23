import { GameValues } from "../types/types";

const variantStyles = {
  scissors: "bg-yellow-500",
  spock: "bg-teal-500",
  paper: "bg-blue-500",
  lizard: "bg-purple-500",
  rock: "bg-red-500",
};

type Props = {
  variant: GameValues;
};

function SelectionViewer({ variant }: Props) {
  const baseStyles = "h-32 w-32 rounded-full";
  return <div className={`${baseStyles} ${variantStyles[variant]}`} />;
}

export default SelectionViewer;
