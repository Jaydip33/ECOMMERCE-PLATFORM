import { Link } from "react-router-dom";
import imgSrc from "../assets/logo2.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const NavLinks = [
    { link: "/", text: "Home" },
    { link: "/blog", text: "Blog" },
    { link: "/about", text: "About Us" },
    { link: "/contact", text: "Contact Us" },
];

function NavBar() {
    const cartCount = useSelector((state) => state.carts.count);

    return (
        <nav className="border border-bottom border-dark sticky-top bg-dark">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <img
                            src={imgSrc}
                            alt="logo..."
                            className="w-25 border-0 rounded"
                            style={{ mixBlendMode: 'multiply' }}
                        />
                    </div>

                    <div className="m-4">
                        <ul className="d-flex justify-content-around align-items-center m-0">
                            {NavLinks.map((link, index) => (
                                <li key={index} className="mx-4">
                                    <Link
                                        to={link.link}
                                        className="text-decoration-none text-white"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div>
                            <button
                                type="button"
                                className="bg-dark border-0 me-3"
                            >
                                <Link to="/login" className="text-white">
                                    <FaUser size={30} />
                                </Link>
                            </button>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="bg-dark border-0 position-relative"
                            >
                                <Link to="/cart" className="text-white">
                                    <FaShoppingCart size={30} />
                                </Link>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartCount}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
