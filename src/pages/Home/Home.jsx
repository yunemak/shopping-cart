import styles from "./Home.module.css";
import fakeStoreIcon from "../../assets/fake-store-icon.svg";

const Home = () => {
	return (
		<div className={styles.hero}>
			<h1>Welcome to FakeStore</h1>
			<img src={fakeStoreIcon} className={styles.heroIcon} />
		</div>
	);
};

export default Home;
