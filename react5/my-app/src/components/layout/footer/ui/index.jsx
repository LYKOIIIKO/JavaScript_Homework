import { Link } from "react-router"
import { ListItem } from "../../header"

const Footer = () => {
	return (
		<footer>
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
		</footer>
	)
}

export default Footer