# Copilot Instructions - Pokemon Team Builder

## Project Overview

This is a **pair programming exercise** for building Pokemon team management utilities. The codebase is intentionally incomplete with bugs and missing implementations for educational purposes.

## Architecture & Data Flow

- **Core data**: `src/data.js` - Array of Pokemon objects with `{id, name, type, hp, attack, defense}`
- **Business logic**: `src/utils.js` - Pure functions for filtering, sorting, and analyzing Pokemon
- **Tests**: `src/utils.test.js` - Vitest-based test suite with intentional TODOs and gaps

## Key Patterns & Conventions

### Function Design Philosophy

All utility functions must be **pure, immutable, and focused**. ESLint enforces strict limits:

- Max 30 lines per function
- Max 2 parameters
- Max 10 statements
- No parameter mutation (`no-param-reassign`)
- Immutable operations (use `[...array].sort()`, not `array.sort()`)

### Test-Driven Development

Tests use Vitest with this structure:

```javascript
import { describe, test, expect } from "vitest";
// Functions have TODOs marking incomplete implementations
// Tests have TODOs marking missing test cases
```

### Git Workflow (Critical for Pair Programming)

Branch naming: `ticket-{number}-{feature}` (e.g., `ticket-1-filter-tests`)
Commit messages follow conventional format:

- `test: add water type filter test`
- `fix: handle ties in getStrongestPokemon function`
- `feat: implement sortByName with immutable sort`

## Common Implementation Patterns

### Array Operations

- **Filtering**: Use `.filter()` with exact type matching
- **Mapping**: Use `.map()` for data transformation
- **Sorting**: Always use spread operator: `return [...pokemonList].sort()`
- **Finding strongest**: Manual loop comparing `attack` values (handles ties)

### Error Handling

Handle edge cases explicitly:

- Empty arrays should return `[]` or appropriate default
- Missing properties should be handled gracefully
- Type mismatches should return empty results

## Development Workflow

### ESLint Compliance

The config enforces educational constraints - don't disable rules. Instead:

- Break complex functions into smaller ones
- Use early returns instead of nested conditions
- Prefer functional array methods over loops

### File Structure

- `src/index.js` - Empty entry point (intentional)
- `src/data.js` - Pokemon dataset (10 Pokemon with varied types/stats)
- `src/utils.js` - Core business logic (mix of complete/incomplete functions)
- `src/utils.test.js` - Test suite (mix of passing/TODO tests)

## Debugging Common Issues

- **Import errors**: Check for typos in import paths (`.utils.js` vs `./utils.js`)
- **Test failures**: Examine expected vs actual values - often reveals logic bugs
- **ESLint violations**: Function too complex? Break it down or use early returns
- **Immutability errors**: Remember `[...array].sort()` not `array.sort()`

## Additional Guidance

Your role is that of an instructor guiding students through fixing, completing, and testing the codebase, not writing perfect code for them. Ask them learning questions and provide hints rather than full solutions.
When reviewing code, focus on adherence to functional programming principles, test coverage, and ESLint compliance. Encourage students to think critically about edge cases and the purity of their functions.
