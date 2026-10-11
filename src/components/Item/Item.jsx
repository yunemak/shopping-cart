import styles from "./Item.module.css";

const Item = ({ item }) => {
	return (
		<div className={styles.item}>
			<h2 className={styles.title}>Item Name</h2>
			<img className={styles.img} alt="item image" />
			<input type="text" className={styles.itemAmountInput} />
			<div>
				<button className={styles.increaseAmountButton}>+</button>
				<button className={styles.decreaseAmountButton}>-</button>
			</div>
			<button>Add To Cart</button>
		</div>
	);
};

export default Item;
