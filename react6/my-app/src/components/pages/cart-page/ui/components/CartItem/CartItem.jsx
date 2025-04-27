import { useNavigate } from "react-router";
import { useCart } from "../../../../../shared/context/CartContext";
import styles from "./CartItem.module.css";

const CartItem = ({ product }) => {
	const { getCartStatus, removeItemCart } = useCart();

	const buttonHandler = (e) => {
		e.stopPropagation();
		if (product.id) {
			if (getCartStatus(product.id)) {
				removeItemCart(product.id);
			}
		}
	};

	const navigate = useNavigate();

	return (
		<div
			className={styles.container}
			onClick={() => navigate(`/catalog/${product.id}`)}
		>
			{product && (
				<div className={styles.productInfo}>
					<div className={styles.image}>
						<img src={product.image} alt={product.description} />
					</div>
					<div className={styles.title}>
						<h2>{product.title}</h2>
						<h5>{product.category}</h5>
					</div>
					<div className={styles.priceInfo}>
						<span>{product.price} $</span>
						<button onClick={buttonHandler}>Delete</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default CartItem;
