import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

const Layout = () => {
	const [cart, setCart] = useState([]);

	function addToCart(item) {
		setCart((prevCart) => [...prevCart, item]);
		console.log(cart);
	}
	return (
		<>
			<Navbar />
			<Outlet context={{ cart, setCart, addToCart }} />
		</>
	);
};

export default Layout;
