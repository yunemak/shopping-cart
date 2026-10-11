import { useEffect, useState } from "react";
import Item from "../../components/Item/Item";
import styles from "./Shop.module.css";

const Shop = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [items, setItems] = useState(null);

	async function fetchItems() {
		try {
			const response = await fetch("https://fakestoreapi.com/products/1");

			if (!response.ok) {
				throw new Error("Response is not ok!");
			}
			return items;
		} catch (error) {
			console.log(`Error: ${error}`);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		let items = fetchItems();
		if (items === null) {
			console.log("Problem");
		}
		setItems(items);
	}, []);

	return (
		<div className={styles.shop}>
			{isLoading ? <p>Loading...</p> : <Item item={items} />}
		</div>
	);
};

export default Shop;
