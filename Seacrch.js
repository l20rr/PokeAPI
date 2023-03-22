import { useState } from "react"
import { searchPokemon } from "../Api"
import '../index.css';
const Searchbar = () => {
    const [search, setSearch] = useState("")
    const [pokemon, setPokemon] = useState()

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
       
    }

    const onButtonClickHandler = () => {
        onSearchHandle(search)
    }

    const onSearchHandle  = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
        console.log(result)
      }
    
    return (
        <div >
            <div className="searchbar">
                <input placeholder="Buscar pokemon" onChange={onChangeHandler} />
                <button onClick={onButtonClickHandler} >Buscar</button>
            </div>
            
            {pokemon ? (
                <div className="pokedex">
                    
                    <div className="img">
                        <div className="D1">
                        <h3>nome:{pokemon.name}</h3>
                       <h3>peso: {pokemon.weight} </h3>
                 
                       <h3>altura: {pokemon.height} </h3>
                        </div>
                        <div className="D2">
                        <h3>base experience: {pokemon.base_experience}</h3>
                    {<div>
                        <h3>Habilidades:</h3>
                        <ul>
                            <li>{pokemon.abilities[0].ability.name}</li>
                            <li>{pokemon.abilities[1].ability.name}</li> 
                       </ul>
                       </div>
                   }
                   </div>
                     </div>
                     
                    <div className="info-btn">
                        <div id="A">A</div>
                    <div className="info">
                  
                  <div className="btn">
                  
                  <div id="R-btn"/>
                  <div id="B-btn"/>
                  </div>
                  <div className="bola" />
               <div id="img-c"><img src={pokemon.sprites.front_default} /></div>
               
                    </div>
                   
                    </div>
                   
                </div>
            ): null}
        </div>
    )
}

export default Searchbar;