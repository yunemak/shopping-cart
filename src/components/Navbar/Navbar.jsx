import { Link } from "react-router";
import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.ul}>
					<li className={styles.li}>
						<Link to="/" className={styles.menuLink}>
							Home
						</Link>
					</li>
					<li className={styles.li}>
						<Link to="/shop" className={styles.menuLink}>
							Shop
						</Link>
					</li>
					<li className={styles.li}>
						<Link to="/cart" className={styles.menuLink}>
							Cart
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
