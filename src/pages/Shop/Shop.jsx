import { useState } from "react";
import Item from "../../components/Item/Item";
import styles from "./Shop.module.css";

const Shop = () => {
	const [isLoading, setIsLoading] = useState(true);

	fetch("https://fakestoreapi.com/products/1")
		.then((res) => res.json())
		.then((json) => console.log(json));
	return (
		<div className={styles.shop}>
			{isLoading ? <p>Loading...</p> : <Item item={item} />}
		</div>
	);
};

export default Shop;
