import { Container, Divider, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import './Checkout.scss'
import { useContext, useState } from 'react';
import CartContex from '../../context/CartContext'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import Modal from '../Modal/Modal'
import {addDoc, collection} from 'firebase/firestore'
import db from '../../utils/firebaseConfig'

const Checkout = () => {

    const {cartListItems, totalPrice, deleteItem, cleanCartProducts} = useContext(CartContex)
    const [showModal, setShowModal] = useState(false)
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: '',
    })

    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map((item) => {
            return {
                id: item.id ,
                title: item.title ,
                price: item.price
            }
        }),
        total: totalPrice
    })

    const [success, setSuccess] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
    }

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name] : e.target.value})
    }

    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        console.log("orden generada: ",orderDoc.id)
        setSuccess(orderDoc.id)
        cleanCartProducts()
    }

    const finishOrder = () => {
        navigate('/')
    }

    return (
        <Container className='checkout'>
            <p className='checkout__title'>Checkout</p>
            <div className='checkout__content'>
                <div className='checkout__content__titles'>
                    <div className='checkout__content__titles__title'>
                        <p>Producto</p>
                    </div>
                    <div className='checkout__content__titles__title'>
                        <p>Detalle</p>
                    </div>
                    <div className='checkout__content__titles__title'>
                        <p>Eliminar</p>
                    </div>
                </div>
                <Divider />

                {cartListItems.length === 0 ?
                    <div className='checkout__content__back'>
                        <h2>No hay productos agregados</h2>
                        <Link to={'/products'} className='checkout__content__back__btn'><button className='btnBack'>Ver productos</button></Link>
                    </div> : 
                    ''
                }


            {cartListItems.map((item) => {
                const {title, price, id, cantidad, img} = item
                return (
                    <>
                        <div className='checkout__content__info' key={id}>
                            <div className='checkout__content__info__img'>
                                <img src={`/${img}`} alt=''/>
                            </div>

                            <div className='checkout__content__info__detail'>
                                <p><b>Nombre:</b> {title}</p>
                                <p><b>Precio Unitario:</b> ${price}</p>
                                <p><b>Cantidad:</b> {cantidad}</p>
                            </div>

                            <div className='checkout__content__info__delete'>
                                <button onClick={() => deleteItem(id)}><DeleteIcon className='icon'/></button>
                            </div>
                        </div>
                        <Divider />
                    </>
                )
            })}

            </div>

            <div className='checkout__bottom'>
                <div className='checkout__bottom__left'>
                    <Link to={'/products'}><button className='checkout__bottom__left__btn'>Continuar comprando</button></Link>
                </div>

                <div className='checkout__bottom__right'>
                    <p className='checkout__bottom__right__subtotal'>Subtotal:</p>
                    <p className='checkout__bottom__right__subtotalPrice'>${totalPrice}</p>
                    <p className='checkout__bottom__right__total'>Total:</p>
                    <p className='checkout__bottom__right__totalPrice'>${totalPrice}</p>
                    <button className='checkout__bottom__right__btn' onClick={() => setShowModal(true)}>Finalizar compra</button>
                </div>
            </div>

            <Modal 
                title={success ? 'Compra exitosa' : 'Formulario de contacto'} 
                open={showModal} 
                handleClose={() => setShowModal(false)}
            >
                {success ?
                    (
                        <div className="success__container">
                            <p className="success__container__title">La orden se generó con exito!</p>
                            <p className="success__container__number"><span>Código de orden:</span> {success}</p>
                            <button className="success__container__btn" onClick={finishOrder}>Aceptar</button>
                        </div>
                    ) :

            
                    <form onSubmit={handleSubmit} className='form'>
                        <TextField 
                            className='form__input'
                            name='name'
                            id='outlined-basic' 
                            label='Nombre y Apellido' 
                            variant='outlined'
                            onChange={handleChange}
                            value={formValue.name}
                        />

                        <TextField 
                            className='form__input'
                            name='phone'
                            id='outlined-basic' 
                            label='Telefono' 
                            variant='outlined'
                            onChange={handleChange}
                            value={formValue.phone}
                        />

                        <TextField 
                            className='form__input'
                            name='email'
                            id='outlined-basic' 
                            label='Email' 
                            variant='outlined'
                            onChange={handleChange}
                            value={formValue.email}
                        />

                        <button classname='form__btn' type='submit'>Enviar</button>
                    </form>
                }       
            </Modal>
        </Container>
    );
}
 
export default Checkout;