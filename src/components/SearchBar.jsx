import React,{useState} from "react";
import Home from "./Home";
import { GoSearch } from 'react-icons/go';

export default function SearchBar({jokesToDisplay,deleteJoke}) {
    const [searchJokes, setSearchJokes] = useState('');

    const handleSearch = (event) => {
        setSearchJokes(event.target.value)
    }

    const searchResult = jokesToDisplay.filter(joke => (
        joke.setup.toLowerCase().includes(searchJokes.toLowerCase())
    ))

    const jokeFilter = searchResult.map(joke => 
        <Home key={joke.id} 
            id={joke.id}
            setup={joke.setup} 
            punchline={joke.punchline} 
            Delete={() => deleteJoke(joke.id)}
            />
    )

    return (
        <div >
            <div className="searchBar">
                <input className="searchInput"
                    type="search"
                    placeholder= "Search jokes..."
                    value={searchJokes}
                    onChange={handleSearch}
                />
            <button className="searchIcon"><GoSearch /></button> 
            
            </div>
            <div> 
                {jokeFilter}
            </div>
        </div>
    );
}