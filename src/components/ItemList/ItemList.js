import './ItemList.scss'
import { Container } from '@mui/material'
import Item from '../Item/Item'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// Firestore
import { collection, getDocs } from 'firebase/firestore'
import db from '../../utils/firebaseConfig'

const ItemList = () => {

    const [products, setProducts] = useState([])
    const {category} = useParams()

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
            console.log('doc: ', doc.data())
            let product = doc.data()
            product.id = doc.id
            return product
        })
        console.log(productList)
        return productList
    }  

    const filterByCategory = (array, category) => {
        let filtro = array.filter(item => item.category === category);
        setProducts(filtro)
    }

    return (
        <Container sx={'xl'} className='itemList'>
            <h3 className='itemList__title'>Productos</h3>
            <div className='itemList__items'>
                {products.map(({title, price, img, id}) => {
                    return (
                        <Item 
                            key={id} 
                            title={title} 
                            price={price} 
                            img={img} 
                            id={id}
                        />
                    )
                })}
            </div>
        </Container>
    )
}

export default ItemList