import React,{useState} from "react";
import SearchBar from "./SearchBar";

export default function FilterJoke ({jokes,setJokes}) {
    const [filterBy, setFilterBy] = useState("All");

    const handleFilterChange = (event) => {
        setFilterBy(event.target.value);
    }

    // Filters jokes by their type
    const jokesToDisplay = jokes.filter((joke) => {
        if (filterBy === "All") {
            return true;
        } else {
            return joke.type === filterBy;
        }
        })
    
    const deleteJoke = (id) =>{
            const newJokeArr = jokes.filter(joke => joke.id !== id);
            setJokes(newJokeArr)
        }

    return (
        <div className="jokes"> 
            <div className="filter">
                <select className="select" name="filter" onChange={handleFilterChange}>
                    <option value="All">Filter Joke Type...</option>
                    <option value="general">General</option>
                    <option value="programming">Programming</option>
                    <option value="knock-knock">Knock-Knock</option>
                </select>
            </div>
            <SearchBar jokesToDisplay={jokesToDisplay} deleteJoke={deleteJoke}/>
        </div>
    )
}

////////////////////////////////////////
//         const config = {
//             method:"PATCH",
//             headers:{
//                 'content-Type':'application/json'
//             },
//             body:JSON.stringify({On:!isOn})
//         }
//         fetch(`http://localhost:3000/jokes/${id}`,config)
//         .then(res => res.json)
//         .then(setIsOn((isOn) => !isOn))
// }