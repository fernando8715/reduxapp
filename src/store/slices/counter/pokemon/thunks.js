import axios from 'axios';
import {startLoadingPokemon, setPokemons} from './pokemonSlice'
import { pokemonApi } from '../../../../api/pokemonApi';

export const getPokemons = (page = 0) => {
    return async(dispatch, getstate)=> {
        dispatch(startLoadingPokemon() );

        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`); 
               
        
        dispatch(setPokemons({ pokemons : data.results, page: page+ 1 }) );
    }
}