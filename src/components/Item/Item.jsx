import styles from "./Item.module.css";

const Item = ({ item }) => {
	return (
		<div className={styles.item}>
			<h2 className={styles.title}>{item.title}</h2>
			<img src={item.image} className={styles.img} alt="item image" />
			<input type="text" className={styles.itemAmountInput} />
			<div className={styles.amountButtonsContainer}>
				<button className={styles.decreaseAmountButton}>-</button>
				<button className={styles.increaseAmountButton}>+</button>
			</div>
			<button className={styles.addToCartButton}>Add To Cart</button>
		</div>
	);
};

export default Item;
