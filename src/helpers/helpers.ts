import { GameValues } from "../types/types";

/* eslint-disable import/prefer-default-export */
export const playerVsComputerOutcomes = {
  rock: {
    rock: 0,
    paper: -1,
    scissors: 1,
    spock: -1,
    lizard: 1,
  },
  paper: {
    rock: 1,
    paper: 0,
    scissors: -1,
    spock: 1,
    lizard: -1,
  },
  scissors: {
    rock: -1,
    paper: 1,
    scissors: 0,
    spock: -1,
    lizard: 1,
  },
  spock: {
    rock: 1,
    paper: -1,
    scissors: 1,
    spock: 0,
    lizard: -1,
  },
  lizard: {
    rock: -1,
    paper: 1,
    scissors: -1,
    spock: 1,
    lizard: 0,
  },
};

export const gameValues = Object.keys(playerVsComputerOutcomes) as GameValues[];

export const getRandomGameValue = (values = gameValues): GameValues => {
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
};

export const playerVsComputer = (
  playerValue: GameValues,
  computerValue: GameValues,
): number => playerVsComputerOutcomes[playerValue][computerValue];
