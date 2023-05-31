
import React, { useState } from 'react'
import OnlyInStockProductsSwitcher from './OnlyInStockProductsSwitcher'
import Products from './Products'
import Blocks from './Blocks'
import TypeDisplay from './TypeDisplay'
import Cookies from 'js-cookie'
// import './asset/home.css'
// import './asset/style.css'


const App = () => {
	const [inStock, setInStock] = useState(
		undefined === Cookies.get('onlyInStockProducts')
		||
		'true' === Cookies.get('onlyInStockProducts')
	)
	const switchInStock = () => {
		Cookies.set('onlyInStockProducts', !inStock, { expires: 365 })
		setInStock(!inStock)
	}

	const [inDisplay, setInDisplay] = useState(
		Cookies.get('onlyInDisplay') ?? 'lines')

	const switchInDisplay = (e) => {
		Cookies.set('onlyInDisplay', e.target.value, { expires: 365 })
		setInDisplay(e.target.value)
	}

	return <>
		<TypeDisplay inDisplay={inDisplay} switchInDisplay={switchInDisplay} container={document.getElementById('type-display-switcher')} />

		<OnlyInStockProductsSwitcher
			inStock={inStock}
			switchInStock={switchInStock}
			container={document.getElementById('only-in-stock-products-switcher')}
		/>
		<OnlyInStockProductsSwitcher
			inStock={inStock}
			switchInStock={switchInStock}
			container={document.getElementById('only-in-stock-products-switcher-mobile')}
		/>
		{inDisplay === 'lines' ?
			<Products
				inStock={inStock}
				container={document.getElementById('widget-product-variation-selector')} />
			:
			<Blocks inStock={inStock}
				container={document.getElementById('widget-product-variation-selector')} />}
	</>
}

export default App
