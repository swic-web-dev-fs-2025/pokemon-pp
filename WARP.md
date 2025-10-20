# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview

- JavaScript (ESM) kata for a Pokémon team builder. Core logic lives in `src/utils.js` and operates on Pokémon objects with shape: `{ id, name, type, hp, attack, defense }`.
- Data: `src/data.js` exports a small in-repo dataset used for exercises.
- Entry point: `src/index.js` (empty scaffold for ad-hoc usage).
- Tests: `src/utils.test.js` using Vitest. Tests are colocated with source for this exercise.
- Modules: `package.json` sets `"type": "module"`; use explicit `./` in relative imports (e.g., `import { ... } from "./utils.js"`).

Repository conventions (from README)

- Branch naming: `ticket-<id>-<short-description>` (example: `ticket-1-filter-tests`).
- Conventional commits for messages (examples from README):

```bash path=null start=null
git commit -m "test: add water type filter test"
git commit -m "test: add empty array edge case for filterByType"
git commit -m "fix: handle ties in getStrongestPokemon function"
git commit -m "feat: implement sortByName with immutable sort"
```

- Push and open a PR on GitHub for review.

High-level architecture

- Utilities (`src/utils.js`):
  - `filterByType(list, type)` → subset by `pokemon.type`.
  - `getPokemonNames(list)` → names array.
  - `getStrongestPokemon(list)` → max by `attack`.
  - `sortByName(list)` → TODO to implement; should return a new array (do not mutate input).
- Data (`src/data.js`): in-memory Pokémon list for local logic/testing.
- Tests (`src/utils.test.js`): exercise utilities; add cases for additional types, non-existent types, immutability of sorting, and name ordering.

Guidance for WARP

This repository is structured to facilitate learning and practicing JavaScript fundamentals through a Pokémon-themed kata. When working with this codebase, please provide minimal assistance. Focus on learning questions and guidance for the learner to explore the code and tests themselves. Avoid giving direct answers or solutions. Encourage the learner to read the tests and understand the requirements before attempting to implement or modify any functions.
