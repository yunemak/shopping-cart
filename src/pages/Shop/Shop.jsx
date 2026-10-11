import styles from "./Shop.module.css";

const Shop = () => {
	return (
		<div className={styles.itemContainer}>
			<div className={styles.item}>
				<h2 className={styles.title}>Item Name</h2>
				<img className={styles.img} alt="item image" />
				<input type="number" classList={styles.itemAmountInput} />
				<div>
					<button className={styles.increaseAmountButton}>+</button>
					<button className={styles.decreaseAmountButton}>-</button>
				</div>
				<button>Add To Cart</button>
			</div>
		</div>
	);
};

export default Shop;
