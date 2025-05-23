import { Route, Routes } from "react-router"
import PageNotFound from "../../../pages/404-page"
import IndexPage from "../../../pages/index-page"
import AboutPage from "../../../pages/about-page"
import FAQPage from '../../../pages/faq-page'
import CatalogPage from "../../../pages/catalog-page"


const Main = () => {
	return (
		<main>
			<Routes>
				<Route index element={<IndexPage />} />
				<Route path="/catalog" element={<CatalogPage />}>
					<Route path=":id" />
				</Route>
				<Route path="/about" element={<AboutPage />} />
				<Route path="/FAQ" element={<FAQPage />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</main>
	)
}
export default Main