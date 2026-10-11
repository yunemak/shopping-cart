import { useEffect, useState } from "react";
import Item from "../../components/Item/Item";
import styles from "./Shop.module.css";

const Shop = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [items, setItems] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		async function fetchItems() {
			try {
				const response = await fetch(
					"https://fakestoreapi.com/products",
				);
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const data = await response.json();
				setItems(data);
			} catch (error) {
				setErrorMessage(error.message);
			} finally {
				setIsLoading(false);
			}
		}

		fetchItems();
	}, []);
	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (errorMessage) {
		return <div>Error occured</div>;
	}
	console.log(items);

	return (
		<div className={styles.shop}>
			{items.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</div>
	);
};

export default Shop;
