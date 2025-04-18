import React from 'react'


/**
 * 
 * @param {{ action: () => void, symbol: string }} props 
 * @returns
 */
const Button = (props) => {
	return (
		<button onClick={() => props.action()}>{props.symbol}</button>
	)
}

export default Button