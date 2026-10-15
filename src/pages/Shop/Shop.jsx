import Item from "../../components/Item/Item";
import styles from "./Shop.module.css";
import useFetch from "../../hooks/fetchData";
import { useOutletContext } from "react-router";
import Toast from "../../components/Toast/Toast";

const Shop = () => {
	const { addToCart, isAdded, setIsAdded } = useOutletContext();
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
			{isAdded ? <Toast /> : null}
		</div>
	);
};

export default Shop;
