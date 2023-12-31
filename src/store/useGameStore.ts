import { create } from "zustand";
import { GameValues, OutcomeValue } from "../types/types";

interface State {
  score: number;
  playerSelection: GameValues;
  computerSelection: GameValues;
  valueSelected: boolean;
  lastWinner: "player" | "computer" | "tie";
}

interface Actions {
  setScore: (value: OutcomeValue) => void;
  setPlayerSelection: (playerSelection: GameValues) => void;
  setComputerSelection: (computerSelection: GameValues) => void;
  setLastWinner: (outcome: OutcomeValue) => void;
  setValueSelected: (valueSelected: boolean) => void;
}

const useGameStore = create<State & Actions>((set) => ({
  score: 0,
  playerSelection: "paper",
  computerSelection: "paper",
  lastWinner: "tie",
  valueSelected: false,
  setScore: (value) => set((state) => ({ score: state.score + value })),
  setPlayerSelection: (playerSelection) => set({ playerSelection }),
  setComputerSelection: (computerSelection) => set({ computerSelection }),
  setValueSelected: (valueSelected) => set({ valueSelected }),
  setLastWinner: (outcome) => {
    let winner: "player" | "computer" | "tie" = "tie";
    if (outcome === 1) {
      winner = "player";
    } else if (outcome === -1) {
      winner = "computer";
    }

    set({ lastWinner: winner });
  },
}));

export default useGameStore;
