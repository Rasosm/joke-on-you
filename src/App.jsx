import { useState } from 'react';
import { useEffect } from 'react';
import './App.scss';
// import Jokes from './Components/Jokes';

function App() {
    const [jokes, setJokes] = useState(null);

    useEffect(() => {
        fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
            .then((res) => res.json())
            .then((data) => setJokes(data));
    }, []);

    // useEffect(() => {
    //     fetch('https://v2.jokeapi.dev/joke/Programming?amount=10').then((res) =>
    //         setJokes(res.data.map((j) => ({ ...jasmine, show: true })))
    //     );
    // }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Joke on you</h1>
                <ul>
                    {jokes?.map((j) => (
                        <li key={j.id}>
                            <h2>{j.category}</h2>
                            <h3>{j.type}</h3>
                            <p>{j.delivery}</p>
                            <p>{j.flags}</p>
                            <p>{j.id}</p>
                            <p>{j.safe}</p>
                            <p>{j.lang}</p>
                        </li>
                    ))}
                </ul>
                {/* <div>
                    <ul>
                        {jokes?.map((j) =>
                            j.show === true ? (
                                <Jokes key={j.id} joke={j} />
                            ) : null
                        )}
                    </ul>
                </div> */}
            </header>
        </div>
    );
}

export default App;
