import { getRegExp } from 'korean-regexp';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectPokemonByRegExp } from '../RTK/selector';
import { Card } from '../component/Card';

export default function Search() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get('pokemon');
  const reg = getRegExp(param || '');

  const pokemon = useSelector((state) => selectPokemonByRegExp(reg)(state));

  return (
    <>
      {pokemon && pokemon.length > 0 ? (
        pokemon.map((el) => <Card key={el.id} pokemon={el} />)
      ) : (
        <div>포켓몬이 없습니다..ㅠ</div>
      )}
    </>
  );
}
