import Logo from "../../assets/react.svg";
import Nav from "../Nav/Nav";
import * as styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<img src={Logo} alt="Logo" />
			<Nav />
		</header>
	);
};

export default Header;
