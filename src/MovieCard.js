    import { Component } from "react";
    class MovieCard extends Component {

        addStars = () => {
            if (this.state.star >= 5) {
                return;
            }
            // first form
            // this.setState({
            //     star:this.state.star+0.5
            // })

            // second form
            this.setState((prevState) => {
                return {
                    star: prevState.star + 0.5
                }
            })

            // you can write second form like this
            // this.setStates((prevState)=>(
            //     {
            //         star:prevState.star+0.5
            //     }
            // ))

        }
        decStars = () => {
            if (this.state.star <= 0) {
                return;
            }
            this.setState({
                star: this.state.star - 0.5
            })
        }

        favHandler = () => {
            this.setState({
                fav: !this.state.fav
            })
        }

        addCartHandler = () => {
            this.setState({
                isInCart: !this.state.isInCart
            })
        }

        render() {
            // const {movies:data}=this.props;
            // you can rename movies as data like above and u can use 
            // const {title,plot,price,rating,star,fav,isInCart} = data;

            const { movies, onIncStars, onDecStars, toggleFav, toggleCart } = this.props;
            const { title, plot, price, rating, stars, fav, isInCart, poster } = this.props.movies;

            return (
                <div className="movie-card">
                    <div className="left">
                        {/* <img alt="poster" src="https://image.tmdb.org/t/p/original/pdhOE0NAZaPzjsgTvatRP1xFhG3.jpg"/> */}
                        <img alt="poster" src={poster} />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img alt="decrease"
                                    src="https://th.bing.com/th/id/R.88bc14c7714080cd4c51be1a76811cdb?rik=Xd5TnnnEqEMSbw&riu=http%3a%2f%2ffreevector.co%2fwp-content%2fuploads%2f2014%2f03%2f8240-minus-sign1-200x200.png&ehk=HbIeY4y5hs7a3hsUJHg%2f3gHiT%2fw%2bx6uWF5pxs9WkWxk%3d&risl=&pid=ImgRaw&r=0"
                                    className="str-btn" onClick={() => onDecStars(movies)} />
                                <img alt="star"
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars" />
                                <img alt="increase"
                                    src="https://media.istockphoto.com/vectors/black-plus-sign-positive-symbol-vector-id688550958?k=6&m=688550958&s=612x612&w=0&h=nVa-a5Fb79Dgmqk3F00kop9kF4CXFpF4kh7vr91ERGk="
                                    className="str-btn" onClick={() => onIncStars(movies)} />
                                <span className="starCount">{stars}</span>
                            </div>
                            {/* {fav ? <button className="unfavourite-btn">Un-favourite</button>:
                <button className="favourite-btn">Favourite</button>} */}

                            <button className={fav ? "unfavourite-btn" : "favourite-btn"} onClick={() => { toggleFav(movies) }}>
                                {fav ? "Un-favourite" : "favourite"} </button>

                            <button className={isInCart ? "remove-cart-btn" : "cart-btn"} onClick={() => { toggleCart(movies) }}>
                                {isInCart ? "Remove From Cart" : "Add To Cart"}</button>

                        </div>
                    </div>

                </div>

            )
        }
    }
    export default MovieCard;