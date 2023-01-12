import Image from 'next/image'
import { useCart } from 'react-use-cart'
import { urlFor } from '../lib/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faAdd, faMinus } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion, useDragControls } from 'framer-motion'
import { PanInfo } from 'framer-motion'

export default function CartView() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart()

  const controls = useDragControls()

  const remove = (slug: string) => {
    return (event: PointerEvent, info: PanInfo) => {
      console.log(info.offset.x)
      if (info.offset.x < -100) {
        removeItem(slug)
      }
    }
  }

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>
      <div className="cart-items">
        <ul>
          <AnimatePresence mode="sync" initial={false}>
            {items.map((item, index) => (
              <motion.li
                key={item.slug.current}
                itemID={item.slug.current}
                id={item.slug.current}
                initial={{ x: 0, scale: 1 }}
                animate={{ x: 0, scale: 1 }}
                exit={{ x: -1000, y: -10, scale: 0 }}
                transition={{ duration: 0.4 }}
                drag="x"
                dragControls={controls}
                onDragEnd={remove(item.slug.current)}
                dragConstraints={{ left: 100, right: 0 }}
              >
                <div style={{ display: 'flex' }}>
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
                </div>

                <div className="cart-item-control">
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity! - 1)
                    }
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity! + 1)
                    }
                  >
                    <FontAwesomeIcon icon={faAdd} />
                  </button>
                  <button onClick={() => removeItem(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </>
  )
}
