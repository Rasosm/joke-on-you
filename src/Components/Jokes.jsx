function Jokes({ joke }) {
    return (
        <div className="bin">
            <div className="cards">
                {joke.type === 'single' && <h2>{joke.joke}</h2>}
                {joke.type === 'twopart' && (
                    <h2>
                        {joke.setup}
                        <hr />
                        {joke.delivery}
                    </h2>
                )}
            </div>
        </div>
    );
}

export default Jokes;
