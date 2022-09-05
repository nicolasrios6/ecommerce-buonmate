import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'

const ItemDetail = ({data}) => {
    const {title, price, id, img, stock} = data
    const {addProductToCart, cartListItems} = useContext(CartContext)

    const sendItemToCart = (qty) => {       
        addProductToCart({...data, cantidad: qty})
    }

    return (
        <div className='itemDetail'>
            <div className='itemDetail__img'>
                <div className='itemDetail__img__cont'>
                    <img src={`/${img}`} alt='' />
                </div>
            </div>

            <div className='itemDetail__data'>
                <div className='itemDetail__data__info'>
                    <p className='itemDetail__data__info__title'>{title}</p>
                    <p className='itemDetail__data__info__price'>${price}</p>
                    <p className='itemDetail__data__info__sale'>20% de descuento con transferencia bancaria</p>
                </div>
                
                {cartListItems.find((item) => item.id === id) ?
                    <Link to={'/checkout'} className='itemDetail__data__finishLink'><button>Finalizar compra</button></Link> :
                    <div className='itemDetail__data__count'>
                        <p className='itemDetail__data__count__qty'>Cantidad:</p>
                        <ItemCount stock={stock} initial={1} onAdd={(sendItemToCart)}/>
                    </div> 
                }
            </div>
        </div>
    )
}

export default ItemDetail