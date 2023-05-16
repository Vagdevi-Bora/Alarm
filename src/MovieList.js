import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {


    render() {
        const { movies, onIncStars, onDecStars, toggleFav, toggleCart } = this.props;
        return (
            <div className="main">
                {movies.map((movie) => (
                    <MovieCard movies={movie}
                        onIncStars={onIncStars}
                        onDecStars={onDecStars}
                        toggleFav={toggleFav}
                        toggleCart={toggleCart}
                        key={movie.id}
                    />
                )

                )}
            </div>
        )
    }
}

export default MovieList;