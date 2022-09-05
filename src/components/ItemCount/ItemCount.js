import './ItemCount.scss'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(1)

    const addCount = () =>  {
        setCount(count + 1)
    }

    const removeCount = () => {
        setCount(count - 1)
    }

    return (
        <div className='countCont'>
            <div className='countCont__display'>
                <button className='countCont__display__addRemove' onClick={removeCount} disabled={count === initial}>-</button>
                <p className='countCont__display__number'>{count}</p>
                <button className='countCont__display__addRemove' onClick={addCount} disabled={count === stock}>+</button>
            </div>
            <div className='countCont__add'>
                <button className='countCont__add__btn' onClick={() => (onAdd(count))}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount