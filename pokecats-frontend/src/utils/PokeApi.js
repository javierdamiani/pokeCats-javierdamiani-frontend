export async function fetchPokemonList() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.json();
  return data.results;
}

export async function fetchPokemonType(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.types[0].type.name;
}
