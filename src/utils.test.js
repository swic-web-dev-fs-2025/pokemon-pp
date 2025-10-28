import { describe, test, expect } from "vitest";
import {
  filterByType,
  getPokemonNames,
  getStrongestPokemon,
  sortByName,
  calculateAverageHP,
} from "./utils.js";

// Arrange for all tests
const MOCK_DATA = [
  { id: 1, name: "Bulbasaur", type: "grass", hp: 45, attack: 49, defense: 49 },
  { id: 4, name: "Charmander", type: "fire", hp: 39, attack: 52, defense: 43 },
  { id: 7, name: "Squirtle", type: "water", hp: 44, attack: 48, defense: 65 },
  {
    id: 25,
    name: "Pikachu",
    type: "electric",
    hp: 35,
    attack: 55,
    defense: 40,
  },
];

describe("filterByType", () => {
  test("should return only fire type Pokemon", () => {
    // Arrange Inputs
    const POKEMON_TYPE = "fire";
    // Arrange Outputs
    const EXPECTED_LENGTH = 1;
    const EXPECTED_NAME = "Charmander";

    const result = filterByType(MOCK_DATA, POKEMON_TYPE); // Act

    // Assert
    expect(result.length).toBe(EXPECTED_LENGTH);
    expect(result[0].name).toBe(EXPECTED_NAME);
  });

  test("should return only water type Pokemon", () => {
    const result = filterByType(MOCK_DATA, "water");
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Squirtle");
  });

  test("should return empty array for non existent type", () => {
    const result = filterByType(MOCK_DATA, "psychic");
    expect(result.length).toBe(0);
  });
});

describe("getPokemonNames", () => {
  test("should return array of Pokemon names", () => {
    const result = getPokemonNames(MOCK_DATA);
    expect(result).toEqual(["Bulbasaur", "Charmander", "Squirtle", "Pikachu"]);
  });

  // ✅ COMPLETE: This test is done
  test("should return empty array for empty input", () => {
    const result = getPokemonNames([]);
    expect(result).toEqual([]);
  });
});

describe("getStrongestPokemon", () => {
  test("should return Pokemon with highest attack", () => {
    const result = getStrongestPokemon(MOCK_DATA);
    expect(result.name).toBe("Pikachu"); // Pikachu has 55 attack
  });
});

describe("sortByName", () => {
  test("should sort Pokemon by name in ascending order without mutating the original array", () => {
    // Arrange
    const INPUT = [
      { name: "Squirtle" },
      { name: "Bulbasaur" },
      { name: "Pikachu" },
      { name: "Charmander" },
    ];
    // `structuredClone` creates a deep copy of the input to verify immutability
    const ORIGINAL_SNAPSHOT = structuredClone(INPUT);

    const EXPECTED_OUTPUT = [
      { name: "Bulbasaur" },
      { name: "Charmander" },
      { name: "Pikachu" },
      { name: "Squirtle" },
    ];

    // Act
    const actualOutput = sortByName(INPUT);

    // Assert
    expect(actualOutput).toEqual(EXPECTED_OUTPUT);
    expect(actualOutput).not.toBe(INPUT);
    expect(INPUT).toEqual(ORIGINAL_SNAPSHOT);
  });
});

describe("calculateAverageHP", () => {
  test("should calculate average HP correctly", () => {
    const pokemon = [
      { name: "Pikachu", hp: 35 },
      { name: "Charmander", hp: 39 },
      { name: "Squirtle", hp: 44 },
    ];

    const result = calculateAverageHP(pokemon);
    const expectedAvg = (35 + 39 + 44) / 3;

    // Average of 35, 39, 44 = 39.33...
    expect(result).toBeCloseTo(expectedAvg, 1);
  });

  test("should return 0 for empty array", () => {
    const result = calculateAverageHP([]);
    expect(result).toBe(0);
  });

  test("should handle single Pokemon", () => {
    const result = calculateAverageHP([{ hp: 100 }]);
    expect(result).toBe(100);
  });
});
