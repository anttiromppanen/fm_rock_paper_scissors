export type GameValues = "rock" | "paper" | "scissors" | "lizard" | "spock";

export type OutcomeValue = -1 | 0 | 1;

export type PlayerVsComputerOutcomes = {
  [playerValue in GameValues]: {
    [computerValue in GameValues]: OutcomeValue;
  };
};
