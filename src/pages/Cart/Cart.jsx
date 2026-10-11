import { useOutletContext } from "react-router";
import Item from "../../components/Item/Item";

const Cart = () => {
	const { cart } = useOutletContext();
	return (
		<div>
			<h1>My Cart</h1>
			{cart.map((item) => (
				<p key={item.id}>{item.title}</p>
			))}
		</div>
	);
};

export default Cart;
