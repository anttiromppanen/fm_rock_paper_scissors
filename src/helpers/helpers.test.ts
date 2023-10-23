import {
  gameValues,
  getRandomGameValue,
  playerVsComputerOutcomes,
} from "./helpers";

describe("helpers", () => {
  describe("playerVsComputerOutcomes (-1 = loss, 0 = tie, 1 = win)", () => {
    it("should return correct outcomes for rock", () => {
      expect(playerVsComputerOutcomes.rock.rock).toBe(0);
      expect(playerVsComputerOutcomes.rock.paper).toBe(-1);
      expect(playerVsComputerOutcomes.rock.scissors).toBe(1);
      expect(playerVsComputerOutcomes.rock.spock).toBe(-1);
      expect(playerVsComputerOutcomes.rock.lizard).toBe(1);
    });

    it("should return correct outcomes for paper", () => {
      expect(playerVsComputerOutcomes.paper.rock).toBe(1);
      expect(playerVsComputerOutcomes.paper.paper).toBe(0);
      expect(playerVsComputerOutcomes.paper.scissors).toBe(-1);
      expect(playerVsComputerOutcomes.paper.spock).toBe(1);
      expect(playerVsComputerOutcomes.paper.lizard).toBe(-1);
    });

    it("should return correct outcomes for scissors", () => {
      expect(playerVsComputerOutcomes.scissors.rock).toBe(-1);
      expect(playerVsComputerOutcomes.scissors.paper).toBe(1);
      expect(playerVsComputerOutcomes.scissors.scissors).toBe(0);
      expect(playerVsComputerOutcomes.scissors.spock).toBe(-1);
      expect(playerVsComputerOutcomes.scissors.lizard).toBe(1);
    });

    it("should return correct outcomes for spock", () => {
      expect(playerVsComputerOutcomes.spock.rock).toBe(1);
      expect(playerVsComputerOutcomes.spock.paper).toBe(-1);
      expect(playerVsComputerOutcomes.spock.scissors).toBe(1);
      expect(playerVsComputerOutcomes.spock.spock).toBe(0);
      expect(playerVsComputerOutcomes.spock.lizard).toBe(-1);
    });

    it("should return correct outcomes for lizard", () => {
      expect(playerVsComputerOutcomes.lizard.rock).toBe(-1);
      expect(playerVsComputerOutcomes.lizard.paper).toBe(1);
      expect(playerVsComputerOutcomes.lizard.scissors).toBe(-1);
      expect(playerVsComputerOutcomes.lizard.spock).toBe(1);
      expect(playerVsComputerOutcomes.lizard.lizard).toBe(0);
    });
  });

  describe("getRandomGameValue", () => {
    it("should return a random game value", () => {
      const values = gameValues;
      for (let i = 0; i < 100; i += 1) {
        const randomValue = getRandomGameValue(values);
        expect(values).toContain(randomValue);
      }
    });
  });

  describe("playerVsComputer", () => {
    it("should return -1 for loss", () => {
      expect(playerVsComputerOutcomes.rock.paper).toBe(-1);
      expect(playerVsComputerOutcomes.paper.scissors).toBe(-1);
      expect(playerVsComputerOutcomes.scissors.rock).toBe(-1);
      expect(playerVsComputerOutcomes.spock.paper).toBe(-1);
      expect(playerVsComputerOutcomes.lizard.scissors).toBe(-1);
    });

    it("should return 0 for tie", () => {
      expect(playerVsComputerOutcomes.rock.rock).toBe(0);
      expect(playerVsComputerOutcomes.paper.paper).toBe(0);
      expect(playerVsComputerOutcomes.scissors.scissors).toBe(0);
      expect(playerVsComputerOutcomes.spock.spock).toBe(0);
      expect(playerVsComputerOutcomes.lizard.lizard).toBe(0);
    });

    it("should return 1 for win", () => {
      expect(playerVsComputerOutcomes.rock.scissors).toBe(1);
      expect(playerVsComputerOutcomes.paper.rock).toBe(1);
      expect(playerVsComputerOutcomes.scissors.paper).toBe(1);
      expect(playerVsComputerOutcomes.spock.rock).toBe(1);
      expect(playerVsComputerOutcomes.lizard.paper).toBe(1);
    });
  });
});
