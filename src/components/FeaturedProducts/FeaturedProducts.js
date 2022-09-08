import { Container } from '@mui/system'
import { useEffect, useState } from 'react'
import './FeaturedProducts.scss'
import Item from '../Item/Item'
import db from '../../utils/firebaseConfig'
import {collection, getDocs} from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const FProducts = () => {

    const [products, setProducts] = useState([])
    const { category } = useParams()

    useEffect(() => {
        setProducts([])
        getProductsFirebase()
        .then((productos) => {
            category ? filterByCategory(productos, category) : setProducts(productos)
        })
    }, [category])

    const getProductsFirebase = async () => {
        const productSnapshot = await getDocs(collection(db, 'productos'))
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList.slice(1, 5)
    }

    const filterByCategory = (array, category) => {
        let filtro = array.filter(item => item.category === category)
        setProducts(filtro)
    }



    return (
        <Container maxWidth={'xl'} className='FPContainer'>
            <p className='FPContainer__title'>Productos Destacados</p>

            <div className='FPContainer__items'>
                {products.map(({title, price, img, id}) => {
                    return (
                        <Item key={id} title={title} price={price} img={img} id={id}/>
                    )
                })}
            </div>
        </Container>
    )
}

export default FProducts