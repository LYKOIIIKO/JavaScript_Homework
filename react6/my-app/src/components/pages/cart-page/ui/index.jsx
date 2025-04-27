import { useCart } from "../../../shared/context/CartContext";
import CartItem from "./components/CartItem/CartItem";

const CartPage = () => {
	const { cart } = useCart()

	return (
		<div>
			<h1>Products</h1>
			<div>
				{cart.map(item => <CartItem key={item.id.toString()} product={item} />)}
			</div>
		</div>
	)
};

export default CartPage
