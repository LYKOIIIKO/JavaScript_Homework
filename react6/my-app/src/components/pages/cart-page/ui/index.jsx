import { useCart } from "../../../shared/context/CartContext";
import CartItem from "./components/CartItem/CartItem";

const CartPage = () => {
	const { cart, clear } = useCart();

	return (
		<div>
			<h1>Products</h1>
			{!!cart.length && (
				<div>
					{cart.map((item) => (
						<CartItem key={item.id.toString()} product={item} />
					))}
				</div>
			)}
			{!!cart.length && <button onClick={clear}>Clear all</button>}
		</div>
	);
};

export default CartPage;
