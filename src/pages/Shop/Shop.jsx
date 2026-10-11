import Item from "../../components/Item/Item";
import styles from "./Shop.module.css";
import useFetch from "../../hooks/fetchData";
import { useOutletContext } from "react-router";

const Shop = () => {
	const { addToCart } = useOutletContext();
	const {
		data: items,
		isLoading,
		errorMessage,
	} = useFetch("https://fakestoreapi.com/products");

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
				<Item key={item.id} item={item} addToCart={addToCart} />
			))}
		</div>
	);
};

export default Shop;
