import { Link } from "react-router"

const PageNotFound = () => {
	return (
		<div>
			<h1>404</h1>
			<h2>Страница не найдена <Link to={'/'}>вернутся на главную страницу</Link></h2>
		</div>
	)
}

export default PageNotFound