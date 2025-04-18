import { memo, useEffect } from 'react'

const ComponentMemo = ({ data }) => {

	useEffect(() => {
		console.log('Рендер мемоизированного компонента')
	})
	return(
		<div>
			{data.map(item => <div key={item.id.toString()}>{item.name}</div>)}
		</div>
	)

}

export default memo(ComponentMemo)