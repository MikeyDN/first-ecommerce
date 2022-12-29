import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../lib/types';


library.add(fas);

type productViewProps = {
    product: Product
}
export function CartIcon() {
    return (
        <button className="cart-icon">
            <FontAwesomeIcon icon={{ prefix: "fas", iconName: "shopping-cart" }} />
        </button>
    )
}