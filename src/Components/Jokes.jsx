function Jokes({ joke }) {
    return (
        <div className="bin">
            <h2 className="li">
                {joke.joke}
                {joke.setup}
                {joke.delivery}
            </h2>
        </div>
    );
}

export default Jokes;
