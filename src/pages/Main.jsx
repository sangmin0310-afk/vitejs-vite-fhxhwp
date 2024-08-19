import { Card } from '../component/Card';
import { useSelector } from 'react-redux';

export default function Main() {
  const pokemonData = useSelector((state) => state.pokemon.data);

  return (
    <>
      {pokemonData.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
