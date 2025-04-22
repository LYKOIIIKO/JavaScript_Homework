import { Link } from "react-router"
import ListItem from "./components/ListItem"

const Header = () => {
	return (
		<header>
			<Link to={'/'}>
				<div className="logo">
					<img src="https://placehold.co/100x100" alt="logo" />
				</div>
			</Link>
			<nav>
				<ul>
					<ListItem><Link to={'/catalog'} >Catalog</Link></ListItem>
					<ListItem><Link to={'/about'} >About</Link></ListItem>
					<ListItem><Link to={'/FAQ'} >FAQ</Link></ListItem>
				</ul>
			</nav>
		</header>
	)
}

export default Header