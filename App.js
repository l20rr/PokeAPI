import React from "react";
import Searchbar from "./componets/Seacrch";
import { searchPokemon } from "./Api";
import './index.css';

function App() {


  return(
    <div>
    
     <Searchbar />
     <searchPokemon/>
    </div>
  )
}

export default App;