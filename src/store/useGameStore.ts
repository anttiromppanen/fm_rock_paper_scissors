import { create } from "zustand";
import { GameValues, OutcomeValue } from "../types/types";

interface State {
  score: number;
  playerSelection: GameValues;
  computerSelection: GameValues;
}

interface Actions {
  setScore: (value: OutcomeValue) => void;
  setPlayerSelection: (playerSelection: GameValues) => void;
  setComputerSelection: (computerSelection: GameValues) => void;
}

const useGameStore = create<State & Actions>((set) => ({
  score: 0,
  playerSelection: "paper",
  computerSelection: "paper",
  setScore: (value) => set((state) => ({ score: state.score + value })),
  setPlayerSelection: (playerSelection) => set({ playerSelection }),
  setComputerSelection: (computerSelection) => set({ computerSelection }),
}));

export default useGameStore;
