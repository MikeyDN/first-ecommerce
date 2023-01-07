import { useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, fas } from '@fortawesome/free-solid-svg-icons'
import { Product } from '../lib/types'
import { useCart } from 'react-use-cart'
import { urlFor } from '../lib/client'

type productViewProps = {
  product: Product
}
export function AddToCartIcon(props: productViewProps) {
  props.product.id = props.product.slug.current
  const { addItem } = useCart()
  const [, updateState] = useState()
  const forceUpdate = useCallback(() => updateState(undefined), [])
  var isVisible = false

  const toggleVisibility = () => {
    isVisible = !isVisible
  }

  const handleClick = () => {
    addItem(props.product)
    toggleVisibility()
    forceUpdate()
  }

  return (
    <>
      <button className="cart-icon" onClick={handleClick}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
      {isVisible && (
        <div className="popup">
          <div className="popup_inner">
            <h1>{props.product.name} added to cart</h1>
            <button onClick={toggleVisibility}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}
