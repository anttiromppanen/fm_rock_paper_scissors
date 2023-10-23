import { GameValues } from "../types/types";

const variantStyles = {
  scissors: "bg-yellow-500 -top-14 left-1/2 -translate-x-1/2",
  spock: "bg-teal-500",
  paper: "bg-blue-500",
  lizard: "bg-purple-500",
  rock: "bg-red-500",
};

const sizeStyles = {
  md: "h-24 w-24",
  lg: "h-32 w-32",
};

interface Props {
  handleClick: () => void;
  variant: GameValues;
  size?: "md" | "lg";
}

function SelectionButton({ variant, size = "md", handleClick }: Props) {
  const baseStyles = "absolute h-24 w-24 rounded-full";
  return (
    <button
      aria-label="Select Scissors"
      type="button"
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
    />
  );
}

SelectionButton.defaultProps = {
  size: "md",
};

export default SelectionButton;
