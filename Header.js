const Header=()=>{
    return(
        <div className="nav">
            <div><a><img src="img.jpg" alt="l"></img></a></div>
            <div className="second">
            <ul className="services">
                <li className="items">Home</li>
                <li className="items">About</li>
                <li className="items">Contact</li>
            </ul>
            </div>
            <div>
                <li className="items">Cart</li></div>
        </div>
    );
}

export default Header;