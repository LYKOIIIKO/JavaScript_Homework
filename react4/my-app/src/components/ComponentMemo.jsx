import { memo, useEffect } from 'react'

const ComponentMemo = ({ data }) => {

	useEffect(() => {
		console.log('Рендер мемоизированного компонента')
	})
	return (
		<div>
			{data.map(item => <div key={item.id.toString()}>{item.name}</div>)} 
		</div>
	) //при рендере списков для того чтобы реакт понимал что надо перерисовывать указывается значение key

}

export default memo(ComponentMemo) //из-за стрелочной функции