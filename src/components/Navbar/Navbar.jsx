import { Link } from "react-router";
import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<header className={styles.header}>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/shop">Shop</Link>
					</li>
					<li>
						<Link to="/cart">Cart</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
