import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMultiplePokemonById = createAsyncThunk(
  'pokemon/fetchMultiplePokemonById',
  async (maxPokemonId) => {
    const numberArray = Array.from({ length: maxPokemonId }, (_, i) => i + 1);

    const fetchAPI = async (pokemonId) => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        return {
          id: pokemonId,
          name:
            data.names.find((el) => el.language.name === 'ko')?.name ||
            'Unknown',
          description:
            data.flavor_text_entries.find((el) => el.language.name === 'ko')
              ?.flavor_text || 'No description',
          front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
          back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
        };
      } catch (error) {
        console.error('Error fetching data:', error);
        return null; // API 호출 오류 발생 시 null 반환
      }
    };

    const results = await Promise.all(numberArray.map((el) => fetchAPI(el)));
    // 필터링: null 값을 제거
    return results.filter((result) => result !== null);
  }
);
