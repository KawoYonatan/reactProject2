import '../style.css';
import { useEffect,useState } from "react"
import NavBar from "./NavBar";
import Form from './Form';
import FilterJoke from './FilterJoke';
import { Switch,Route} from 'react-router-dom';
import About from './About';

export default function App() {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/jokes')
      .then(r => r.json())
      .then(setJokes)
    },[]) //[] dependency array - only run once

    const addJoke = (obj) => {
      //console.log(obj,'Yonatan')
      const newArr = [...jokes,obj]
      setJokes(newArr)
    }

    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/form" > <Form addJoke={addJoke}/> </Route>
          <Route path='/about'> <About /> </Route>
          <Route path="/" >
              <FilterJoke  
                  setJokes={setJokes}
                  jokes={jokes}
              />
          </Route>
        </Switch>
      </div>
    )
}

