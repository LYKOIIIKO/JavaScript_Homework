import { useEffect } from 'react'

const Component = ({ data }) => {
	useEffect(() => {
			console.log('Рендер обычного компонента')
		})

	return (
		<div>
			{data.map(item => <div key={item.id.toString()}>{item.name}</div>)}
		</div>
	)
}

export default Component