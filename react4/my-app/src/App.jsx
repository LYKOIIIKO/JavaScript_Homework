import { useState, useMemo, useCallback, useRef, useEffect, useId, Suspense, lazy, createContext } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import ComponentMemo from './components/ComponentMemo'
import Component from './components/Component'
import { Link, Route, Routes } from 'react-router'
import Page1 from './components/Page1'

const Page2 = lazy(() => import('./components/Page2')) //ленивая функция реакта

export const initialValues = [
	{
		id: 1,
		name: 'Alex1'
	},
	{
		id: 2,
		name: 'Alex2'
	},
	{
		id: 3,
		name: 'Alex3'
	},
	{
		id: 4,
		name: 'Alex4'
	},
	{
		id: 5,
		name: 'Alex5'
	},
	{
		id: 6,
		name: 'Alex6'
	}
]

export const AppContext = createContext()

function App() {
	const [param, setParam] = useState(null)
	const [text, setText] = useState('')
	const inputRef = useRef(null)
	const firstRender = useRef(true)
	const id = useId()

	const renderValue = useMemo(() => initialValues.filter(item => item.id !== param), [param])


	useEffect(() => {
		console.log(document.querySelector(`#${id}`));
	})

	useEffect(() => {
		console.log(inputRef);
	})

	useEffect(() => {
		if (firstRender.current) {
			console.log('первый рендер')
			firstRender.current = false
		} else {
			console.log('не первый рендер')
		}
	})

	const alertText = useCallback(() => {
		alert(text)
	}, [param])


	return (
		<AppContext.Provider value={{ param, text }}>
			<div>
				<input id={id} ref={inputRef} type="text" value={text} onChange={(e) => setText(e.target.value)} />
				<input type="text" value={param} onChange={(e) => setParam(+e.target.value)} />
				<Link to={'/page1'} >Page1</Link>
				<Link to={'/page2'} >Page2</Link>
				{renderValue.map(item => <Link to={`/page2/${item.id}`}>{item.name}</Link>)}

				<ComponentMemo data={renderValue} />
				<br />
				<Component data={renderValue} />
				<button onClick={alertText}>Alert</button>
				<Routes>
					<Route path='/page1' element={<Page1 />} />
					<Route path='/page2' element={
						<Suspense fallback={
							<div className='logo react'>
								<img src={reactLogo} alt="" />
							</div>
						}>
							<Page2 />
						</Suspense>
					} >
						<Route
							path=':id'
							element={
								<Suspense fallback={
									<div className='logo react'>
										<img src={reactLogo} alt="" />
									</div>
								}>
									<Page2 />
								</Suspense>
							}
						/>
					</Route>

				</Routes>
			</div>
		</AppContext.Provider>
	)
}

export default App
