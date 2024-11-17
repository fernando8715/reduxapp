import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/counter/pokemon/thunks';

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const { isLoading, page, pokemons = [] } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);


  return (
    <>
      <h1>Pokemon App</h1>
      <span>{`isLoading: ${isLoading ? 'True' : 'False'}`}</span>
      <hr />
      <ul>
        {pokemons.map( ({name}) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </button>
    </>
  )
}
