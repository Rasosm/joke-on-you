function Jokes({ joke }) {
    return (
        <li>
            <h2>{joke.category}</h2>
            <h2>{joke.type}</h2>
        </li>
    );
}

export default Jokes;
