import { useCart } from 'react-use-cart'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { urlFor } from '../lib/client'

export default function Cart() {
  const nodeRef = useRef(null)
  const [showPopup, setShowPopup] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart()

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
          <h1>Cart ({totalUniqueItems})</h1>
          <div className="cart-items">
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <div className="cart-item-image">
                    <Image
                      src={urlFor(item.image[0]).width(100).height(100).url()}
                      alt={item.id}
                      fill
                      sizes="(min-width: 1080px) 300px,
                            1080px"
                    />
                  </div>

                  <div className="cart-item-details">
                    <div className="cart-item-name">
                      <h4>{item.name}</h4>
                    </div>
                    <div className="cart-item-price">Price: {item.price}$</div>
                    <div className="cart-item-quantity">
                      Qty: {item.quantity}
                    </div>
                  </div>

                  <div className="cart-item-control">
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
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </>
    )
}
