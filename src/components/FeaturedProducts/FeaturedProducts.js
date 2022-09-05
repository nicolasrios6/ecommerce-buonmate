import { Container } from '@mui/system'
import { useEffect, useState } from 'react'
import Item from '../Item/Item'
import './FeaturedProducts.scss'
import productos from '../../utils/productos'

const FProducts = () => {

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            resolve(productos)
        })
    }

    useEffect(() => {
        getProducts()
        .then( (res) => {
            // console.log('Respuesta Promesa: ', res)
            setProducts(res)
        })
        .catch( (err) => {
            // console.log('Falló la llamada.')
        })
    }, [])

    const featuredProducts = products.slice(2,6)

    return (
        <Container maxWidth={'xl'} className='FPContainer'>
            <p className='FPContainer__title'>Productos Destacados</p>

            <div className='FPContainer__items'>
                {featuredProducts.map(({title, price, img, id}) => {
                    return (
                        <Item key={id} title={title} price={price} img={img} id={id}/>
                    )
                })}
            </div>
        </Container>
    )
}

export default FProducts