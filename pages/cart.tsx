import { useCart } from 'react-use-cart'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { urlFor } from '../lib/client'

export default function cartPage() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart()

  return (
    <>
      <motion.div className="cart">
        <h1>Cart ({totalUniqueItems})</h1>
        <div className="items">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <div className="cart-item-image">
                  <Image
                    src={urlFor(item.image[0]).width(150).height(150).url()}
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
                  <div className="cart-item-quantity">Qty: {item.quantity}</div>
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
