import React from "react";
import navbar from "./navbar.module.css";

class NavBar extends React.Component {
    render() {
        const { cartCount } = this.props;
        return (
            <>
                <div className={navbar.navContainer}>
                    <div className={navbar.title}>MOVIE APP</div>
                    <div>
                        <img alt="cart Icon" src="https://cdn-icons-png.flaticon.com/128/1170/1170576.png" className={navbar.image} />
                        <span className={navbar.cartCount}>{cartCount}</span>
                    </div>
                </div>
            </>
        )
    }

}
export default NavBar;