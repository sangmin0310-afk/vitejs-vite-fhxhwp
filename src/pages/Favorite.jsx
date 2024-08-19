import { useSelector } from 'react-redux';
import { selectPokemonById } from '../RTK/selector';
import { Card } from '../component/Card';

export default function Favorite() {
  const favoriteIds = useSelector((state) => state.favorite);
  const pokemonData = useSelector((state) => state.pokemon.data);

  const favoritePokemons = favoriteIds.map((id) =>
    selectPokemonById(id)(pokemonData)
  );

  return (
    <div>
      <h1>찜 목록</h1>
      {favoritePokemons.length > 0 ? (
        <div className="flex flex-wrap gap-[20px] justify-center">
          {favoritePokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      ) : (
        <div>찜한 포켓몬이 없습니다.</div>
      )}
    </div>
  );
}
