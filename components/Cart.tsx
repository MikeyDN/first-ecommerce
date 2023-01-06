import { useCart } from 'react-use-cart'
import { useRef } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group'
import { motion } from 'framer-motion'

export default function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart()
  const nodeRef = useRef(null)
  const [hiddenCart, setHiddenCart] = useState(true)
  const [showCart, setShowCart] = useState(false)

  const handleClick = () => {
    setShowCart(!showCart)
  }

  if (!showCart)
    return (
      <>
        <motion.div
          layoutId="cart"
          className="cart-shortcut"
          animate={{ rotate: 360 }}
        >
          <button className="cart-shortcut-button" onClick={handleClick}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </motion.div>
      </>
    )
  else
    return (
      <>
        <div
          className="grey-bg show"
          onClick={() => {
            setShowCart(false)
          }}
        />
        <motion.div layoutId="cart" className="cart-content">
          <h1>Cart ({totalUniqueItems})</h1>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item.quantity} x {item.name} &mdash;
                <button
                  onClick={() =>
                    updateItemQuantity(item.id, item.quantity! - 1)
                  }
                >
                  -
                </button>
                <button
                  onClick={() =>
                    updateItemQuantity(item.id, item.quantity! + 1)
                  }
                >
                  +
                </button>
                <button onClick={() => removeItem(item.id)}>&times;</button>
              </li>
            ))}
          </ul>
        </motion.div>
      </>
    )
}
