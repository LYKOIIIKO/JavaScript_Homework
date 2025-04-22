import './App.css'
import Layout from './components/layout'
import { ListItem } from './components/layout/header'
import { ContextProvider } from './components/shared/context/CatalogContext'

function App() {

	return (
		<ContextProvider>
			<Layout />
		</ContextProvider>

	)
}

export default App
