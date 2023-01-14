import { useCart } from 'react-use-cart'
import { useEffect, useState } from 'react'
import { calculateShipping } from '../lib/shipping'
import { countryList } from '../lib/countries'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Combobox,
  ComboboxItem,
  ComboboxPopover,
  useComboboxState,
} from 'ariakit/combobox'
import Checkout from './Checkout'

export default function CartTotal() {
  const [destination, setDestination] = useState('Israel')
  const { cartTotal } = useCart()
  const [checkout, setCheckout] = useState(false)

  const combobox = useComboboxState({
    gutter: 4,
    sameWidth: true,
    list: countryList,
    defaultValue: 'Israel',
  })

  useEffect(() => {
    const combox = document.getElementById(
      'shipping-selector',
    ) as HTMLInputElement
    setDestination(combox.value)
  }, [combobox])

  return (
    <>
      <div
        style={{ marginLeft: '2vw', position: 'relative', zIndex: 92 }}
        className="beautiful-box"
      >
        <div style={{ position: 'relative', zIndex: 100 }}>
          <div
            className="cart-total"
            style={{ position: 'relative', zIndex: 101 }}
          >
            <ul>
              <li>
                <span>Cart price:</span> {cartTotal}$
              </li>
              <li>
                <span>Shipping cost:</span> {calculateShipping(destination)}$
              </li>
              <li>
                <span>Total Cost:</span>{' '}
                {cartTotal + calculateShipping(destination)}$
              </li>
            </ul>
          </div>
          <div className="combobox-wrapper">
            <label className="beautiful-box">
              Country:
              <Combobox
                state={combobox}
                placeholder="e.g., Apple"
                className="combobox"
                id="shipping-selector"
              />
            </label>
            <ComboboxPopover state={combobox} className="popover">
              {combobox.matches.length ? (
                combobox.matches.map((value) => (
                  <ComboboxItem
                    key={value}
                    value={value}
                    className="combobox-item"
                  />
                ))
              ) : (
                <div className="no-results">No results found</div>
              )}
            </ComboboxPopover>
          </div>
          <button
            className="checkout-button"
            onClick={() => {
              setCheckout(!checkout)
            }}
          >
            Checkout
          </button>
        </div>
      </div>
      {/* <div
        style={{
          position: 'absolute',
          zIndex: 50,
        }}
      > */}
      <div
        style={{
          position: 'relative',
        }}
      >
        <AnimatePresence>
          {checkout && (
            <motion.div
              initial={{ x: -20 }}
              animate={{ x: -310 }}
              exit={{ x: -20 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 50,
                position: 'absolute',
                right: 0,
              }}
              transition={{ duration: 0.2 }}
              className="beautiful-box"
            >
              <Checkout destination={destination} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* </div> */}
    </>
  )
}
