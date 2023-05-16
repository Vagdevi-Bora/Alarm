import { Component } from "react"
import MovieList from "./MovieList"
import NavBar from "./Navbar"
import { movies } from "./MovieData"


class App extends Component {
  constructor() {
    super();
    //Creating the state object 
    this.state = {
      movies: movies,
      cartCount: 0
    }
  }
  handleIncStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    if (movies[movieId].stars >= 5) {
      return;
    }
    movies[movieId].stars += 0.5;
    this.setState({
      movies
    });
  }

  handleDecStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    if (movies[movieId].stars <= 0) {
      return;
    }
    movies[movieId].stars -= 0.5;

    this.setState({
      movies
    });
  }

  handleAddfav = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
      movies
    });
  }

  handleAddCart = (movie) => {
    let { movies, cartCount } = this.state;
    const movieId = movies.indexOf(movie);
    movies[movieId].isInCart = !movies[movieId].isInCart;
    if (movies[movieId].isInCart) {
      cartCount = cartCount + 1;
    }
    else {
      cartCount = cartCount - 1;
    }
    this.setState({
      movies,
      cartCount
    })
  }
  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <NavBar cartCount={cartCount} />
        <MovieList movies={movies}
          onIncStars={this.handleIncStars}
          onDecStars={this.handleDecStars}
          toggleFav={this.handleAddfav}
          toggleCart={this.handleAddCart}
        />
      </>
    );
  }
}
export default App;
