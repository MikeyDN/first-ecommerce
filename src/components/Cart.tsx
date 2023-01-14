import { useCart } from 'react-use-cart'
import { useEffect } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import CartView from './CartView'

export default function Cart() {
  const [showPopup, setShowPopup] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const { cartTotal } = useCart()

  useEffect(() => {
    if (cartTotal > 0) {
      setShowPopup(true)
    } else {
      setShowPopup(false)
    }
  })

  const handleClick = () => {
    setShowCart(!showCart)
  }

  if (!showCart) {
    return (
      <>
        <motion.div
          layoutId="cart"
          className="cart-shortcut"
          animate={{ rotate: 360 }}
        >
          {showPopup && (
            <motion.div
              initial={{ scale: 3, y: -300, x: -500 }}
              animate={{ scale: 1, y: 0, x: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              key={cartTotal}
              className="cart-shortcut-items"
            />
          )}
          <button className="cart-shortcut-button" onClick={handleClick}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </motion.div>
      </>
    )
  } else
    return (
      <>
        <div
          className="grey-bg show"
          onClick={() => {
            setShowCart(false)
          }}
        />
        <motion.div layoutId="cart" className="cart-content">
          <CartView />
        </motion.div>
      </>
    )
}
