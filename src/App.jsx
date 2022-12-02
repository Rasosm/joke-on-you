import { useState } from 'react';
import { useEffect } from 'react';
import './App.scss';
import Jokes from './Components/Jokes';

function App() {
    const [jokes, setJokes] = useState(null);
    useEffect(() => {
        fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setJokes(result.jokes);
                },

                (error) => {}
            );
    }, []);
    return (
        <div className="App">
            <h1>Jokes for you</h1>
            <div className="line"></div>
            <ul className="App-header ">
                {jokes?.map((item) => (
                    <Jokes key={item.id} joke={item} />
                ))}
            </ul>
        </div>
    );
}
export default App;
