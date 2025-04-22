import { Link } from "react-router"

const IndexPage = () => {
	return (
		<div>
			<h1>Добро пожаловать</h1>
			<p>Для ознакомления с товарами можно перейти на <Link to={'/catalog'}>страницу</Link></p>
		</div>
	)
}

export default IndexPage