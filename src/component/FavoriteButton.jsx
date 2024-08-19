import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../RTK/slice';

const FavoriteButton = ({ pokemonId }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => state.favorite.includes(pokemonId));

  const handleClick = (event) => {
    event.stopPropagation(); // 클릭 이벤트 전파 방지
    if (isFavorite) {
      dispatch(removeFromFavorite({ pokemonId }));
    } else {
      dispatch(addToFavorite({ pokemonId }));
    }
  };

  return <button onClick={handleClick}>{isFavorite ? '🩷' : '♡'}</button>;
};

export default FavoriteButton;
