import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

const Layout = () => {
	const [isAdded, setIsAdded] = useState(false);
	const [cart, setCart] = useState([]);

	function addToCart(item) {
		setCart((prevCart) => [...prevCart, item]);
		setIsAdded(true);
		setTimeout(setIsAdded, 3000, false);
		console.log(cart);
	}
	return (
		<>
			<Navbar />
			<Outlet
				context={{ cart, setCart, addToCart, isAdded, setIsAdded }}
			/>
		</>
	);
};

export default Layout;
