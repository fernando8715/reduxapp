import axios from 'axios';
import {startLoadingPokemon, setPokemons} from './pokemonSlice'


export const getPokemons = (page = 0) => {
    return async(dispatch, getstate)=> {
        dispatch(startLoadingPokemon() );

        // TODO : Realizar peticion http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await resp.json();
        // console.log(data);

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        console.log(response);
        
        
        // dispatch(setPokemons({ pokemons : data.results, page: page+ 1 }) );
    }
}