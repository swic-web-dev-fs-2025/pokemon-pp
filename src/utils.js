export const filterByType = (pokemonList, type) => {
  return pokemonList.filter((pokemon) => pokemon.type === type);
};

export const getPokemonNames = (pokemonList) => {
  return pokemonList.map((pokemon) => pokemon.name);
};

export const getStrongestPokemon = (pokemonList) => {
  // Sort the list by attack in descending order
  const sortedByAttack = structuredClone(pokemonList).sort(
    (a, b) => b.attack - a.attack
  );

  // Get the highest attack value
  const highestAttack = sortedByAttack[0].attack;

  // Filter the list to include only those Pokemon whose attack matches the highest attack value
  return sortedByAttack.filter((pokemon) => pokemon.attack === highestAttack);
};


export const sortByName = (pokemonList) => {
  structuredClone((a, b) => a.name.localeCompare(b.name));
};


export const calculateAverageHP = (pokemonList) => {
  if (pokemonList.length === 0) return 0;
  const totalHP = pokemonList.reduce((sum, pokemon) => sum + pokemon.hp, 0);
  return totalHP / pokemonList.length;
};
