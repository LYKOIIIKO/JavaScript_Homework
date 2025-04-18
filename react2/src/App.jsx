import React, { useState, useEffect } from 'react'
import Button from './Button'
import Counter from './Counter'
import Modal from './Modal'
import error from './ico_heart.svg' //обычный импорт картинки


const App = () => {
	const [counter, setCounter] = useState(0) //функция отслеживания состояния элемента. counter - значение состояния, setCounter - функция которая опзволяет это значение обновить
	const [open, setOpen] = useState(false)

	useEffect(() => {
		console.log('работа useEffect')
	}, [counter]) //при каждом измееннии counter будет вызываться функция которая висит в useEffect. если параметр не передавать (оставить пустой []) функция в теле useEffect выполнится один раз в момент рендера компонента. если ничего не указывать после функции, даже пустой [], useEffect будет отрабатывать на любое изменение состояния

	useEffect(() => {
	  if(open) {
		setCounter(100)
	  } else {
		setCounter(0)
	  }
	}, [open])

	const getRandomColor = (min,max) => {
		return Math.floor(Math.random() * (max + 1 - min) + min)
	}

	document.body.style.transition = `0.5s ease-out`

	useEffect(() => {
	  document.body.style.background = `rgba(${getRandomColor(0, 255)}, ${getRandomColor(0, 255)}, ${getRandomColor(0, 255)}, ${Math.random()})`
	}, [open, counter])


	return (
		<div className="buttons">
			<img src={error} alt="error" />
			<Counter>
				{counter}
			</Counter>
			<Button action={() => setCounter(counter - 1)} symbol='-' />
      		<Button action={() => setCounter(counter + 1)} symbol='+' />
			<div>
				<Button action={() => setOpen(!open)} symbol={open ? 'Закрыть' : 'Открыть'} />
				{open && <Modal />}
			</div>
		</div> 
	)
}
export default App